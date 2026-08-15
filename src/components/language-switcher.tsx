"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, switchLocalePath, type Locale } from "@/content/locales";

/**
 * Remembers the visitor's choice for one year. The Worker reads this cookie on
 * `/` so a returning visitor lands in the language they picked last time,
 * rather than being sent back to Romanian by default.
 */
function remember(locale: Locale) {
  document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function LanguageSwitcher({
  locale,
  tone = "light",
}: {
  locale: Locale;
  tone?: "light" | "dark";
}) {
  const pathname = usePathname() ?? `/${locale}/`;

  const base =
    tone === "dark"
      ? "border-white/20 text-ink-200"
      : "border-ink-900/15 text-ink-600";
  const active =
    tone === "dark" ? "bg-white/15 text-paper" : "bg-ink-900 text-paper";

  return (
    <div
      className={`inline-flex items-center rounded-full border p-0.5 ${base}`}
      role="group"
      aria-label={locale === "ro" ? "Limbă" : "Language"}
    >
      {locales.map((target) => {
        const isCurrent = target === locale;
        return (
          <Link
            key={target}
            href={switchLocalePath(pathname, target)}
            hrefLang={target}
            lang={target}
            aria-current={isCurrent ? "true" : undefined}
            title={localeNames[target]}
            onClick={() => remember(target)}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition ${
              isCurrent ? active : "hover:opacity-70"
            }`}
          >
            {target}
          </Link>
        );
      })}
    </div>
  );
}
