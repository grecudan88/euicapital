import type { Locale } from "./locales";

/** Locale-independent facts about the company. */
export const site = {
  name: "EUI Capital",
  legalName: "EUI Capital",
  email: "contact@euicapital.ro",
  phone: "+40 21 000 0000",
  url: "https://euicapital.ro",
  founded: 2019,
  linkedin: "https://www.linkedin.com/company/euicapital",
} as const;

type SiteCopy = {
  tagline: string;
  description: string;
  address: string;
  nav: { path: string; label: string }[];
  stats: { value: string; label: string }[];
};

/**
 * Path segments stay in English across both locales (/ro/services/, /en/services/).
 * That keeps the language switcher a one-line prefix swap; see the README if you
 * later want fully translated URLs.
 */
export const navPaths = [
  "services",
  "programmes",
  "process",
  "results",
  "about",
] as const;

export const siteCopy: Record<Locale, SiteCopy> = {
  ro: {
    tagline: "Finanțare europeană, construită corect.",
    description:
      "Consultanță independentă care ajută companiile, organizațiile de cercetare și instituțiile publice să identifice, să câștige și să implementeze finanțare europeană.",
    address: "București · Bruxelles",
    nav: [
      { path: "services", label: "Servicii" },
      { path: "programmes", label: "Programe" },
      { path: "process", label: "Cum lucrăm" },
      { path: "results", label: "Rezultate" },
      { path: "about", label: "Despre noi" },
    ],
    stats: [
      { value: "180 mil. €+", label: "Finanțare nerambursabilă obținută pentru clienți" },
      { value: "240+", label: "Aplicații pregătite din 2019" },
      { value: "38%", label: "Rată medie de succes pe programe" },
      { value: "11", label: "State membre în care lucrăm" },
    ],
  },
  en: {
    tagline: "EU funding, engineered.",
    description:
      "Independent consultancy helping companies, research organisations and public bodies find, win and deliver European Union funding.",
    address: "Bucharest · Brussels",
    nav: [
      { path: "services", label: "Services" },
      { path: "programmes", label: "Programmes" },
      { path: "process", label: "How we work" },
      { path: "results", label: "Results" },
      { path: "about", label: "About" },
    ],
    stats: [
      { value: "€180M+", label: "Grant funding secured for clients" },
      { value: "240+", label: "Applications prepared since 2019" },
      { value: "38%", label: "Average success rate across programmes" },
      { value: "11", label: "Member States we operate in" },
    ],
  },
};

/** Builds a locale-prefixed href: href("ro", "services") -> "/ro/services/" */
export function href(locale: Locale, path = ""): string {
  return path ? `/${locale}/${path}/` : `/${locale}/`;
}
