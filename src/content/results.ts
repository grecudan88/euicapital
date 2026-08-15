/**
 * PLACEHOLDER CONTENT — replace before the site goes live.
 *
 * These engagements are illustrative examples written to show the page layout.
 * They are not real clients. Swap in your own anonymised case studies (and
 * delete the placeholder banner in src/app/[locale]/results/page.tsx) before launch.
 */

import type { Locale } from "./locales";

const slugs = [
  "battery-materials-scale-up",
  "regional-food-processing",
  "municipal-climate-adaptation",
  "hydrogen-electrolyser",
  "vocational-reskilling",
  "cross-border-digital-services",
] as const;

export type CaseSlug = (typeof slugs)[number];

const meta: Record<CaseSlug, { amount: string; year: string }> = {
  "battery-materials-scale-up": { amount: "4,2 mil. €", year: "2024" },
  "regional-food-processing": { amount: "2,8 mil. €", year: "2025" },
  "municipal-climate-adaptation": { amount: "3,1 mil. €", year: "2024" },
  "hydrogen-electrolyser": { amount: "21 mil. €", year: "2025" },
  "vocational-reskilling": { amount: "1,6 mil. €", year: "2023" },
  "cross-border-digital-services": { amount: "1,9 mil. €", year: "2025" },
};

const amountsEn: Record<CaseSlug, string> = {
  "battery-materials-scale-up": "€4.2M",
  "regional-food-processing": "€2.8M",
  "municipal-climate-adaptation": "€3.1M",
  "hydrogen-electrolyser": "€21M",
  "vocational-reskilling": "€1.6M",
  "cross-border-digital-services": "€1.9M",
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
    "battery-materials-scale-up": {
      client: "Producător de materiale pentru baterii",
      sector: "Producție avansată",
      programme: "Orizont Europa — Clusterul 4",
      challenge:
        "O companie care produce materiale catodice avea rezultate pe linia-pilot, dar niciun consorțiu și opt săptămâni până la termenul-limită.",
      approach: [
        "Am construit un consorțiu din cinci țări, cu două institute de cercetare și un client industrial",
        "Am rescris secțiunea de impact pornind de la un argument cuantificat privind dependența lanțului de aprovizionare european",
        "Am structurat bugetul astfel încât partenerii industriali să rămână la o rată de 70% ușor de susținut",
      ],
      result:
        "Finanțat din prima depunere, cu 14,0 din 15 puncte, secțiunea de impact fiind cea mai bine notată.",
    },
    "regional-food-processing": {
      client: "Grup regional de procesare alimentară",
      sector: "Agroalimentar",
      programme: "FEDR — program operațional regional",
      challenge:
        "O investiție în lanțul frigorific era blocată de un plafon de ajutor de stat pe care clientul nu îl luase în calcul.",
      approach: [
        "Am restructurat investiția în două etape, pe scheme de ajutor diferite",
        "Am testat eligibilitatea fiecărei linii de cost înainte de redactarea dosarului tehnic",
        "Am pregătit documentația de achiziție înainte de contractare, pentru a evita întârzierea startului",
      ],
      result: "Suma solicitată a fost aprobată integral, cu prima tranșă încasată în patru luni.",
    },
    "municipal-climate-adaptation": {
      client: "Municipalitate de coastă",
      sector: "Sector public",
      programme: "LIFE — adaptare climatică",
      challenge:
        "O aplicație anterioară, făcută intern, primise punctaj sub prag la capitolele replicabilitate și durabilitate.",
      approach: [
        "Am analizat raportul de evaluare rând cu rând, ca să localizăm punctele pierdute",
        "Am adăugat trei municipalități de replicare și un angajament de întreținere după finalizare",
        "Am rescris planul de monitorizare în jurul unor indicatori de mediu măsurabili",
      ],
      result: "Redepunerea a trecut, cu un punctaj mai mare cu 3,5 puncte față de prima încercare.",
    },
    "hydrogen-electrolyser": {
      client: "Producător industrial de hidrogen",
      sector: "Energie",
      programme: "Fondul pentru Inovare",
      challenge:
        "Tehnologie solidă, dar calculul costurilor relevante și calendarul autorizațiilor nu convingeau.",
      approach: [
        "Am reconstruit modelul de costuri relevante față de o instalație convențională de referință credibilă",
        "Am documentat stadiul autorizațiilor și jaloanele financiare cu dovezi de la terți",
        "Am cuantificat emisiile de gaze cu efect de seră evitate în primii zece ani de funcționare",
      ],
      result: "Selectat pentru pregătirea contractului, în primul sfert al clasamentului apelului.",
    },
    "vocational-reskilling": {
      client: "Furnizor național de formare",
      sector: "Educație",
      programme: "FSE+ — program operațional național",
      challenge:
        "Un program ambițios de recalificare, fără niciun sistem de colectare a indicatorilor la nivel de participant.",
      approach: [
        "Am proiectat cadrul de indicatori și fluxul de colectare a datelor înainte de depunere",
        "Am aliniat grupurile-țintă la definițiile prioritare ale programului operațional",
        "Am instruit echipa de implementare pe cerințele de probatoriu, înaintea primului raport",
      ],
      result: "Aprobat și implementat fără constatări la verificarea intermediară.",
    },
    "cross-border-digital-services": {
      client: "Două autorități regionale",
      sector: "Sector public",
      programme: "Interreg — transfrontalier",
      challenge:
        "Două autorități aflate de o parte și de alta a graniței voiau să coopereze, dar se aflau în arii de program diferite.",
      approach: [
        "Am confirmat eligibilitatea ariei de program înainte de a începe redactarea",
        "Am construit un parteneriat de opt organizații, cu cote de buget echilibrate",
        "Am negociat din start structura comună de guvernanță și de raportare",
      ],
      result: "Aprobat în primul apel al perioadei de programare.",
    },
  },
  en: {
    "battery-materials-scale-up": {
      client: "Battery materials scale-up",
      sector: "Advanced manufacturing",
      programme: "Horizon Europe — Cluster 4",
      challenge:
        "A cathode-materials company had pilot-line results but no consortium and eight weeks until the deadline.",
      approach: [
        "Assembled a five-country consortium including two research institutes and an OEM offtaker",
        "Rebuilt the impact narrative around a quantified EU supply-chain dependency argument",
        "Structured the budget to keep the industrial partners at a defensible 70% rate",
      ],
      result: "Funded on first submission, scoring 14.0/15 with the impact section rated highest.",
    },
    "regional-food-processing": {
      client: "Regional food processing group",
      sector: "Agri-food",
      programme: "ERDF — regional operational programme",
      challenge:
        "A cold-chain investment was blocked by a state-aid ceiling the client had not accounted for.",
      approach: [
        "Restructured the investment into two phases across separate aid schemes",
        "Ran the eligibility test on every cost line before the technical file was drafted",
        "Prepared the procurement documentation ahead of award to avoid a delayed start",
      ],
      result: "Full requested amount approved, with first instalment disbursed within four months.",
    },
    "municipal-climate-adaptation": {
      client: "Coastal municipality",
      sector: "Public sector",
      programme: "LIFE — climate adaptation",
      challenge:
        "A previous in-house application had scored below threshold on replicability and durability.",
      approach: [
        "Analysed the Evaluation Summary Report line by line to locate the lost points",
        "Added three replication municipalities and a post-project maintenance commitment",
        "Rewrote the monitoring plan around measurable environmental indicators",
      ],
      result: "Resubmission passed with a score increase of 3.5 points over the first attempt.",
    },
    "hydrogen-electrolyser": {
      client: "Industrial hydrogen producer",
      sector: "Energy",
      programme: "Innovation Fund",
      challenge:
        "Strong technology, but the relevant-cost calculation and permitting timeline were unconvincing.",
      approach: [
        "Rebuilt the relevant-cost model against a defensible conventional reference plant",
        "Documented permitting status and financial-close milestones with third-party evidence",
        "Quantified absolute greenhouse-gas avoidance over the first ten operating years",
      ],
      result: "Selected for grant preparation, ranked in the top quartile of its call.",
    },
    "vocational-reskilling": {
      client: "National training provider",
      sector: "Education",
      programme: "ESF+ — national operational programme",
      challenge:
        "An ambitious reskilling programme with no system for collecting participant-level indicators.",
      approach: [
        "Designed the indicator framework and data-collection workflow before submission",
        "Aligned target groups with the operational programme's priority definitions",
        "Trained the delivery team on evidence requirements ahead of the first report",
      ],
      result: "Approved and delivered with no findings at the mid-term verification.",
    },
    "cross-border-digital-services": {
      client: "Two regional authorities",
      sector: "Public sector",
      programme: "Interreg — cross-border",
      challenge:
        "Two authorities on opposite sides of a border wanted to cooperate but sat in different programme areas.",
      approach: [
        "Confirmed programme-area eligibility before any drafting began",
        "Built a partnership of eight organisations with balanced budget shares",
        "Negotiated the joint governance and reporting structure up front",
      ],
      result: "Approved in the first call of the programming period.",
    },
  },
};

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return slugs.map((slug) => ({
    slug,
    amount: locale === "en" ? amountsEn[slug] : meta[slug].amount,
    year: meta[slug].year,
    ...text[locale][slug],
  }));
}
