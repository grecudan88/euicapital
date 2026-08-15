export const locales = ["ro", "en"] as const;

export type Locale = (typeof locales)[number];

/** Romanian is the primary language: `/` lands here unless the visitor says otherwise. */
export const defaultLocale: Locale = "ro";

export const localeNames: Record<Locale, string> = {
  ro: "Română",
  en: "English",
};

/** Used for <html lang> and Open Graph. */
export const localeTags: Record<Locale, string> = {
  ro: "ro-RO",
  en: "en-GB",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Swaps the locale prefix on a path: ("/ro/programmes/life/", "en") -> "/en/programmes/life/" */
export function switchLocalePath(pathname: string, target: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = target;
  } else {
    segments.unshift(target);
  }
  return `/${segments.join("/")}/`.replace(/\/+$/, "/");
}

/**
 * Next types route params as plain strings. Every locale segment reaching a
 * page comes from `generateStaticParams`, so this only ever narrows a value
 * that is already valid — the fallback exists to satisfy the type system.
 */
export function assertLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}
