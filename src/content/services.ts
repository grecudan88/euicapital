import type { Locale } from "./locales";

const slugs = [
  "funding-strategy",
  "proposal-writing",
  "consortium-building",
  "project-management",
  "audit-compliance",
  "resubmission",
] as const;

export type ServiceSlug = (typeof slugs)[number];

type ServiceText = {
  title: string;
  summary: string;
  outcome: string;
  deliverables: string[];
  timeline: string;
};

export type Service = ServiceText & { slug: ServiceSlug };

/** Every locale must supply every slug — TypeScript enforces it. */
const text: Record<Locale, Record<ServiceSlug, ServiceText>> = {
  ro: {
    "funding-strategy": {
      title: "Strategie și scanare de finanțare",
      summary:
        "Comparăm planul vostru de dezvoltare cu apelurile deschise și cu cele anunțate, la nivel european, național și regional, apoi vă spunem care dintre ele merită cu adevărat timpul vostru.",
      outcome: "Un calendar de finanțare ierarhizat, nu un dosar plin de PDF-uri.",
      deliverables: [
        "Evaluarea eligibilității și a potrivirii pentru fiecare proiect din portofoliu",
        "Calendar pe 18 luni al apelurilor relevante, cu bugete orientative",
        "Recomandare de tip merge / nu merge, cu o estimare onestă a șanselor",
        "Opțiuni de structurare a cofinanțării și a ajutorului de stat",
      ],
      timeline: "2–3 săptămâni",
    },
    "proposal-writing": {
      title: "Redactarea proiectului",
      summary:
        "Scriem integral aplicația: excelență, impact și implementare, pachete de lucru, buget și toate anexele cerute de apel.",
      outcome: "Un proiect gata de depunere, scris așa cum punctează evaluatorii.",
      deliverables: [
        "Notă de concept și arhitectura proiectului",
        "Redactarea completă a narativului, aliniată la criteriile de evaluare",
        "Structura pachetelor de lucru, livrabilelor, jaloanelor și diagrama Gantt",
        "Construcția bugetului cu verificarea eligibilității costurilor",
        "Două runde interne de evaluare pe grila oficială de punctaj",
      ],
      timeline: "6–10 săptămâni înainte de termen",
    },
    "consortium-building": {
      title: "Construirea consorțiului",
      summary:
        "Multe instrumente europene cer parteneri din mai multe state membre. Identificăm, verificăm și coordonăm consorțiul, astfel încât geografia să nu vă mai blocheze.",
      outcome: "Un parteneriat echilibrat, care respectă regulile de eligibilitate ale apelului.",
      deliverables: [
        "Căutarea partenerilor în rețeaua noastră de organizații de cercetare și companii",
        "Verificarea capacității tehnice și a viabilității financiare",
        "Sprijin pentru scrisorile de intenție și acordul de consorțiu",
        "Facilitarea negocierii rolurilor, a cotelor de buget și a drepturilor de proprietate intelectuală",
      ],
      timeline: "4–8 săptămâni",
    },
    "project-management": {
      title: "Management de grant și de proiect",
      summary:
        "Munca nu se termină la semnarea contractului. Ne ocupăm de raportare, acte adiționale și coordonarea partenerilor pe toată durata proiectului.",
      outcome: "Tranșe încasate la timp, fără constatări la închiderea proiectului.",
      deliverables: [
        "Pregătirea și negocierea contractului de finanțare",
        "Rapoarte tehnice și financiare periodice",
        "Sisteme de conformitate pentru pontaje, cereri de rambursare și achiziții",
        "Gestionarea actelor adiționale și a cererilor de modificare",
      ],
      timeline: "Durata proiectului",
    },
    "audit-compliance": {
      title: "Audit și conformitate",
      summary:
        "Verificare înainte de audit și asistență pe durata controalelor Comisiei sau ale autorității de management, astfel încât costurile eligibile să rămână eligibile.",
      outcome: "Documentație pe care o puteți susține înainte ca auditorul să o ceară.",
      deliverables: [
        "Analiza eligibilității costurilor față de regulile aplicabile",
        "Identificarea lipsurilor din documentație și plan de remediere",
        "Asistență în timpul verificărilor la fața locului și al auditurilor",
        "Redactarea răspunsurilor la constatările preliminare",
      ],
      timeline: "1–4 săptămâni",
    },
    resubmission: {
      title: "Redepunere și contestație",
      summary:
        "Un punctaj ratat la limită este un activ. Analizăm raportul de evaluare și reconstruim secțiunile slabe pentru următoarea sesiune.",
      outcome: "O creștere măsurabilă a punctajului la a doua încercare.",
      deliverables: [
        "Analiza rând cu rând a raportului de evaluare, corelată cu punctele pierdute",
        "Rescrierea criteriilor cu punctaj slab",
        "Redactarea contestației acolo unde a existat o eroare de procedură",
        "Redirecționarea către alt instrument dacă potrivirea a fost greșită",
      ],
      timeline: "3–6 săptămâni",
    },
  },
  en: {
    "funding-strategy": {
      title: "Funding strategy & scanning",
      summary:
        "We map your roadmap against open and forthcoming calls across EU, national and regional instruments, then tell you which ones are genuinely worth your time.",
      outcome: "A ranked, dated funding pipeline instead of a folder of PDFs.",
      deliverables: [
        "Eligibility and fit assessment against your project portfolio",
        "18-month calendar of relevant calls with indicative budgets",
        "Go / no-go scoring with an honest probability estimate",
        "Co-financing and state-aid structure options",
      ],
      timeline: "2–3 weeks",
    },
    "proposal-writing": {
      title: "Proposal development",
      summary:
        "Full authoring of the application: Excellence, Impact and Implementation, work packages, budget, and every annex the call demands.",
      outcome: "A submission-ready proposal that reads the way evaluators score.",
      deliverables: [
        "Concept note and proposal architecture",
        "Full narrative drafting and evaluator-criteria alignment",
        "Work package, deliverable, milestone and Gantt structure",
        "Budget build-up with cost-eligibility checks",
        "Two internal review rounds against the official scoring grid",
      ],
      timeline: "6–10 weeks before deadline",
    },
    "consortium-building": {
      title: "Consortium building",
      summary:
        "Many EU instruments require partners in several Member States. We assemble, vet and manage the consortium so geography stops being your bottleneck.",
      outcome: "A balanced partnership that satisfies the call's eligibility rules.",
      deliverables: [
        "Partner search across our network of research and industry organisations",
        "Capability and financial-viability screening",
        "Letters of intent and consortium agreement support",
        "Role, budget-share and IP negotiation facilitation",
      ],
      timeline: "4–8 weeks",
    },
    "project-management": {
      title: "Grant & project management",
      summary:
        "The work does not end at award. We run reporting, amendments and partner coordination for the life of the project.",
      outcome: "Instalments paid on time, with no findings at closure.",
      deliverables: [
        "Grant agreement preparation and negotiation",
        "Periodic technical and financial reporting",
        "Timesheet, cost-claim and procurement compliance systems",
        "Amendment handling and change requests",
      ],
      timeline: "Duration of the project",
    },
    "audit-compliance": {
      title: "Audit & compliance",
      summary:
        "Pre-audit review and support during Commission or managing-authority checks, so eligible costs stay eligible.",
      outcome: "Defensible documentation before the auditor asks for it.",
      deliverables: [
        "Cost-eligibility review against the applicable rules",
        "Documentation gap analysis and remediation plan",
        "Support during on-the-spot checks and audits",
        "Response drafting for preliminary findings",
      ],
      timeline: "1–4 weeks",
    },
    resubmission: {
      title: "Resubmission & appeal",
      summary:
        "A near-miss score is an asset. We dissect the Evaluation Summary Report and rebuild the weak sections for the next cut-off.",
      outcome: "A measurable score increase on the second attempt.",
      deliverables: [
        "Line-by-line ESR analysis mapped to lost points",
        "Rewrite of the underperforming criteria",
        "Redress request drafting where a procedural error occurred",
        "Alternative-instrument routing if the fit was wrong",
      ],
      timeline: "3–6 weeks",
    },
  },
};

export function getServices(locale: Locale): Service[] {
  return slugs.map((slug) => ({ slug, ...text[locale][slug] }));
}
