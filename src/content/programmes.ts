/**
 * EU funding instruments, 2021-2027 MFF.
 *
 * Budget figures are indicative headline allocations for the full 2021-2027
 * period and are rounded. Verify against the current work programme on the
 * Funding & Tenders Portal before quoting them to a client.
 */

export type Programme = {
  slug: string;
  name: string;
  acronym: string;
  budget: string;
  managedBy: "Direct (European Commission)" | "Shared (national/regional authorities)";
  coFunding: string;
  category: "Innovation" | "Digital" | "Green" | "Regional" | "Social" | "Infrastructure";
  summary: string;
  bestFor: string[];
  typicalGrant: string;
  detail: string;
  watchOut: string;
};

export const programmes: Programme[] = [
  {
    slug: "horizon-europe",
    name: "Horizon Europe",
    acronym: "HORIZON",
    budget: "approx. €95.5 bn",
    managedBy: "Direct (European Commission)",
    coFunding: "70–100% of eligible costs",
    category: "Innovation",
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
  {
    slug: "digital-europe",
    name: "Digital Europe Programme",
    acronym: "DIGITAL",
    budget: "approx. €7.6 bn",
    managedBy: "Direct (European Commission)",
    coFunding: "50–100% depending on action type",
    category: "Digital",
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
  {
    slug: "erdf",
    name: "European Regional Development Fund",
    acronym: "ERDF",
    budget: "approx. €226 bn",
    managedBy: "Shared (national/regional authorities)",
    coFunding: "40–85% by region category",
    category: "Regional",
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
  {
    slug: "esf-plus",
    name: "European Social Fund Plus",
    acronym: "ESF+",
    budget: "approx. €99 bn",
    managedBy: "Shared (national/regional authorities)",
    coFunding: "50–85% by region category",
    category: "Social",
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
  {
    slug: "life",
    name: "LIFE Programme",
    acronym: "LIFE",
    budget: "approx. €5.4 bn",
    managedBy: "Direct (European Commission)",
    coFunding: "60–95% of eligible costs",
    category: "Green",
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
  {
    slug: "cef",
    name: "Connecting Europe Facility",
    acronym: "CEF",
    budget: "approx. €33.7 bn",
    managedBy: "Direct (European Commission)",
    coFunding: "30–85% depending on strand",
    category: "Infrastructure",
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
  {
    slug: "innovation-fund",
    name: "Innovation Fund",
    acronym: "INNOVFUND",
    budget: "approx. €40 bn, funded by ETS revenues",
    managedBy: "Direct (European Commission)",
    coFunding: "Up to 60% of relevant costs",
    category: "Green",
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
  {
    slug: "interreg",
    name: "Interreg",
    acronym: "INTERREG",
    budget: "approx. €8 bn",
    managedBy: "Shared (national/regional authorities)",
    coFunding: "Up to 80% of eligible costs",
    category: "Regional",
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
  {
    slug: "eafrd",
    name: "Rural Development (CAP Strategic Plans)",
    acronym: "EAFRD",
    budget: "approx. €60 bn for 2023–2027",
    managedBy: "Shared (national/regional authorities)",
    coFunding: "40–80% by measure and region",
    category: "Regional",
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
];

export const programmeBySlug = (slug: string) => programmes.find((p) => p.slug === slug);

export const categories = [...new Set(programmes.map((p) => p.category))].sort();
