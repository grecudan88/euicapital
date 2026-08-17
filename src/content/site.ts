import type { Locale } from "./locales";

/**
 * Locale-independent facts about the company.
 *
 * Registration details verified against the ANAF public register (CUI 43390519).
 * `name` is the trading brand; `legalName` is what must appear on invoices and
 * in the legally required identification block in the footer.
 */
export const site = {
  name: "EUI Capital",
  legalName: "European iCapital Advisory SRL",
  cui: "43390519",
  regCom: "J2020002956224",
  caen: "7020",
  email: "contact@euicapital.ro",
  /** Display form of 0726157163. */
  phone: "+40 726 157 163",
  phoneHref: "+40726157163",
  contactPerson: "Dan Grecu",
  url: "https://euicapital.ro",
  founded: 2020,
  linkedin: "https://www.linkedin.com/company/euicapital",
} as const;

type SiteCopy = {
  tagline: string;
  description: string;
  /** Short form for headers and contact cards. */
  address: string;
  /** Registered office, exactly as recorded at the trade register. */
  registeredAddress: string;
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
    address: "Iași, România",
    registeredAddress: "Fdc. Emil Racoviță nr. 19, Mun. Iași, jud. Iași",
    nav: [
      { path: "services", label: "Servicii" },
      { path: "programmes", label: "Programe" },
      { path: "process", label: "Cum lucrăm" },
      { path: "results", label: "Rezultate" },
      { path: "about", label: "Despre noi" },
    ],
    stats: [
      { value: "80 mil. €+", label: "Finanțare nerambursabilă obținută pentru clienți" },
      { value: "95%", label: "Rată medie de obținere" },
    ],
  },
  en: {
    tagline: "EU funding, engineered.",
    description:
      "Independent consultancy helping companies, research organisations and public bodies find, win and deliver European Union funding.",
    address: "Iași, Romania",
    registeredAddress: "Fdc. Emil Racoviță 19, Iași, Iași County, Romania",
    nav: [
      { path: "services", label: "Services" },
      { path: "programmes", label: "Programmes" },
      { path: "process", label: "How we work" },
      { path: "results", label: "Results" },
      { path: "about", label: "About" },
    ],
    stats: [
      { value: "€80M+", label: "Grant funding secured for clients" },
      { value: "95%", label: "Average award rate" },
    ],
  },
};

/** Builds a locale-prefixed href: href("ro", "services") -> "/ro/services/" */
export function href(locale: Locale, path = ""): string {
  return path ? `/${locale}/${path}/` : `/${locale}/`;
}
