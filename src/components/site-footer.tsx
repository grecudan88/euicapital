import Link from "next/link";
import { nav, site } from "@/content/site";
import { programmes } from "@/content/programmes";
import { Container } from "./ui";

export function SiteFooter() {
  return (
    <footer className="bg-ink-950 text-ink-200">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl text-paper">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-400">
              {site.description}
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <p>
                <a href={`mailto:${site.email}`} className="text-paper hover:text-gold-400">
                  {site.email}
                </a>
              </p>
              <p className="text-ink-400">{site.phone}</p>
              <p className="text-ink-400">{site.address}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-200 hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact/" className="text-ink-200 hover:text-paper">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
              Programmes
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {programmes.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link href={`/programmes/${p.slug}/`} className="text-ink-200 hover:text-paper">
                    {p.acronym}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-ink-400">
            {site.legalName} is an independent private consultancy. It is not affiliated with,
            endorsed by, or acting on behalf of the European Union, the European Commission or any
            other EU institution, body or agency. Funding figures shown are indicative and subject
            to the terms of the applicable work programme and call documentation.
          </p>
          <div className="mt-6 flex flex-col justify-between gap-4 text-xs text-ink-400 sm:flex-row">
            <p>
              &copy; {site.founded}&ndash;{new Date().getFullYear()} {site.legalName}. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/legal/privacy/" className="hover:text-paper">
                Privacy
              </Link>
              <Link href="/legal/terms/" className="hover:text-paper">
                Terms
              </Link>
              <a href={site.linkedin} className="hover:text-paper" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
