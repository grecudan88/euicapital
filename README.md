# EUI Capital

Marketing and lead-generation site for an EU funding consultancy.

**Stack:** Next.js 16 (App Router, static export) · React 19 · Tailwind CSS 4 · TypeScript
**Languages:** Romanian (primary) and English, at `/ro/` and `/en/`
**Hosting:** Cloudflare Workers — static assets from the edge, plus one Worker route for the contact API.

---

## Why static export instead of full Next.js on Cloudflare

Cloudflare can run full Next.js through [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) — SSR, Server Actions, ISR and all. This project does not use it, because nothing here needs a server at request time.

Instead `next.config.ts` sets `output: "export"`. Every page is prerendered to HTML at build time and served directly by Cloudflare's asset layer, which means:

- Google crawls real HTML, not an empty `<div id="root">`
- No adapter layer, no Node shims, no cold starts on page loads
- Static asset requests are not billed as Worker invocations

The one thing that genuinely needs a server — the contact form — is a plain Worker handler in [`worker/index.ts`](worker/index.ts).

**If you later need SSR** (a gated client portal, a live call database, authenticated pages), install `@opennextjs/cloudflare`, drop `output: "export"` from the Next config, and point `main` at the adapter's entry. The pages themselves do not change.

---

## Getting started

```bash
npm install
npm run dev          # Next dev server on http://localhost:3000
```

`npm run dev` does not run the Worker, so `/api/contact` returns a 404 there. To exercise the real thing:

```bash
npm run preview      # next build && wrangler dev  -> http://localhost:8787
```

| Script | Does |
|---|---|
| `npm run dev` | Next dev server, hot reload, no Worker |
| `npm run build` | Static export into `./out` |
| `npm run preview` | Build, then serve `./out` + the Worker locally via Wrangler |
| `npm run deploy` | Build, then `wrangler deploy` |
| `npm run typecheck` | Type-checks the site and the Worker separately |
| `npm run cf-typegen` | Regenerates Cloudflare binding types from `wrangler.jsonc` |

---

## Languages

The site ships in **Romanian (primary)** and **English**. Every page exists at both `/ro/…` and `/en/…`; there is no unprefixed page.

### How a first visit picks a language

`/` has no HTML file behind it, so the request falls through to the Worker, which redirects:

1. **`locale` cookie** — set by the RO/EN switcher in the header and footer, kept for a year. A returning visitor lands where they chose last time.
2. **Romanian**, for everyone else. The browser's `Accept-Language` is deliberately ignored, so a visitor whose Chrome is set to English still sees the Romanian site first and switches manually if they want English.

The same applies to any path without a locale prefix: `/contact/` redirects to `/ro/contact/`. The Worker confirms the localised page exists before redirecting, so a genuinely wrong URL still gets a 404 rather than bouncing to a second dead end. This matters for links printed on business cards, sent in email, or left over from an older site — none of them need the prefix.

To let the browser decide instead, set `RESPECT_BROWSER_LANGUAGE = true` at the top of [`worker/index.ts`](worker/index.ts). English then wins when a browser ranks it strictly above Romanian; ties and unrelated languages still go to Romanian.

The redirect is a 302 with `Vary: Accept-Language, Cookie` and `Cache-Control: no-store`, so no cache can serve one visitor's language to another.

`npm run dev` does not run the Worker, so `next.config.ts` mirrors these redirects for the dev server only. That is why `next build` prints **`Specified "redirects" will not automatically work with "output: export"`** — expected and harmless; the export intentionally emits no root page so the Worker can do the real detection.

### A trap worth knowing: `not_found_handling`

`assets.not_found_handling` in `wrangler.jsonc` **must stay `"none"`**. Set to `"404-page"`, Cloudflare's asset layer treats `out/404.html` as a match for any unmatched **HTML navigation** and serves it without ever invoking the Worker — which silently kills the language redirect for real browsers.

It is a nasty one to catch, because `curl` sends `Accept: */*`, does not trigger that path, and reports everything working. Always reproduce browser behaviour explicitly:

```bash
curl -sL -o /dev/null -w '%{http_code} %{url_effective}
'   -H 'accept: text/html,application/xhtml+xml'   https://euicapital.ro/
```

### SEO

Each page carries a canonical URL plus `hreflang` alternates for `ro`, `en` and `x-default` (which points at Romanian). The sitemap lists all 32 URLs with their alternates.

### Adding or changing copy

All text lives in `src/content/`. Nothing user-visible is hardcoded in a component:

| File | Holds |
|---|---|
| `pages.ts` | Every page's copy, both languages |
| `site.ts` | Nav labels, tagline, headline statistics, address |
| `programmes.ts` | Programme names and descriptions; slugs and themes are shared |
| `services.ts`, `results.ts` | Services and case studies |

`programmes.ts`, `services.ts` and `results.ts` split each entry into a shared structural part (slug, theme, management mode) and a per-locale text part, so the two languages cannot drift apart structurally.

### Adding a third language

Add the code to `locales` in `src/content/locales.ts`, then fill in the new key everywhere TypeScript reports a missing property. The Worker's `LOCALES` array needs the same addition. URL path segments stay in English (`/fr/services/`) — translating them would mean a slug-mapping layer, which is not built.

---

## Deploying to Cloudflare

**First deploy from your machine:**

```bash
npx wrangler login
npm run deploy
```

**Continuous deploys from GitHub** (recommended once the repo is connected):

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Import a repository** → pick `euicapital`.
2. Build command: `npm run build`
3. Deploy command: `npx wrangler deploy`
4. Leave the output directory empty — `wrangler.jsonc` already points at `./out`.

Every push to the default branch then rebuilds and ships. Pull requests get preview URLs.

### Domains

The site is configured for **`euicapital.ro`**, with `www.euicapital.ro` folded onto it. The apex is canonical: it is what `site.url` points at, what every canonical tag and `hreflang` alternate uses, and what the sitemap lists.

Both hostnames are declared in `wrangler.jsonc`:

```jsonc
"routes": [
  { "pattern": "euicapital.ro",     "custom_domain": true },
  { "pattern": "www.euicapital.ro", "custom_domain": true }
]
```

`wrangler deploy` attaches both and provisions the TLS certificates, so both resolve. This requires `euicapital.ro` to be an **active zone in the same Cloudflare account** — i.e. the domain's nameservers already point at Cloudflare. If they do not, add the site in the Cloudflare dashboard first and update the nameservers at your registrar; deploys will fail on the route attachment until the zone is active.

**Finish the www redirect with a Redirect Rule.** The Worker sends `www` to the apex with a 301, but Cloudflare serves matching static assets *before* the Worker runs — so `www.euicapital.ro/ro/services/` renders the page instead of redirecting. Requests with no asset behind them (`/`, `/api/*`, unknown paths) do hit the Worker and redirect correctly.

To make it complete, add one rule — free, runs at the edge, costs no Worker invocations:

> Cloudflare dashboard → your domain → **Rules → Redirect Rules → Create rule**
> - **When:** `Hostname` `equals` `www.euicapital.ro`
> - **Then:** Dynamic redirect, status **301**
> - **Expression:** `concat("https://euicapital.ro", http.request.uri.path)`
> - Tick **Preserve query string**

Until that rule exists the site still works on both hosts and search engines consolidate on the apex via the canonical tags — the rule just makes it strict.

**To use a different domain,** change three places: `site.url` and `site.email` in `src/content/site.ts`, and `routes` plus `vars.CANONICAL_HOST` in `wrangler.jsonc`. `CANONICAL_HOST` is the apex only, with no scheme and no `www.` — the Worker derives the www form from it.

**Note on local testing:** with `routes` configured, `wrangler dev` rewrites the request host to the first route, so you cannot exercise the www redirect locally by sending a `Host` header. Test it after deploy, or temporarily drop `routes` from a copy of the config.

---

## Contact form delivery

`POST /api/contact` validates the submission, then tries every configured delivery channel. **Until you configure at least one, it returns 503** and the form tells visitors to email instead. Pick one or more:

**Email via Resend** (simplest)

1. Create a free account at [resend.com](https://resend.com) — 3,000 emails/month, no card.
2. Add `euicapital.ro` under *Domains* and paste the DKIM/SPF records it gives you into Cloudflare DNS. Verification takes a few minutes.
3. Create an API key and store it:

```bash
npx wrangler secret put RESEND_API_KEY
```

Recipient and sender are plain vars in `wrangler.jsonc` — `CONTACT_TO` and `CONTACT_FROM` — so neither needs a code change.

**To test before the domain is verified**, sign up for Resend with the address in `CONTACT_TO` and set `CONTACT_FROM` to `onboarding@resend.dev`. That sender delivers only to the Resend account owner, which is enough to prove the pipeline works end to end.

**Webhook** — Slack, Zapier, n8n, a CRM, anything that accepts a JSON `POST`:

```bash
npx wrangler secret put CONTACT_WEBHOOK_URL
```

**KV storage** — an archive, not a delivery channel:

```bash
npx wrangler kv namespace create LEADS
```

Paste the returned id into the commented `kv_namespaces` block in `wrangler.jsonc`. Every enquiry is then kept at the edge for a year.

Note that KV deliberately does **not** count as delivery. With only KV configured the endpoint still answers 503 and the form tells the visitor to email directly — which loses fewer clients than answering "message received" while the enquiry sits in storage nobody reads. Add it alongside email, not instead of it.

The endpoint already handles a honeypot field, per-field length caps, email format validation, and method checks. If the form starts attracting volume, add [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) — it is free and integrates in a few lines.

---

## Before you launch — content checklist

Everything below is placeholder text written to demonstrate layout. Replace it.

- [ ] **`src/content/results.ts`** — the six case studies are **invented examples**, not real clients. Swap in your own engagements and delete the amber placeholder banner in [`src/app/[locale]/results/page.tsx`](src/app/[locale]/results/page.tsx).
- [ ] **`src/content/site.ts`** — company email, phone, offices, LinkedIn, founding year, and the four headline statistics on the homepage (**in both languages**). Do not publish success-rate or funding-secured figures you cannot evidence.
- [ ] **`src/content/pages.ts`** — the `about.team` array in each locale holds four generic profiles. Replace with real names, photographs and biographies.
- [ ] **`callSnapshot` in `src/content/programmes.ts`** — the only time-sensitive figure on the site. It records how many calls were open on a given date and prints that date next to the numbers. Refresh it from the [MIPE calendar](https://mfe.gov.ro/calendar-apeluri-de-finantare/) periodically; a snapshot dated months ago reads as neglect. Everything else in that file describes programme scope and eligibility, which changes rarely.
- [ ] **`legal` in `src/content/pages.ts`** — the privacy notice and terms are templates, not legal advice. Have a lawyer review them and add your registered company number, registered address and governing law.
- [ ] **`public/`** — add `favicon.ico`, an `apple-touch-icon.png` and an Open Graph image (1200×630).
- [ ] **`site.url`** in `src/content/site.ts` — must be your real domain; it drives canonical URLs, the sitemap and Open Graph tags.

### A note on positioning

The footer and terms both state plainly that the company is independent and not affiliated with any EU institution. Keep that. Consultancies that blur the line attract regulatory attention, and the disclaimer costs you nothing in credibility.

---

## Project structure

```
worker/index.ts            Worker — language routing on /, /api/contact, localised 404s
src/app/
  [locale]/                Every page lives under /ro/ or /en/
    layout.tsx             Root layout; sets <html lang> and hreflang alternates
    page.tsx               Homepage
    services/  programmes/  programmes/[slug]/
    process/  results/  about/  contact/
    legal/privacy/  legal/terms/
    404/                   Prerendered 404 body, served by the Worker
    not-found.tsx          Client-side 404 for in-app navigation
  sitemap.ts  robots.ts  globals.css
src/components/            Shared UI. `ui.tsx` holds the primitives.
src/content/
  locales.ts               Locale list, default, path helpers
  site.ts                  Company facts + per-locale nav, tagline, stats
  pages.ts                 All page copy, both languages
  services.ts  programmes.ts  results.ts
```

Design tokens — colours, fonts, the `eyebrow` and `hairline` utilities — live in [`src/app/globals.css`](src/app/globals.css) under Tailwind 4's `@theme` block.

## Adding a page

Create `src/app/[locale]/<route>/page.tsx`. It receives `params: Promise<{ locale: string }>` — narrow it with `assertLocale` — then pull copy from `getCopy(locale)`. Add the strings to **both** locales in `src/content/pages.ts`, the route to `navPaths` in `src/content/site.ts`, and the path to `src/app/sitemap.ts`.

Because `Copy` is derived from the Romanian object, adding a Romanian string without its English counterpart fails the build. That is deliberate.
