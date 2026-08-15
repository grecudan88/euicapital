"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/content/locales";
import { getCopy } from "@/content/pages";
import { href, site, siteCopy } from "@/content/site";
import { LanguageSwitcher } from "./language-switcher";
import { Container } from "./ui";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const copy = getCopy(locale);
  const nav = siteCopy[locale].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (path: string) => pathname?.startsWith(href(locale, path)) ?? false;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled || open
          ? "border-b border-ink-900/10 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-18 items-center justify-between py-4">
          <Link
            href={href(locale)}
            className="group flex items-center gap-3"
            aria-label={`${site.name} — ${copy.ui.home}`}
          >
            <Mark />
            <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label={copy.ui.company}>
            {nav.map((item) => (
              <Link
                key={item.path}
                href={href(locale, item.path)}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive(item.path)
                    ? "text-ink-950"
                    : "text-ink-600 hover:bg-ink-900/5 hover:text-ink-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} />
            <Link
              href={href(locale, "contact")}
              className="hidden rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink-800 sm:inline-flex"
            >
              {copy.ui.bookCall}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-900 ring-1 ring-inset ring-ink-900/15 lg:hidden"
            >
              <span className="sr-only">{open ? copy.ui.closeMenu : copy.ui.openMenu}</span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                className="h-5 w-5"
              >
                {open ? (
                  <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
                ) : (
                  <path d="M3 6h14M3 13h14" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-ink-900/10 bg-paper lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col" aria-label={copy.ui.company}>
              {nav.map((item) => (
                <Link
                  key={item.path}
                  href={href(locale, item.path)}
                  className="border-b border-ink-900/5 py-3 text-base font-medium text-ink-800"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={href(locale, "contact")}
                className="mt-4 rounded-full bg-ink-900 px-5 py-3 text-center text-sm font-semibold text-paper"
              >
                {copy.ui.bookCall}
              </Link>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function Mark() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-ink-950">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="7.5" fill="none" stroke="#cfae6a" strokeWidth="1.4" />
        <path d="M8 9.5h7M8 12h5M8 14.5h7" stroke="#fbfaf7" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </span>
  );
}
