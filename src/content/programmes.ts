/**
 * Programmes that actually fund Romanian SMEs and local authorities under the
 * 2021–2027 cohesion framework.
 *
 * Deliberately evergreen: programme scope, eligible applicants and co-financing
 * change rarely, whereas individual calls open and close every few weeks. The
 * only time-sensitive figure on the site is `callSnapshot` below, which is
 * dated and shown as a snapshot — refresh it from the official MIPE calendar
 * rather than hardcoding deadlines into these descriptions.
 */

import type { Locale } from "./locales";

export const categoryKeys = [
  "regional",
  "innovation",
  "green",
  "social",
  "health",
] as const;

export const audienceKeys = ["imm", "uat"] as const;

export type CategoryKey = (typeof categoryKeys)[number];
export type Audience = (typeof audienceKeys)[number];

/**
 * Verified against the Ministry of Investments and European Projects calendar.
 * Update all four fields together; the page prints `verifiedOn` next to them so
 * a stale snapshot is visible rather than misleading.
 */
export const callSnapshot = {
  verifiedOn: "2026-08-17",
  openTotal: 155,
  openForImmUat: 85,
  source: "https://mfe.gov.ro/calendar-apeluri-de-finantare/",
} as const;

const base = [
  { slug: "programe-regionale", acronym: "PR", category: "regional", audience: ["imm", "uat"] },
  { slug: "pocidif", acronym: "PoCIDIF", category: "innovation", audience: ["imm"] },
  { slug: "podd", acronym: "PoDD", category: "green", audience: ["imm", "uat"] },
  { slug: "tranzitie-justa", acronym: "PTJ", category: "green", audience: ["imm", "uat"] },
  { slug: "pids", acronym: "PIDS", category: "social", audience: ["uat"] },
  { slug: "peo", acronym: "PEO", category: "social", audience: ["imm", "uat"] },
  { slug: "sanatate", acronym: "PS", category: "health", audience: ["uat"] },
] as const satisfies readonly {
  slug: string;
  acronym: string;
  category: CategoryKey;
  audience: readonly Audience[];
}[];

export type ProgrammeSlug = (typeof base)[number]["slug"];

type ProgrammeText = {
  name: string;
  authority: string;
  whoApplies: string;
  coFunding: string;
  summary: string;
  detail: string;
  bestFor: string[];
  watchOut: string;
};

export type Programme = ProgrammeText & {
  slug: ProgrammeSlug;
  acronym: string;
  category: CategoryKey;
  audience: readonly Audience[];
};

export const categoryLabels: Record<Locale, Record<CategoryKey, string>> = {
  ro: {
    regional: "Regional",
    innovation: "Inovare și digitalizare",
    green: "Energie și mediu",
    social: "Social și ocupare",
    health: "Sănătate",
  },
  en: {
    regional: "Regional",
    innovation: "Innovation and digital",
    green: "Energy and environment",
    social: "Social and employment",
    health: "Health",
  },
};

export const audienceLabels: Record<Locale, Record<Audience, string>> = {
  ro: { imm: "IMM-uri", uat: "UAT-uri" },
  en: { imm: "SMEs", uat: "Local authorities" },
};

const text: Record<Locale, Record<ProgrammeSlug, ProgrammeText>> = {
  ro: {
    "programe-regionale": {
      name: "Programele Regionale 2021–2027",
      authority: "Agențiile pentru Dezvoltare Regională (8 programe)",
      whoApplies: "IMM-uri, microîntreprinderi, UAT-uri, parteneriate",
      coFunding: "40–90%, în funcție de schema de ajutor și regiune",
      summary:
        "Cea mai mare sursă de finanțare pentru IMM-uri și administrații locale. Opt programe separate, câte unul pentru fiecare regiune de dezvoltare, fiecare cu propriile apeluri și propriul ghid.",
      detail:
        "Fiecare regiune — Nord-Est, Sud-Est, Sud Muntenia, Sud-Vest Oltenia, Vest, Nord-Vest, Centru și București-Ilfov — își administrează propriul program prin agenția regională de dezvoltare. Pentru firme se finanțează investiții productive, echipamente, digitalizare, eficiență energetică și parcuri de specializare inteligentă. Pentru primării și consilii județene: eficiență energetică în clădiri publice, infrastructură educațională, mobilitate urbană, regenerare urbană, infrastructură verde, patrimoniu și turism. Regulile diferă de la o regiune la alta, chiar și pentru aceeași măsură.",
      bestFor: [
        "IMM-uri care investesc în capacitate de producție sau echipamente",
        "Primării și consilii județene cu proiecte de investiții",
        "Microîntreprinderi din mediul urban și rural",
      ],
      watchOut:
        "Eligibilitatea depinde de regiunea în care aveți sediul sau punctul de lucru, nu de județul în care vreți să investiți. Verificați asta înainte de orice altceva.",
    },
    pocidif: {
      name: "Creștere Inteligentă, Digitalizare și Instrumente Financiare",
      authority: "Ministerul Investițiilor și Proiectelor Europene",
      whoApplies: "IMM-uri, organizații de cercetare, consorții firmă–universitate",
      coFunding: "50–100%, în funcție de tipul de activitate",
      summary:
        "Programul pentru cercetare, dezvoltare, inovare și digitalizare. Finanțează proiecte tehnologice, transfer tehnologic și adoptarea de tehnologii avansate în firme.",
      detail:
        "Acoperă proiecte tehnologice inovative, dezvoltarea de noi produse și servicii prin inovare, atragerea de personal cu competențe avansate din străinătate, consolidarea capacității actorilor din cercetare-dezvoltare-inovare și parteneriate între mediul academic și firme. Este programul potrivit atunci când proiectul are o componentă reală de cercetare sau de dezvoltare tehnologică, nu doar o investiție în echipamente.",
      bestFor: [
        "IMM-uri cu activitate de cercetare-dezvoltare proprie",
        "Firme care dezvoltă produse sau servicii digitale noi",
        "Parteneriate între companii și universități sau institute",
      ],
      watchOut:
        "Se cere demonstrat caracterul inovativ, nu doar utilitatea comercială. O achiziție de utilaje performante nu este inovare în sensul programului.",
    },
    podd: {
      name: "Dezvoltare Durabilă",
      authority: "Ministerul Investițiilor și Proiectelor Europene",
      whoApplies: "UAT-uri, operatori regionali, IMM-uri",
      coFunding: "Până la 98% pentru autorități publice",
      summary:
        "Apă și apă uzată, gestionarea deșeurilor, economie circulară, biodiversitate și reducerea riscurilor de dezastre.",
      detail:
        "Finanțează proiecte noi de infrastructură de apă și apă uzată, sisteme de management al deșeurilor municipale orientate spre economia circulară, măsuri de conservare a speciilor și habitatelor și investiții în adaptarea la schimbările climatice. Beneficiarii principali sunt unitățile administrativ-teritoriale și operatorii regionali de servicii publice.",
      bestFor: [
        "Primării și asociații de dezvoltare intercomunitară",
        "Operatori regionali de apă și salubritate",
        "Proiecte de economie circulară cu impact măsurabil",
      ],
      watchOut:
        "Proiectele de infrastructură cer studii de fezabilitate și avize de mediu mature. Fără ele, dosarul nu poate fi depus, oricât de bine ar fi scris.",
    },
    "tranzitie-justa": {
      name: "Tranziție Justă",
      authority: "Ministerul Investițiilor și Proiectelor Europene",
      whoApplies: "IMM-uri și UAT-uri din cele șase județe eligibile",
      coFunding: "Până la 100% pentru anumite categorii de beneficiari",
      summary:
        "Bani rezervați exclusiv pentru șase județe afectate de tranziția energetică: Gorj, Hunedoara, Dolj, Galați, Prahova și Mureș.",
      detail:
        "Finanțează capacități mici de producție din surse regenerabile, infrastructură de afaceri și parcuri industriale, mobilitate verde, formare profesională și reconversia forței de muncă. Include alocări dedicate microregiunii ITI Valea Jiului. Competiția este semnificativ mai mică decât la programele naționale, pentru că aria geografică este restrânsă.",
      bestFor: [
        "Firme cu punct de lucru în cele șase județe",
        "Primării care dezvoltă parcuri industriale sau mobilitate verde",
        "Furnizori acreditați de formare profesională",
      ],
      watchOut:
        "Totul depinde de localizare. Dacă investiția nu se realizează într-unul dintre cele șase județe, programul nu vi se aplică, indiferent de calitatea proiectului.",
    },
    pids: {
      name: "Incluziune și Demnitate Socială",
      authority: "Ministerul Investițiilor și Proiectelor Europene",
      whoApplies: "UAT-uri, furnizori de servicii sociale, GAL-uri",
      coFunding: "Până la 98% pentru autorități publice",
      summary:
        "Locuințe sociale, servicii pentru grupuri vulnerabile, dezvoltare locală plasată sub responsabilitatea comunității.",
      detail:
        "Finanțează asigurarea de locuințe sociale pentru persoane vulnerabile, formarea specialiștilor care lucrează cu grupuri vulnerabile, servicii sociale integrate și mecanismul DLRC prin grupurile de acțiune locală. Există alocări dedicate microregiunilor ITI — Valea Jiului, Delta Dunării, Țara Făgărașului și Moții, Țara de Piatră.",
      bestFor: [
        "Primării cu nevoi de locuire socială",
        "Furnizori acreditați de servicii sociale",
        "Grupuri de acțiune locală",
      ],
      watchOut:
        "Colectarea datelor la nivel de beneficiar este obligație legală. Sistemele slabe de indicatori sunt cauza cea mai frecventă a corecțiilor financiare.",
    },
    peo: {
      name: "Educație și Ocupare",
      authority: "Ministerul Investițiilor și Proiectelor Europene",
      whoApplies: "Angajatori, furnizori de formare, UAT-uri, ONG-uri",
      coFunding: "Până la 98%, în funcție de tipul de beneficiar",
      summary:
        "Ocupare, formare profesională, competențe și tranziția de la școală la piața muncii.",
      detail:
        "Finanțează programe de formare și recalificare, măsuri active de ocupare, sprijin pentru tineri, inclusiv inițiativa ALMA pentru mobilitate profesională, și adaptarea competențelor la nevoile angajatorilor. Se adresează atât angajatorilor care își califică personalul, cât și furnizorilor de formare și autorităților locale.",
      bestFor: [
        "Angajatori cu programe ample de calificare internă",
        "Furnizori acreditați de formare profesională",
        "ONG-uri și autorități locale cu proiecte de ocupare",
      ],
      watchOut:
        "Rezultatele se măsoară în participanți și în situația lor după program, nu în ore de curs livrate. Planificați evidența de la început.",
    },
    sanatate: {
      name: "Programul Sănătate",
      authority: "Ministerul Sănătății",
      whoApplies: "UAT-uri, unități sanitare publice, cabinete de medicină de familie",
      coFunding: "Până la 98% pentru autorități publice",
      summary:
        "Infrastructură sanitară, servicii de asistență medicală primară și dotarea cabinetelor.",
      detail:
        "Finanțează investiții în infrastructura cabinetelor de medicină de familie, inclusiv în microregiunile ITI, creșterea capacității serviciilor de sănătate a reproducerii și a cabinetelor de planificare familială, precum și modernizarea și dotarea unităților sanitare publice.",
      bestFor: [
        "Primării care dezvoltă infrastructură medicală locală",
        "Cabinete de medicină de familie, în special în mediul rural",
        "Spitale și unități sanitare publice",
      ],
      watchOut:
        "Multe apeluri cer dovada nevoii la nivel de comunitate și corelarea cu planurile regionale de servicii de sănătate.",
    },
  },
  en: {
    "programe-regionale": {
      name: "Regional Programmes 2021–2027",
      authority: "Regional Development Agencies (8 programmes)",
      whoApplies: "SMEs, micro-enterprises, local authorities, partnerships",
      coFunding: "40–90% depending on the aid scheme and region",
      summary:
        "The largest source of funding for Romanian SMEs and local government. Eight separate programmes, one per development region, each with its own calls and its own guidance.",
      detail:
        "Each region — North-East, South-East, South Muntenia, South-West Oltenia, West, North-West, Centre and Bucharest-Ilfov — runs its own programme through its regional development agency. For companies this funds productive investment, equipment, digitalisation, energy efficiency and smart specialisation parks. For municipalities and county councils: energy efficiency in public buildings, education infrastructure, urban mobility, urban regeneration, green infrastructure, heritage and tourism. The rules differ between regions, even for the same measure.",
      bestFor: [
        "SMEs investing in production capacity or equipment",
        "Municipalities and county councils with capital projects",
        "Micro-enterprises in both urban and rural areas",
      ],
      watchOut:
        "Eligibility follows the region where your registered or operating office sits, not the county you want to invest in. Check that before anything else.",
    },
    pocidif: {
      name: "Smart Growth, Digitalisation and Financial Instruments",
      authority: "Ministry of Investments and European Projects",
      whoApplies: "SMEs, research organisations, company–university consortia",
      coFunding: "50–100% depending on the type of activity",
      summary:
        "The programme for research, development, innovation and digitalisation. It funds technology projects, technology transfer and the adoption of advanced technology in companies.",
      detail:
        "Covers innovative technology projects, new products and services developed through innovation, recruiting advanced skills from abroad, capacity building across the research and innovation sector, and partnerships between academia and industry. This is the right instrument when the project has a genuine research or technological development component, not merely an equipment purchase.",
      bestFor: [
        "SMEs with in-house research and development activity",
        "Companies developing new digital products or services",
        "Partnerships between companies and universities or institutes",
      ],
      watchOut:
        "You must demonstrate innovation, not just commercial usefulness. Buying high-performance machinery is not innovation in this programme's sense.",
    },
    podd: {
      name: "Sustainable Development",
      authority: "Ministry of Investments and European Projects",
      whoApplies: "Local authorities, regional utility operators, SMEs",
      coFunding: "Up to 98% for public authorities",
      summary:
        "Water and wastewater, municipal waste management, circular economy, biodiversity and disaster risk reduction.",
      detail:
        "Funds new water and wastewater infrastructure, municipal waste systems geared towards the circular economy, conservation measures for species and habitats, and climate adaptation investment. The main beneficiaries are local authorities and regional public service operators.",
      bestFor: [
        "Municipalities and inter-community development associations",
        "Regional water and sanitation operators",
        "Circular economy projects with measurable impact",
      ],
      watchOut:
        "Infrastructure projects need mature feasibility studies and environmental permits. Without them the file cannot be submitted, however well written it is.",
    },
    "tranzitie-justa": {
      name: "Just Transition",
      authority: "Ministry of Investments and European Projects",
      whoApplies: "SMEs and local authorities in the six eligible counties",
      coFunding: "Up to 100% for certain categories of beneficiary",
      summary:
        "Money reserved exclusively for six counties affected by the energy transition: Gorj, Hunedoara, Dolj, Galați, Prahova and Mureș.",
      detail:
        "Funds small-scale renewable generation, business infrastructure and industrial parks, green mobility, vocational training and workforce reconversion. It includes dedicated allocations for the Jiu Valley ITI micro-region. Competition is significantly lower than on national programmes because the eligible area is narrow.",
      bestFor: [
        "Companies with operations in the six counties",
        "Municipalities developing industrial parks or green mobility",
        "Accredited vocational training providers",
      ],
      watchOut:
        "Everything depends on location. If the investment is not made in one of the six counties, the programme does not apply to you, whatever the quality of the project.",
    },
    pids: {
      name: "Inclusion and Social Dignity",
      authority: "Ministry of Investments and European Projects",
      whoApplies: "Local authorities, social service providers, local action groups",
      coFunding: "Up to 98% for public authorities",
      summary:
        "Social housing, services for vulnerable groups, and community-led local development.",
      detail:
        "Funds social housing for vulnerable people, training for specialists working with vulnerable groups, integrated social services, and the CLLD mechanism through local action groups. Dedicated allocations exist for the ITI micro-regions — Jiu Valley, Danube Delta, Făgăraș Land, and Moții, Țara de Piatră.",
      bestFor: [
        "Municipalities with social housing needs",
        "Accredited social service providers",
        "Local action groups",
      ],
      watchOut:
        "Beneficiary-level data collection is a legal obligation. Weak indicator systems are the most common cause of financial corrections.",
    },
    peo: {
      name: "Education and Employment",
      authority: "Ministry of Investments and European Projects",
      whoApplies: "Employers, training providers, local authorities, NGOs",
      coFunding: "Up to 98% depending on the type of beneficiary",
      summary:
        "Employment, vocational training, skills, and the transition from school to the labour market.",
      detail:
        "Funds training and reskilling programmes, active labour market measures, support for young people including the ALMA mobility initiative, and aligning skills with employers' needs. It addresses employers upskilling their own staff as much as training providers and local authorities.",
      bestFor: [
        "Employers running large internal qualification programmes",
        "Accredited vocational training providers",
        "NGOs and local authorities with employment projects",
      ],
      watchOut:
        "Results are measured in participants and their situation afterwards, not in hours of training delivered. Plan the record-keeping from day one.",
    },
    sanatate: {
      name: "Health Programme",
      authority: "Ministry of Health",
      whoApplies: "Local authorities, public health units, family medicine practices",
      coFunding: "Up to 98% for public authorities",
      summary:
        "Health infrastructure, primary care services and equipping medical practices.",
      detail:
        "Funds investment in family medicine practice infrastructure, including in the ITI micro-regions, increased capacity for reproductive health and family planning services, and the modernisation and equipping of public health units.",
      bestFor: [
        "Municipalities developing local medical infrastructure",
        "Family medicine practices, particularly rural ones",
        "Hospitals and public health units",
      ],
      watchOut:
        "Many calls require evidence of community-level need and alignment with regional health service plans.",
    },
  },
};

export function getProgrammes(locale: Locale): Programme[] {
  return base.map((b) => ({ ...b, ...text[locale][b.slug] }));
}

export function getProgramme(locale: Locale, slug: string): Programme | undefined {
  return getProgrammes(locale).find((p) => p.slug === slug);
}

export const programmeSlugs = base.map((b) => b.slug);
