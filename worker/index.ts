/**
 * Cloudflare Worker for euicapital.
 *
 * Static pages (the Next.js export in ./out) are served directly by Cloudflare's
 * asset layer and never reach this code. Only requests with no matching asset
 * arrive here, which is how three things get handled:
 *
 *   1. `/` — no asset exists at the root, so we land the visitor in a language.
 *   2. `/api/*` — the contact endpoint.
 *   3. Everything else — a localised 404.
 */

const LOCALES = ["ro", "en"] as const;
type Locale = (typeof LOCALES)[number];

/** Romanian is primary: it wins whenever the visitor has not said otherwise. */
const DEFAULT_LOCALE: Locale = "ro";

/**
 * When true, a browser that ranks English above Romanian is sent to /en/.
 * Set to false to force every first visit to Romanian regardless of browser.
 */
const RESPECT_BROWSER_LANGUAGE = true;

interface Env {
  ASSETS: Fetcher;
  CONTACT_TO: string;
  /** Optional secret: npx wrangler secret put RESEND_API_KEY */
  RESEND_API_KEY?: string;
  /** Optional secret: any URL that accepts a JSON POST (Slack, Zapier, n8n...) */
  CONTACT_WEBHOOK_URL?: string;
  /** Optional: npx wrangler kv namespace create LEADS */
  LEADS?: KVNamespace;
}

type Lead = {
  name: string;
  email: string;
  organisation: string;
  country: string;
  stage: string;
  budget: string;
  message: string;
};

const FIELD_LIMITS: Record<keyof Lead, number> = {
  name: 120,
  email: 200,
  organisation: 160,
  country: 80,
  stage: 80,
  budget: 80,
  message: 4000,
};

/** Validation messages, in the language the visitor filled the form in. */
const MESSAGES = {
  ro: {
    name: "Vă rugăm să ne spuneți numele.",
    email: "Vă rugăm să folosiți o adresă de e-mail validă.",
    message: "Vă rugăm să descrieți proiectul în cel puțin 20 de caractere.",
    method: "Metodă nepermisă.",
    unreadable: "Nu am putut citi formularul trimis.",
    notFound: "Nu a fost găsit.",
    offline: (to: string) => `Formularul este indisponibil. Vă rugăm să scrieți la ${to}.`,
  },
  en: {
    name: "Please tell us your name.",
    email: "Please use a valid email address.",
    message: "Please describe your project in at least 20 characters.",
    method: "Method not allowed.",
    unreadable: "Could not read the submitted form.",
    notFound: "Not found.",
    offline: (to: string) => `Our form is offline. Please email us at ${to}.`,
  },
} satisfies Record<Locale, unknown>;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Reads the `locale` cookie set by the language switcher. */
function cookieLocale(request: Request): Locale | null {
  const header = request.headers.get("cookie");
  if (!header) return null;
  const match = /(?:^|;\s*)locale=([^;]+)/.exec(header);
  const value = match?.[1]?.trim();
  return value && isLocale(value) ? value : null;
}

/**
 * Picks a locale from Accept-Language by quality value. Romanian wins ties and
 * wins outright when the header is missing, unparseable, or mentions neither.
 */
function browserLocale(request: Request): Locale {
  if (!RESPECT_BROWSER_LANGUAGE) return DEFAULT_LOCALE;

  const header = request.headers.get("accept-language");
  if (!header) return DEFAULT_LOCALE;

  const scores: Record<Locale, number> = { ro: 0, en: 0 };

  for (const part of header.split(",")) {
    const [tag, ...rest] = part.trim().split(";");
    const qPart = rest.find((r) => r.trim().startsWith("q="));
    const q = qPart ? Number.parseFloat(qPart.trim().slice(2)) : 1;
    if (!Number.isFinite(q)) continue;

    const primary = tag.trim().toLowerCase().split("-")[0];
    if (isLocale(primary) && q > scores[primary]) scores[primary] = q;
  }

  // Strictly greater: an equal score keeps the visitor on the primary language.
  return scores.en > scores.ro ? "en" : DEFAULT_LOCALE;
}

/** Locale implied by the URL, for 404s on paths like /en/nope/. */
function pathLocale(pathname: string): Locale | null {
  const first = pathname.split("/").filter(Boolean)[0];
  return first && isLocale(first) ? first : null;
}

function redirectToLocale(request: Request): Response {
  const url = new URL(request.url);
  const locale = cookieLocale(request) ?? browserLocale(request);

  url.pathname = `/${locale}/`;
  return new Response(null, {
    status: 302, // Not permanent: the visitor's language can change.
    headers: {
      location: url.toString(),
      // Caches must not serve one visitor's language to another.
      vary: "Accept-Language, Cookie",
      "cache-control": "no-store",
    },
  });
}

async function serveNotFound(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const locale = pathLocale(url.pathname) ?? cookieLocale(request) ?? browserLocale(request);

  const page = await env.ASSETS.fetch(new URL(`/${locale}/404/`, url));
  return new Response(page.body, {
    status: 404,
    headers: { "content-type": page.headers.get("content-type") ?? "text/html; charset=utf-8" },
  });
}

function validate(
  raw: Record<string, unknown>,
  locale: Locale,
): { lead: Lead } | { errors: string[] } {
  const lead = Object.fromEntries(
    (Object.keys(FIELD_LIMITS) as (keyof Lead)[]).map((k) => [k, clean(raw[k], FIELD_LIMITS[k])]),
  ) as Lead;

  const m = MESSAGES[locale];
  const errors: string[] = [];
  if (lead.name.length < 2) errors.push(m.name);
  if (!/^[^@\s]+@[^@\s.]+\.[^@\s]{2,}$/.test(lead.email)) errors.push(m.email);
  if (lead.message.length < 20) errors.push(m.message);

  return errors.length ? { errors } : { lead };
}

async function deliver(lead: Lead, env: Env, meta: Record<string, string>): Promise<boolean> {
  const summary =
    `New enquiry from ${lead.name} <${lead.email}>\n\n` +
    `Organisation: ${lead.organisation || "—"}\n` +
    `Country: ${lead.country || "—"}\n` +
    `Project stage: ${lead.stage || "—"}\n` +
    `Indicative budget: ${lead.budget || "—"}\n\n` +
    `${lead.message}\n\n---\n` +
    Object.entries(meta)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

  let delivered = false;

  if (env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: "EUI Capital website <website@euicapital.com>",
        to: [env.CONTACT_TO],
        reply_to: lead.email,
        subject: `Enquiry — ${lead.organisation || lead.name}`,
        text: summary,
      }),
    });
    delivered ||= res.ok;
  }

  if (env.CONTACT_WEBHOOK_URL) {
    const res = await fetch(env.CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text: summary, lead, meta }),
    });
    delivered ||= res.ok;
  }

  if (env.LEADS) {
    const key = `lead:${new Date().toISOString()}:${crypto.randomUUID()}`;
    await env.LEADS.put(key, JSON.stringify({ lead, meta }), {
      expirationTtl: 60 * 60 * 24 * 365,
    });
    delivered = true;
  }

  return delivered;
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  const fallbackLocale = cookieLocale(request) ?? DEFAULT_LOCALE;

  if (request.method !== "POST") {
    return json({ ok: false, errors: [MESSAGES[fallbackLocale].method] }, 405);
  }

  let raw: Record<string, unknown>;
  try {
    const ct = request.headers.get("content-type") ?? "";
    raw = ct.includes("application/json")
      ? await request.json()
      : Object.fromEntries(await request.formData());
  } catch {
    return json({ ok: false, errors: [MESSAGES[fallbackLocale].unreadable] }, 400);
  }

  const submitted = clean(raw.locale, 5);
  const locale: Locale = isLocale(submitted) ? submitted : fallbackLocale;

  // Honeypot: real users never fill a hidden field. Answer 200 so bots stop retrying.
  if (clean(raw.company_website, 200)) return json({ ok: true });

  const result = validate(raw, locale);
  if ("errors" in result) return json({ ok: false, errors: result.errors }, 422);

  const delivered = await deliver(result.lead, env, {
    received: new Date().toISOString(),
    language: locale,
    country: request.headers.get("cf-ipcountry") ?? "unknown",
    userAgent: (request.headers.get("user-agent") ?? "unknown").slice(0, 200),
  });

  if (!delivered) {
    // No delivery channel configured yet — see README "Contact form delivery".
    console.error("contact: no delivery channel configured", result.lead.email);
    return json({ ok: false, errors: [MESSAGES[locale].offline(env.CONTACT_TO)] }, 503);
  }

  return json({ ok: true });
}

export default {
  async fetch(request, env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/contact") return handleContact(request, env);
    if (pathname === "/api/health") return json({ ok: true, service: "euicapital" });
    if (pathname.startsWith("/api/")) {
      const locale = cookieLocale(request) ?? DEFAULT_LOCALE;
      return json({ ok: false, errors: [MESSAGES[locale].notFound] }, 404);
    }

    if (pathname === "/" || pathname === "") return redirectToLocale(request);

    const asset = await env.ASSETS.fetch(request);
    if (asset.status === 404) return serveNotFound(request, env);
    return asset;
  },
} satisfies ExportedHandler<Env>;
