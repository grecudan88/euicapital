/**
 * Cloudflare Worker for euicapital.
 *
 * Static pages (the Next.js export in ./out) are served directly by Cloudflare's
 * asset layer and never reach this code. Only requests with no matching asset
 * arrive here — which is how /api/* gets handled.
 */

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

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validate(raw: Record<string, unknown>): { lead: Lead } | { errors: string[] } {
  const lead = Object.fromEntries(
    (Object.keys(FIELD_LIMITS) as (keyof Lead)[]).map((k) => [k, clean(raw[k], FIELD_LIMITS[k])]),
  ) as Lead;

  const errors: string[] = [];
  if (lead.name.length < 2) errors.push("Please tell us your name.");
  if (!/^[^@\s]+@[^@\s.]+\.[^@\s]{2,}$/.test(lead.email)) errors.push("Please use a valid email address.");
  if (lead.message.length < 20) errors.push("Please describe your project in at least 20 characters.");

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
    Object.entries(meta).map(([k, v]) => `${k}: ${v}`).join("\n");

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
  if (request.method !== "POST") return json({ ok: false, errors: ["Method not allowed."] }, 405);

  let raw: Record<string, unknown>;
  try {
    const ct = request.headers.get("content-type") ?? "";
    raw = ct.includes("application/json")
      ? await request.json()
      : Object.fromEntries(await request.formData());
  } catch {
    return json({ ok: false, errors: ["Could not read the submitted form."] }, 400);
  }

  // Honeypot: real users never fill a hidden field. Answer 200 so bots stop retrying.
  if (clean(raw.company_website, 200)) return json({ ok: true });

  const result = validate(raw);
  if ("errors" in result) return json({ ok: false, errors: result.errors }, 422);

  const delivered = await deliver(result.lead, env, {
    received: new Date().toISOString(),
    country: request.headers.get("cf-ipcountry") ?? "unknown",
    userAgent: (request.headers.get("user-agent") ?? "unknown").slice(0, 200),
  });

  if (!delivered) {
    // No delivery channel configured yet — see README "Contact form delivery".
    console.error("contact: no delivery channel configured", result.lead.email);
    return json(
      { ok: false, errors: [`Our form is offline. Please email us at ${env.CONTACT_TO}.`] },
      503,
    );
  }

  return json({ ok: true });
}

export default {
  async fetch(request, env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/contact") return handleContact(request, env);
    if (pathname === "/api/health") return json({ ok: true, service: "euicapital" });
    if (pathname.startsWith("/api/")) return json({ ok: false, errors: ["Not found."] }, 404);

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
