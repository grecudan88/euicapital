export type Service = {
  slug: string;
  title: string;
  summary: string;
  outcome: string;
  deliverables: string[];
  timeline: string;
};

export const services: Service[] = [
  {
    slug: "funding-strategy",
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
  {
    slug: "proposal-writing",
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
  {
    slug: "consortium-building",
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
  {
    slug: "project-management",
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
  {
    slug: "audit-compliance",
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
  {
    slug: "resubmission",
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
];
