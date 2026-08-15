export const site = {
  name: "EUI Capital",
  legalName: "EUI Capital",
  tagline: "EU funding, engineered.",
  description:
    "Independent consultancy helping companies, research organisations and public bodies find, win and deliver European Union funding.",
  email: "contact@euicapital.com",
  phone: "+32 2 000 00 00",
  address: "Brussels · Bucharest",
  url: "https://euicapital.com",
  founded: 2019,
  linkedin: "https://www.linkedin.com/company/euicapital",
} as const;

export const nav = [
  { href: "/services/", label: "Services" },
  { href: "/programmes/", label: "Programmes" },
  { href: "/process/", label: "How we work" },
  { href: "/results/", label: "Results" },
  { href: "/about/", label: "About" },
] as const;

export const stats = [
  { value: "€180M+", label: "Grant funding secured for clients" },
  { value: "240+", label: "Applications prepared since 2019" },
  { value: "38%", label: "Average success rate across programmes" },
  { value: "11", label: "Member States we operate in" },
] as const;
