/**
 * Real engagements only.
 *
 * `client`, `sector`, `year`, `challenge`, `approach` and `result` are optional
 * on purpose. A figure we can stand behind is worth publishing on its own; an
 * invented narrative around it is not. Every consumer of this data renders only
 * the fields that are filled in, so an entry can start as programme + amount
 * and grow later.
 */

import type { Locale } from "./locales";

const slugs = ["repower-eu"] as const;

export type CaseSlug = (typeof slugs)[number];

/** Locale-independent facts: the money and the year it was recorded. */
const facts: Record<CaseSlug, { amount: Record<Locale, string>; year: string }> = {
  "repower-eu": {
    amount: { ro: "27.430.000 €", en: "€27,430,000" },
    year: "",
  },
};

type CaseText = {
  client: string;
  sector: string;
  programme: string;
  challenge: string;
  approach: string[];
  result: string;
};

export type CaseStudy = CaseText & { slug: CaseSlug; amount: string; year: string };

const text: Record<Locale, Record<CaseSlug, CaseText>> = {
  ro: {
    "repower-eu": {
      client: "",
      sector: "",
      programme: "REPowerEU",
      challenge: "",
      approach: [],
      result: "",
    },
  },
  en: {
    "repower-eu": {
      client: "",
      sector: "",
      programme: "REPowerEU",
      challenge: "",
      approach: [],
      result: "",
    },
  },
};

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return slugs.map((slug) => ({
    slug,
    amount: facts[slug].amount[locale],
    year: facts[slug].year,
    ...text[locale][slug],
  }));
}
