/**
 * EU funding instruments, 2021-2027 MFF.
 *
 * Budget figures are indicative headline allocations for the full 2021-2027
 * period and are rounded. Verify against the current work programme on the
 * Funding & Tenders Portal before quoting them to a client.
 */

import type { Locale } from "./locales";

export const categoryKeys = [
  "innovation",
  "digital",
  "green",
  "regional",
  "social",
  "infrastructure",
] as const;

export type CategoryKey = (typeof categoryKeys)[number];
export type Management = "direct" | "shared";

/** Structure shared by both locales: slug, acronym, theme and who administers the money. */
const base = [
  { slug: "horizon-europe", acronym: "HORIZON", category: "innovation", management: "direct" },
  { slug: "digital-europe", acronym: "DIGITAL", category: "digital", management: "direct" },
  { slug: "erdf", acronym: "ERDF / FEDR", category: "regional", management: "shared" },
  { slug: "esf-plus", acronym: "ESF+ / FSE+", category: "social", management: "shared" },
  { slug: "life", acronym: "LIFE", category: "green", management: "direct" },
  { slug: "cef", acronym: "CEF / MIE", category: "infrastructure", management: "direct" },
  { slug: "innovation-fund", acronym: "INNOVFUND", category: "green", management: "direct" },
  { slug: "interreg", acronym: "INTERREG", category: "regional", management: "shared" },
  { slug: "eafrd", acronym: "EAFRD / FEADR", category: "regional", management: "shared" },
] as const satisfies readonly {
  slug: string;
  acronym: string;
  category: CategoryKey;
  management: Management;
}[];

export type ProgrammeSlug = (typeof base)[number]["slug"];

type ProgrammeText = {
  name: string;
  budget: string;
  coFunding: string;
  typicalGrant: string;
  summary: string;
  detail: string;
  bestFor: string[];
  watchOut: string;
};

export type Programme = ProgrammeText & {
  slug: ProgrammeSlug;
  acronym: string;
  category: CategoryKey;
  management: Management;
};

export const categoryLabels: Record<Locale, Record<CategoryKey, string>> = {
  ro: {
    innovation: "Inovare",
    digital: "Digital",
    green: "Verde",
    regional: "Regional",
    social: "Social",
    infrastructure: "Infrastructură",
  },
  en: {
    innovation: "Innovation",
    digital: "Digital",
    green: "Green",
    regional: "Regional",
    social: "Social",
    infrastructure: "Infrastructure",
  },
};

export const managementLabels: Record<Locale, Record<Management, string>> = {
  ro: {
    direct: "Gestiune directă (Comisia Europeană)",
    shared: "Gestiune partajată (autorități naționale/regionale)",
  },
  en: {
    direct: "Direct (European Commission)",
    shared: "Shared (national/regional authorities)",
  },
};

const text: Record<Locale, Record<ProgrammeSlug, ProgrammeText>> = {
  ro: {
    "horizon-europe": {
      name: "Orizont Europa",
      budget: "aprox. 95,5 mld. €",
      coFunding: "70–100% din costurile eligibile",
      typicalGrant: "2–15 mil. € per proiect colaborativ",
      summary:
        "Programul-fanion al Uniunii pentru cercetare și inovare și cea mai mare sursă unică de finanțare competitivă din Europa.",
      detail:
        "Este structurat pe trei piloni: știință de excelență (ERC, Marie Skłodowska-Curie), provocări globale organizate în șase clustere tematice și Europa inovatoare (Consiliul European pentru Inovare, EIT). Majoritatea apelurilor din clustere sunt colaborative și cer un consorțiu de cel puțin trei entități juridice independente din trei state membre sau asociate diferite. Acțiunile de cercetare și inovare se finanțează cu 100% din costurile directe eligibile pentru toți participanții, iar acțiunile de inovare cu 70% pentru entitățile care urmăresc profit.",
      bestFor: [
        "Consorții care duc o tehnologie de la TRL 3 la TRL 8",
        "Universități și institute de cercetare cu activitate de publicare solidă",
        "IMM-uri deep-tech care vizează EIC Accelerator",
      ],
      watchOut:
        "Impactul este secțiunea unde se pierd cele mai multe puncte. O parte tehnică strălucită, dar cu un plan vag de exploatare și diseminare, rămâne sub pragul de calitate.",
    },
    "digital-europe": {
      name: "Europa Digitală",
      budget: "aprox. 7,6 mld. €",
      coFunding: "50–100%, în funcție de tipul acțiunii",
      typicalGrant: "1–10 mil. €",
      summary:
        "Finanțare orientată spre implementare pentru capacitate digitală: inteligență artificială, calcul de înaltă performanță, securitate cibernetică, competențe digitale avansate și servicii publice interoperabile.",
      detail:
        "Spre deosebire de Orizont Europa, programul nu finanțează cercetare. Finanțează punerea în funcțiune, la scară, a tehnologiei deja mature: facilități de testare și experimentare, spații comune de date, hub-uri europene de inovare digitală și extinderea infrastructurii publice digitale. Multe apeluri sunt cofinanțate din bugete naționale, iar unele sunt deschise doar entităților desemnate de statele membre.",
      bestFor: [
        "Organizații care implementează capabilități mature de inteligență artificială sau HPC",
        "Administrații publice care digitalizează servicii transfrontaliere",
        "Operatori de securitate cibernetică și centre naționale de coordonare",
      ],
      watchOut:
        "Unele teme sunt deschise exclusiv consorțiilor nominalizate de autoritățile naționale. Verificați cerințele de desemnare înainte de a investi în redactare.",
    },
    erdf: {
      name: "Fondul European de Dezvoltare Regională",
      budget: "aprox. 226 mld. €",
      coFunding: "40–85%, în funcție de categoria de regiune",
      typicalGrant: "200 mii – 5 mil. €",
      summary:
        "Bani din politica de coeziune pentru competitivitate regională, distribuiți prin programe operaționale naționale și regionale, nu direct de la Bruxelles.",
      detail:
        "FEDR susține competitivitatea IMM-urilor, capacitatea de cercetare, digitalizarea, tranziția către o economie cu emisii reduse și conectivitatea. Fiind în gestiune partajată, apelurile, formularele, limba și termenele sunt stabilite de autoritatea de management din regiunea voastră, nu de Comisie. Ratele de cofinanțare cresc pentru regiunile mai puțin dezvoltate, ajungând până la 85% din costurile eligibile.",
      bestFor: [
        "IMM-uri care investesc în capacitate de producție, echipamente sau eficiență energetică",
        "Infrastructură regională de inovare și clustere",
        "Primării și instituții publice cu proiecte de investiții",
      ],
      watchOut:
        "Regulile de ajutor de stat cântăresc greu aici. Schema aplicabilă stabilește intensitatea maximă, uneori mult sub rata anunțată a programului.",
    },
    "esf-plus": {
      name: "Fondul Social European Plus",
      budget: "aprox. 99 mld. €",
      coFunding: "50–85%, în funcție de categoria de regiune",
      typicalGrant: "100 mii – 3 mil. €",
      summary:
        "Principalul instrument european pentru ocupare, competențe, incluziune socială și reducerea sărăciei.",
      detail:
        "FSE+ finanțează formare și recalificare, măsuri pentru tineri și pentru șomajul de lungă durată, integrarea migranților și a grupurilor dezavantajate, precum și consolidarea capacității serviciilor sociale. Se implementează național sau regional, prin programe operaționale, cu accent puternic pe rezultate măsurabile la nivel de participant și pe raportarea riguroasă a indicatorilor.",
      bestFor: [
        "Furnizori de formare și organizații de învățământ profesional",
        "Angajatori care derulează programe ample de recalificare",
        "ONG-uri și întreprinderi de economie socială",
      ],
      watchOut:
        "Colectarea datelor la nivel de participant este o obligație legală, nu o formalitate. Sistemele slabe de indicatori sunt o cauză frecventă a recuperării fondurilor.",
    },
    life: {
      name: "Programul LIFE",
      budget: "aprox. 5,4 mld. €",
      coFunding: "60–95% din costurile eligibile",
      typicalGrant: "1–10 mil. €",
      summary:
        "Instrumentul dedicat mediului și acțiunii climatice, care acoperă natura, economia circulară, atenuarea schimbărilor climatice și tranziția către energie curată.",
      detail:
        "LIFE are patru subprograme: natură și biodiversitate, economie circulară și calitatea vieții, atenuarea și adaptarea la schimbările climatice și tranziția către energie curată. Proiectele de acțiune standard sunt principala poartă de intrare. Programul răsplătește rezultatele de mediu demonstrabile și durabile, precum și potențialul de replicare în alte state membre, mult mai mult decât noutatea tehnologică.",
      bestFor: [
        "Demonstrarea tehnologiilor verzi aproape de piață",
        "Proiecte de refacere a naturii și de biodiversitate",
        "Autorități publice care implementează planuri de adaptare climatică",
      ],
      watchOut:
        "Trebuie să arătați ce se întâmplă după încheierea finanțării. Proiectele fără un plan credibil de continuare trec rareori.",
    },
    cef: {
      name: "Mecanismul pentru Interconectarea Europei",
      budget: "aprox. 33,7 mld. €",
      coFunding: "30–85%, în funcție de componentă",
      typicalGrant: "5–100+ mil. €",
      summary:
        "Finanțare pentru infrastructură pe trei componente: transport, energie și conectivitate digitală.",
      detail:
        "Componenta de transport finanțează rețeaua transeuropeană: căi ferate, porturi, infrastructură pentru combustibili alternativi. Componenta de energie finanțează rețele transfrontaliere de electricitate, hidrogen și dioxid de carbon, în general proiecte de interes comun. Componenta digitală finanțează conectivitatea de tip backbone, coridoarele 5G și cablurile submarine. Granturile sunt mari, ciclurile sunt lungi, iar avizul statului membru este de regulă obligatoriu.",
      bestFor: [
        "Operatori de infrastructură și companii de utilități",
        "Porturi, aeroporturi, administratori de infrastructură feroviară și operatori logistici",
        "Operatori de telecomunicații care construiesc capacitate transfrontalieră",
      ],
      watchOut:
        "Majoritatea apelurilor de transport cer aprobarea formală a statului membru înainte de depunere. Începeți acea discuție cu luni bune înainte de termen.",
    },
    "innovation-fund": {
      name: "Fondul pentru Inovare",
      budget: "aprox. 40 mld. €, din veniturile ETS",
      coFunding: "Până la 60% din costurile relevante",
      typicalGrant: "10–200+ mil. €",
      summary:
        "Sprijin la scară mare pentru prima demonstrație comercială a tehnologiilor cu emisii reduse, finanțat din veniturile schemei europene de comercializare a certificatelor de emisii.",
      detail:
        "Fondul vizează decarbonizarea industrială, hidrogenul, captarea și stocarea dioxidului de carbon, sursele regenerabile și stocarea energiei. Finanțarea se calculează pe costurile relevante, adică diferența de cost față de o instalație convențională de referință. Proiectele sunt evaluate după emisiile de gaze cu efect de seră evitate în valoare absolută, gradul de inovare, maturitate, potențialul de replicare și eficiența costurilor.",
      bestFor: [
        "Industrie energointensivă care decarbonizează un sit de producție",
        "Primele instalații comerciale de hidrogen sau de captare a carbonului",
        "Producători care extind fabricarea de componente pentru tehnologii curate",
      ],
      watchOut:
        "Maturitatea financiară și stadiul autorizațiilor contează efectiv. O tehnologie excelentă fără un plan bancabil și fără traseul avizelor nu primește finanțare.",
    },
    interreg: {
      name: "Interreg",
      budget: "aprox. 8 mld. €",
      coFunding: "Până la 80% din costurile eligibile",
      typicalGrant: "500 mii – 5 mil. €",
      summary:
        "Cooperare teritorială europeană: proiecte transfrontaliere, transnaționale și interregionale între regiuni vecine sau legate tematic.",
      detail:
        "Interreg este organizat pe arii de program, fiecare cu propria strategie, propriile apeluri și propriul secretariat comun. Componentele transfrontaliere finanțează regiuni învecinate de o parte și de alta a unei granițe interne, iar cele transnaționale acoperă macroregiuni mai mari, precum Dunărea sau Marea Baltică. Parteneriatele au de obicei între 6 și 12 organizații, iar cerințele administrative sunt proporțional mai ușoare decât la Orizont Europa.",
      bestFor: [
        "Autorități regionale și agenții de dezvoltare",
        "Universități și ONG-uri active într-o regiune de graniță",
        "Acțiuni-pilot care au nevoie de parteneri, nu de capacitate mare de cercetare",
      ],
      watchOut:
        "Eligibilitatea depinde de aria de program în care se află sediul vostru înregistrat, nu de țară în ansamblu.",
    },
    eafrd: {
      name: "Dezvoltare rurală (Planul Strategic PAC)",
      budget: "aprox. 60 mld. € pentru 2023–2027",
      coFunding: "40–80%, în funcție de măsură și regiune",
      typicalGrant: "50 mii – 2 mil. €",
      summary:
        "Pilonul rural al Politicii Agricole Comune, implementat prin planul strategic național al fiecărui stat membru.",
      detail:
        "FEADR finanțează modernizarea fermelor, investițiile în procesarea alimentelor, instalarea tinerilor fermieri, schemele de agromediu, diversificarea afacerilor rurale și dezvoltarea locală prin LEADER. Fiecare stat membru își definește propriul set de intervenții, așa că aceeași măsură poate arăta foarte diferit de o parte și de alta a graniței.",
      bestFor: [
        "Producători și procesatori agroalimentari care investesc în capacitate",
        "Tineri fermieri care își înființează exploatația",
        "IMM-uri rurale și operatori din turism",
      ],
      watchOut:
        "Sesiunile de depunere se deschid și se închid rapid și sunt adesea puternic suprasubscrise. Criteriile de punctaj răsplătesc pregătirea făcută cu mult înainte de deschiderea apelului.",
    },
  },
  en: {
    "horizon-europe": {
      name: "Horizon Europe",
      budget: "approx. €95.5 bn",
      coFunding: "70–100% of eligible costs",
      typicalGrant: "€2M – €15M per collaborative project",
      summary:
        "The EU's flagship research and innovation programme, and the largest single source of competitive grant funding in Europe.",
      detail:
        "Structured in three pillars: excellent science (ERC, Marie Skłodowska-Curie), global challenges organised into six thematic clusters, and innovative Europe (European Innovation Council, EIT). Most cluster calls are collaborative and require a consortium of at least three independent legal entities from three different Member States or associated countries. Research and innovation actions are funded at 100% of eligible direct costs for all participants; innovation actions at 70% for for-profit entities.",
      bestFor: [
        "Consortia advancing technology from TRL 3 to TRL 8",
        "Universities and research organisations with a strong publication record",
        "Deep-tech SMEs targeting the EIC Accelerator",
      ],
      watchOut:
        "Impact is where most proposals lose points. A brilliant technical section with a vague exploitation and dissemination plan will score below threshold.",
    },
    "digital-europe": {
      name: "Digital Europe Programme",
      budget: "approx. €7.6 bn",
      coFunding: "50–100% depending on action type",
      typicalGrant: "€1M – €10M",
      summary:
        "Deployment-focused funding for digital capacity: AI, high-performance computing, cybersecurity, advanced digital skills and interoperable public services.",
      detail:
        "Unlike Horizon Europe, DIGITAL does not fund research. It funds putting mature technology into use at scale — testing and experimentation facilities, common data spaces, European Digital Innovation Hubs, and the roll-out of digital public infrastructure. Calls are frequently co-funded with national budgets, and some are restricted to entities designated by Member States.",
      bestFor: [
        "Organisations deploying proven AI or HPC capability",
        "Public administrations digitising cross-border services",
        "Cybersecurity operators and national coordination centres",
      ],
      watchOut:
        "Several topics are open only to consortia nominated by national authorities. Confirm designation requirements before investing in a proposal.",
    },
    erdf: {
      name: "European Regional Development Fund",
      budget: "approx. €226 bn",
      coFunding: "40–85% by region category",
      typicalGrant: "€200k – €5M",
      summary:
        "Cohesion policy money for regional competitiveness — delivered through national and regional operational programmes rather than by Brussels.",
      detail:
        "ERDF supports SME competitiveness, research capacity, digitalisation, the low-carbon transition and connectivity. Because it is under shared management, the calls, forms, language and deadlines are set by the managing authority in your region, not by the Commission. Co-financing rates rise for less-developed regions, reaching up to 85% of eligible costs.",
      bestFor: [
        "SMEs investing in production capacity, equipment or energy efficiency",
        "Regional innovation infrastructure and clusters",
        "Municipalities and public bodies with capital projects",
      ],
      watchOut:
        "State-aid rules bite hard here. The applicable aid scheme determines your maximum intensity — sometimes far below the programme headline rate.",
    },
    "esf-plus": {
      name: "European Social Fund Plus",
      budget: "approx. €99 bn",
      coFunding: "50–85% by region category",
      typicalGrant: "€100k – €3M",
      summary:
        "The EU's main instrument for employment, skills, social inclusion and reducing poverty.",
      detail:
        "ESF+ funds training and reskilling, youth and long-term-unemployment measures, integration of migrants and disadvantaged groups, and capacity building in social services. Delivered nationally or regionally through operational programmes, with a strong emphasis on measurable participant outcomes and rigorous indicator reporting.",
      bestFor: [
        "Training providers and vocational education organisations",
        "Employers running large-scale reskilling programmes",
        "NGOs and social-economy enterprises",
      ],
      watchOut:
        "Participant-level data collection is a legal obligation, not an afterthought. Weak indicator systems are a common cause of clawback.",
    },
    life: {
      name: "LIFE Programme",
      budget: "approx. €5.4 bn",
      coFunding: "60–95% of eligible costs",
      typicalGrant: "€1M – €10M",
      summary:
        "The dedicated funding instrument for environment and climate action, covering nature, circular economy, climate mitigation and the clean energy transition.",
      detail:
        "LIFE runs four sub-programmes: nature and biodiversity, circular economy and quality of life, climate change mitigation and adaptation, and clean energy transition. Standard action projects are the main entry point. The programme rewards demonstrable, durable environmental outcomes and replicability across other Member States far more than novelty.",
      bestFor: [
        "Demonstration of close-to-market green technology",
        "Nature restoration and biodiversity projects",
        "Public authorities implementing climate adaptation plans",
      ],
      watchOut:
        "You must show what happens after the grant ends. Projects without a credible post-funding continuation plan rarely pass.",
    },
    cef: {
      name: "Connecting Europe Facility",
      budget: "approx. €33.7 bn",
      coFunding: "30–85% depending on strand",
      typicalGrant: "€5M – €100M+",
      summary:
        "Infrastructure funding across three strands: transport, energy and digital connectivity.",
      detail:
        "CEF Transport funds the trans-European transport network — rail, ports, alternative-fuel infrastructure. CEF Energy funds cross-border electricity, hydrogen and carbon networks, mostly Projects of Common Interest. CEF Digital funds backbone connectivity, 5G corridors and submarine cables. Grants are large, cycles are long, and national endorsement is usually required.",
      bestFor: [
        "Infrastructure operators and network utilities",
        "Ports, airports, rail managers and logistics operators",
        "Telecom operators building cross-border capacity",
      ],
      watchOut:
        "Most transport calls require formal Member State approval before submission. Start that conversation months ahead of the deadline.",
    },
    "innovation-fund": {
      name: "Innovation Fund",
      budget: "approx. €40 bn, funded by ETS revenues",
      coFunding: "Up to 60% of relevant costs",
      typicalGrant: "€10M – €200M+",
      summary:
        "Large-scale support for first-of-a-kind commercial demonstration of low-carbon technologies, financed by EU Emissions Trading System revenues.",
      detail:
        "The Innovation Fund targets industrial decarbonisation, hydrogen, carbon capture and storage, renewables and energy storage. Funding is calculated against relevant costs — the extra cost of the low-carbon option compared with a conventional reference plant. Projects are assessed on absolute greenhouse-gas avoidance, degree of innovation, maturity, replicability and cost efficiency.",
      bestFor: [
        "Energy-intensive industry decarbonising a production site",
        "First commercial-scale hydrogen or carbon capture installations",
        "Manufacturers scaling clean-tech component production",
      ],
      watchOut:
        "Financial close and permitting maturity carry real weight. A brilliant technology without a bankable plan and a permitting path will not be funded.",
    },
    interreg: {
      name: "Interreg",
      budget: "approx. €8 bn",
      coFunding: "Up to 80% of eligible costs",
      typicalGrant: "€500k – €5M",
      summary:
        "European territorial cooperation — cross-border, transnational and interregional projects between neighbouring or thematically linked regions.",
      detail:
        "Interreg is organised into programme areas, each with its own strategy, calls and joint secretariat. Cross-border strands fund neighbouring regions on either side of an internal EU border; transnational strands cover larger macro-regions such as the Danube or Baltic Sea. Partnerships are typically 6-12 organisations and administrative requirements are proportionally lighter than Horizon Europe.",
      bestFor: [
        "Regional authorities and development agencies",
        "Universities and NGOs working across a border region",
        "Pilot actions needing partners rather than deep R&D capacity",
      ],
      watchOut:
        "Your eligibility depends on which programme area your registered address sits in — not on your country as a whole.",
    },
    eafrd: {
      name: "Rural Development (CAP Strategic Plans)",
      budget: "approx. €60 bn for 2023–2027",
      coFunding: "40–80% by measure and region",
      typicalGrant: "€50k – €2M",
      summary:
        "The rural pillar of the Common Agricultural Policy, delivered through each Member State's national CAP Strategic Plan.",
      detail:
        "EAFRD funds farm modernisation, food processing investment, young-farmer establishment, agri-environment schemes, rural business diversification and LEADER local development. Every Member State defines its own intervention set, so the same measure can look very different across two borders.",
      bestFor: [
        "Agri-food producers and processors investing in capacity",
        "Young farmers setting up a holding",
        "Rural SMEs and tourism operators",
      ],
      watchOut:
        "Submission sessions open and close fast and are often heavily oversubscribed. Scoring criteria reward preparation done long before the call opens.",
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
