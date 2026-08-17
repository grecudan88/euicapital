import Link from "next/link";
import type { Locale } from "@/content/locales";
import { getCopy } from "@/content/pages";
import { href, site, siteCopy } from "@/content/site";
import { getProgrammes } from "@/content/programmes";
import { LanguageSwitcher } from "./language-switcher";
import { Container } from "./ui";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const { nav, description, address, registeredAddress } = siteCopy[locale];
  const programmes = getProgrammes(locale);

  return (
    <footer className="bg-ink-950 text-ink-200">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl text-paper">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-400">{description}</p>
            <div className="mt-6 space-y-1 text-sm">
              <p>
                <a href={`mailto:${site.email}`} className="text-paper hover:text-gold-400">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={`tel:${site.phoneHref}`} className="text-paper hover:text-gold-400">
                  {site.phone}
                </a>
              </p>
              <p className="text-ink-400">{address}</p>
            </div>
            <div className="mt-6">
              <LanguageSwitcher locale={locale} tone="dark" />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
              {copy.ui.company}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.path}>
                  <Link href={href(locale, item.path)} className="text-ink-200 hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={href(locale, "contact")} className="text-ink-200 hover:text-paper">
                  {copy.ui.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
              {copy.ui.programmes}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {programmes.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={href(locale, `programmes/${p.slug}`)}
                    className="text-ink-200 hover:text-paper"
                  >
                    {p.acronym}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-ink-200">
            {site.legalName} · {copy.ui.regCom} {site.regCom} · {copy.ui.regCui} {site.cui} ·{" "}
            {copy.ui.regOffice}: {registeredAddress}
          </p>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-ink-400">
            {copy.ui.disclaimer}
          </p>
          <div className="mt-6 flex flex-col justify-between gap-4 text-xs text-ink-400 sm:flex-row">
            <p>
              &copy; {site.founded}&ndash;{new Date().getFullYear()} {site.legalName}.{" "}
              {copy.ui.rightsReserved}
            </p>
            <div className="flex gap-6">
              <Link href={href(locale, "legal/privacy")} className="hover:text-paper">
                {copy.ui.privacy}
              </Link>
              <Link href={href(locale, "legal/terms")} className="hover:text-paper">
                {copy.ui.terms}
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
