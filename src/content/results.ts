/**
 * PLACEHOLDER CONTENT — replace before the site goes live.
 *
 * These engagements are illustrative examples written to show the page layout.
 * They are not real clients. Swap in your own anonymised case studies (and
 * delete the placeholder banner in src/app/results/page.tsx) before launch.
 */

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  programme: string;
  amount: string;
  year: string;
  challenge: string;
  approach: string[];
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "battery-materials-scale-up",
    client: "Battery materials scale-up",
    sector: "Advanced manufacturing",
    programme: "Horizon Europe — Cluster 4",
    amount: "€4.2M",
    year: "2024",
    challenge:
      "A cathode-materials company had pilot-line results but no consortium and eight weeks until the deadline.",
    approach: [
      "Assembled a five-country consortium including two research institutes and an OEM offtaker",
      "Rebuilt the impact narrative around a quantified EU supply-chain dependency argument",
      "Structured the budget to keep the industrial partners at a defensible 70% rate",
    ],
    result: "Funded on first submission, scoring 14.0/15 with the impact section rated highest.",
  },
  {
    slug: "regional-food-processing",
    client: "Regional food processing group",
    sector: "Agri-food",
    programme: "ERDF — regional operational programme",
    amount: "€2.8M",
    year: "2025",
    challenge:
      "A cold-chain investment was blocked by a state-aid ceiling the client had not accounted for.",
    approach: [
      "Restructured the investment into two phases across separate aid schemes",
      "Ran the eligibility test on every cost line before the technical file was drafted",
      "Prepared the procurement documentation ahead of award to avoid a delayed start",
    ],
    result: "Full requested amount approved, with first instalment disbursed within four months.",
  },
  {
    slug: "municipal-climate-adaptation",
    client: "Coastal municipality",
    sector: "Public sector",
    programme: "LIFE — climate adaptation",
    amount: "€3.1M",
    year: "2024",
    challenge:
      "A previous in-house application had scored below threshold on replicability and durability.",
    approach: [
      "Analysed the Evaluation Summary Report line by line to locate the lost points",
      "Added three replication municipalities and a post-project maintenance commitment",
      "Rewrote the monitoring plan around measurable environmental indicators",
    ],
    result: "Resubmission passed with a score increase of 3.5 points over the first attempt.",
  },
  {
    slug: "hydrogen-electrolyser",
    client: "Industrial hydrogen producer",
    sector: "Energy",
    programme: "Innovation Fund",
    amount: "€21M",
    year: "2025",
    challenge:
      "Strong technology, but the relevant-cost calculation and permitting timeline were unconvincing.",
    approach: [
      "Rebuilt the relevant-cost model against a defensible conventional reference plant",
      "Documented permitting status and financial-close milestones with third-party evidence",
      "Quantified absolute greenhouse-gas avoidance over the first ten operating years",
    ],
    result: "Selected for grant preparation, ranked in the top quartile of its call.",
  },
  {
    slug: "vocational-reskilling",
    client: "National training provider",
    sector: "Education",
    programme: "ESF+ — national operational programme",
    amount: "€1.6M",
    year: "2023",
    challenge:
      "An ambitious reskilling programme with no system for collecting participant-level indicators.",
    approach: [
      "Designed the indicator framework and data-collection workflow before submission",
      "Aligned target groups with the operational programme's priority definitions",
      "Trained the delivery team on evidence requirements ahead of the first report",
    ],
    result: "Approved and delivered with no findings at the mid-term verification.",
  },
  {
    slug: "cross-border-digital-services",
    client: "Two regional authorities",
    sector: "Public sector",
    programme: "Interreg — cross-border",
    amount: "€1.9M",
    year: "2025",
    challenge:
      "Two authorities on opposite sides of a border wanted to cooperate but sat in different programme areas.",
    approach: [
      "Confirmed programme-area eligibility before any drafting began",
      "Built a partnership of eight organisations with balanced budget shares",
      "Negotiated the joint governance and reporting structure up front",
    ],
    result: "Approved in the first call of the programming period.",
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
