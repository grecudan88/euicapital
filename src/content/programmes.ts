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
  "mobility",
] as const;

export const audienceKeys = ["imm", "uat"] as const;

export type CategoryKey = (typeof categoryKeys)[number];
export type Audience = (typeof audienceKeys)[number];

/**
 * Only set where a programme has no open call and none announced yet. Absence
 * of a status makes no claim either way, which keeps the page honest as calls
 * open and close without anyone editing this file.
 */
export type Status = "upcoming";

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
  {
    slug: "e-drive",
    acronym: "e-DRIVE",
    category: "mobility",
    audience: ["imm"],
    status: "upcoming",
  },
  {
    slug: "e-mobility-ro",
    acronym: "e-Mobility RO",
    category: "mobility",
    audience: ["imm"],
    status: "upcoming",
  },
  {
    slug: "e-move-ro",
    acronym: "e-MOVE RO",
    category: "mobility",
    audience: ["imm"],
    status: "upcoming",
  },
] as const satisfies readonly {
  slug: string;
  acronym: string;
  category: CategoryKey;
  audience: readonly Audience[];
  status?: Status;
}[];

export type ProgrammeSlug = (typeof base)[number]["slug"];

type ProgrammeText = {
  name: string;
  authority: string;
  /** Published allocation, where an official figure exists. Rendered only if set. */
  budget?: string;
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
  status?: Status;
};

export const categoryLabels: Record<Locale, Record<CategoryKey, string>> = {
  ro: {
    regional: "Regional",
    innovation: "Inovare și digitalizare",
    green: "Energie și mediu",
    social: "Social și ocupare",
    health: "Sănătate",
    mobility: "Mobilitate electrică",
  },
  en: {
    regional: "Regional",
    innovation: "Innovation and digital",
    green: "Energy and environment",
    social: "Social and employment",
    health: "Health",
    mobility: "Electric mobility",
  },
};

export const statusLabels: Record<Locale, Record<Status, string>> = {
  ro: { upcoming: "Apeluri neanunțate încă" },
  en: { upcoming: "Calls not yet announced" },
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
    "e-drive": {
      name: "e-DRIVE",
      authority: "Ministerul Transporturilor și Infrastructurii",
      budget: "56,9 mil. €",
      whoApplies: "Întreprinderi, inclusiv operatori de transport public de persoane",
      coFunding: "Ajutor de stat și de minimis, două măsuri distincte",
      summary:
        "Înlocuirea vehiculelor poluante din flotele companiilor și din transportul public de persoane cu vehicule cu zero emisii.",
      detail:
        "Schemă finanțată din Fondul pentru Modernizare, administrată de Ministerul Transporturilor și Infrastructurii. Acoperă înlocuirea vehiculelor poluante din parcul auto propriu al companiilor și din transportul public de călători cu vehicule cu zero emisii, prin două măsuri de finanțare distincte — una de ajutor de stat, cealaltă de minimis. Schema a fost revizuită prin OMTI nr. 742/2026, publicat în Monitorul Oficial nr. 655 din 7 august 2026.",
      bestFor: [
        "Firme cu flotă proprie care trec la vehicule electrice",
        "Operatori de transport public de persoane",
        "Companii de logistică și distribuție",
      ],
      watchOut:
        "Cele două măsuri au reguli diferite. Alegerea între ajutor de stat și de minimis vă schimbă atât plafonul, cât și ce alte finanțări mai puteți primi în următorii trei ani.",
    },
    "e-mobility-ro": {
      name: "e-Mobility RO",
      authority: "Ministerul Transporturilor și Infrastructurii",
      budget: "299 mil. €",
      whoApplies: "Microîntreprinderi, IMM-uri și întreprinderi mari înregistrate în România",
      coFunding: "Schemă de ajutor de stat, intensitate stabilită prin ghid",
      summary:
        "Stații de reîncărcare pentru vehicule electrice pe rețeaua națională de autostrăzi, drumuri expres și drumuri naționale.",
      detail:
        "Schemă finanțată din Fondul pentru Modernizare, care vizează o rețea națională de reîncărcare amplasată strategic pe autostrăzi, drumuri expres și drumuri naționale. Sunt eligibile și proiectele integrate, care adaugă producție de energie din surse regenerabile la fața locului și sisteme de stocare. Schema a fost revizuită prin OMTI nr. 746/2026, publicat în Monitorul Oficial nr. 656 din 7 august 2026.",
      bestFor: [
        "Operatori de stații de reîncărcare și investitori în infrastructură",
        "Companii petroliere și lanțuri de benzinării",
        "Firme cu terenuri amplasate pe coridoarele rutiere principale",
      ],
      watchOut:
        "Amplasamentul decide totul: rețeaua vizată este cea de autostrăzi, drumuri expres și naționale. O locație bună comercial, dar în afara acestei rețele, nu este eligibilă aici.",
    },
    "e-move-ro": {
      name: "e-MOVE RO",
      authority: "Ministerul Transporturilor și Infrastructurii",
      budget: "262 mil. €",
      whoApplies: "Microîntreprinderi, IMM-uri și întreprinderi mari înregistrate în România",
      coFunding: "Schemă de ajutor de stat, pe submăsuri",
      summary:
        "Infrastructură publică de reîncărcare pentru mobilitate cu zero emisii, în sprijinul întreprinderilor și comunităților.",
      detail:
        "Schemă finanțată din Fondul pentru Modernizare, pentru construirea, instalarea, modernizarea sau extinderea infrastructurii publice de reîncărcare. Include producția de energie regenerabilă la fața locului, sisteme de stocare și lucrările de racordare între stații și unitățile de producție. Este structurată pe submăsuri: prima pentru stații accesibile atât flotei proprii, cât și publicului, a doua pentru proiecte care integrează producție și stocare. Schema a fost revizuită prin OMTI nr. 755/2026, publicat în Monitorul Oficial nr. 660 din 10 august 2026, care adaugă o a treia submăsură.",
      bestFor: [
        "Firme care instalează stații accesibile publicului la sediu sau la punctele de lucru",
        "Retail, HoReCa și centre logistice cu parcări proprii",
        "Investitori în proiecte care combină reîncărcarea cu fotovoltaice și stocare",
      ],
      watchOut:
        "Submăsura aleasă schimbă atât bugetul disponibil, cât și cerințele tehnice. Structurarea proiectului pe submăsura potrivită se face înainte de a comanda proiectarea.",
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
    "e-drive": {
      name: "e-DRIVE",
      authority: "Ministry of Transport and Infrastructure",
      budget: "EUR 56.9M",
      whoApplies: "Enterprises, including public passenger transport operators",
      coFunding: "State aid and de minimis, two distinct measures",
      summary:
        "Replacing polluting vehicles in company fleets and public passenger transport with zero-emission vehicles.",
      detail:
        "A Modernisation Fund scheme run by the Ministry of Transport and Infrastructure. It covers replacing polluting vehicles in company fleets and in public passenger transport with zero-emission vehicles, through two separate financing measures — one state aid, one de minimis. The scheme was revised by Ministerial Order 742/2026, published in the Official Gazette no. 655 of 7 August 2026.",
      bestFor: [
        "Companies with their own fleet moving to electric vehicles",
        "Public passenger transport operators",
        "Logistics and distribution companies",
      ],
      watchOut:
        "The two measures follow different rules. Choosing between state aid and de minimis changes both your ceiling and what other funding you can receive over the following three years.",
    },
    "e-mobility-ro": {
      name: "e-Mobility RO",
      authority: "Ministry of Transport and Infrastructure",
      budget: "EUR 299M",
      whoApplies: "Micro-enterprises, SMEs and large enterprises registered in Romania",
      coFunding: "State aid scheme, intensity set in the applicant guide",
      summary:
        "Electric vehicle charging stations across the national network of motorways, express roads and national roads.",
      detail:
        "A Modernisation Fund scheme targeting a national charging network placed strategically on motorways, express roads and national roads. Integrated projects are also eligible, adding on-site renewable generation and storage systems. The scheme was revised by Ministerial Order 746/2026, published in the Official Gazette no. 656 of 7 August 2026.",
      bestFor: [
        "Charging point operators and infrastructure investors",
        "Fuel companies and filling station networks",
        "Companies holding land on the main road corridors",
      ],
      watchOut:
        "Location decides everything: the target is the motorway, express road and national road network. A commercially attractive site outside that network is not eligible here.",
    },
    "e-move-ro": {
      name: "e-MOVE RO",
      authority: "Ministry of Transport and Infrastructure",
      budget: "EUR 262M",
      whoApplies: "Micro-enterprises, SMEs and large enterprises registered in Romania",
      coFunding: "State aid scheme, by sub-measure",
      summary:
        "Public charging infrastructure for zero-emission mobility, in support of businesses and communities.",
      detail:
        "A Modernisation Fund scheme for building, installing, modernising or extending publicly accessible charging infrastructure. It includes on-site renewable generation, storage systems and the connection works between the charging points and the generation units. It is structured in sub-measures: the first for stations accessible to both a company fleet and the public, the second for projects integrating generation and storage. The scheme was revised by Ministerial Order 755/2026, published in the Official Gazette no. 660 of 10 August 2026, which adds a third sub-measure.",
      bestFor: [
        "Companies installing publicly accessible charging at their own sites",
        "Retail, hospitality and logistics centres with their own car parks",
        "Investors combining charging with solar generation and storage",
      ],
      watchOut:
        "The sub-measure you choose changes both the budget available and the technical requirements. Structure the project against the right one before commissioning any design work.",
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
