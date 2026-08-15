# EUI Capital

Marketing and lead-generation site for an EU funding consultancy.

**Stack:** Next.js 16 (App Router, static export) · React 19 · Tailwind CSS 4 · TypeScript
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

**Custom domain:** Workers & Pages → your Worker → *Settings* → *Domains & Routes* → add `euicapital.com`. Cloudflare issues the certificate automatically if the domain's nameservers are already with Cloudflare.

---

## Contact form delivery

`POST /api/contact` validates the submission, then tries every configured delivery channel. **Until you configure at least one, it returns 503** and the form tells visitors to email instead. Pick one or more:

**Email via Resend** (simplest)

```bash
npx wrangler secret put RESEND_API_KEY
```

Then set the verified sender address in `worker/index.ts` (`from:`) and the recipient in `wrangler.jsonc` (`vars.CONTACT_TO`).

**Webhook** — Slack, Zapier, n8n, a CRM, anything that accepts a JSON `POST`:

```bash
npx wrangler secret put CONTACT_WEBHOOK_URL
```

**KV storage** — keep every lead at the edge for a year:

```bash
npx wrangler kv namespace create LEADS
```

Paste the returned id into the commented `kv_namespaces` block in `wrangler.jsonc`.

The endpoint already handles a honeypot field, per-field length caps, email format validation, and method checks. If the form starts attracting volume, add [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) — it is free and integrates in a few lines.

---

## Before you launch — content checklist

Everything below is placeholder text written to demonstrate layout. Replace it.

- [ ] **`src/content/results.ts`** — the six case studies are **invented examples**, not real clients. Swap in your own engagements and delete the amber placeholder banner in [`src/app/results/page.tsx`](src/app/results/page.tsx).
- [ ] **`src/content/site.ts`** — company email, phone, offices, LinkedIn, founding year, and the four headline statistics on the homepage. Do not publish success-rate or funding-secured figures you cannot evidence.
- [ ] **`src/app/about/page.tsx`** — the `team` array holds four generic profiles. Replace with real names, photographs and biographies.
- [ ] **`src/content/programmes.ts`** — budget figures are rounded 2021–2027 headline allocations. Verify each against the current work programme on the [Funding & Tenders Portal](https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home) before publishing.
- [ ] **`src/app/legal/`** — the privacy notice and terms are templates, not legal advice. Have a lawyer review them and add your registered company number, registered address and governing law.
- [ ] **`public/`** — add `favicon.ico`, an `apple-touch-icon.png` and an Open Graph image (1200×630).
- [ ] **`site.url`** in `src/content/site.ts` — must be your real domain; it drives canonical URLs, the sitemap and Open Graph tags.

### A note on positioning

The footer and terms both state plainly that the company is independent and not affiliated with any EU institution. Keep that. Consultancies that blur the line attract regulatory attention, and the disclaimer costs you nothing in credibility.

---

## Project structure

```
worker/index.ts            Cloudflare Worker — /api/contact, /api/health, asset fallthrough
src/app/                   Routes (App Router). Each folder is a page.
  page.tsx                 Homepage
  services/                Service detail
  programmes/              Index with client-side filtering
  programmes/[slug]/       One prerendered page per programme
  process/  results/  about/  contact/
  legal/privacy/  legal/terms/
  sitemap.ts  robots.ts  not-found.tsx
src/components/            Shared UI. `ui.tsx` holds the primitives.
src/content/               All copy and data. Edit here, not in components.
```

Design tokens — colours, fonts, the `eyebrow` and `hairline` utilities — live in [`src/app/globals.css`](src/app/globals.css) under Tailwind 4's `@theme` block.

## Adding a page

Create `src/app/<route>/page.tsx`, export a `metadata` object and a default component, then add the route to `nav` in `src/content/site.ts` and to `src/app/sitemap.ts`. Use `PageHero` from `@/components/ui` for a consistent header.
