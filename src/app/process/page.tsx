import type { Metadata } from "next";
import { ArrowRight, ButtonLink, Container, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "Our method for EU funding applications: eligibility screening, funding map, proposal development, submission and post-award delivery.",
};

const phases = [
  {
    number: "01",
    label: "Eligibility call",
    duration: "45 minutes, free",
    body: "We look at three things: your legal entity, your project's maturity, and your timeline. Most conversations end with a clear answer on whether EU funding is realistic this year or next.",
    detail: [
      "Entity type, size and registration checked against eligibility rules",
      "Technology or investment maturity placed on the TRL scale",
      "Co-financing capacity and cash-flow implications discussed openly",
      "Honest verdict, including when the answer is 'not yet'",
    ],
  },
  {
    number: "02",
    label: "Funding map",
    duration: "2–3 weeks",
    body: "A written shortlist of the instruments worth pursuing, ranked by fit and probability, with the calendar that governs everything that follows.",
    detail: [
      "Every relevant open and forthcoming call, with dates and budgets",
      "Eligibility notes specific to your entity and region",
      "State-aid and co-financing structure options",
      "A go / no-go recommendation per call, with reasoning",
    ],
  },
  {
    number: "03",
    label: "Positioning",
    duration: "2–4 weeks",
    body: "Before a word of the proposal is written, we fix the story: the problem, why Europe should fund it, and what changes if the project succeeds.",
    detail: [
      "Concept note agreed with your technical team",
      "Impact pathway mapped to the call's expected outcomes",
      "Consortium gaps identified and partner search launched if needed",
      "Budget envelope and work package skeleton agreed",
    ],
  },
  {
    number: "04",
    label: "Drafting",
    duration: "4–8 weeks",
    body: "We write. Your experts supply the technical substance in structured interviews; we turn it into text that maps onto the scoring grid.",
    detail: [
      "Full narrative across all evaluation criteria",
      "Work packages, deliverables, milestones, risks and Gantt",
      "Detailed budget with cost-eligibility validation",
      "All annexes, declarations and portal forms prepared",
    ],
  },
  {
    number: "05",
    label: "Review and submit",
    duration: "Final 2 weeks",
    body: "Two independent review rounds scored against the official grid, then submission with days to spare — never hours.",
    detail: [
      "Internal mock evaluation using the published criteria",
      "External reviewer where the call and budget justify one",
      "Portal submission and validation checks completed early",
      "Submission pack archived for the evaluation and negotiation phases",
    ],
  },
  {
    number: "06",
    label: "Award and delivery",
    duration: "Life of the project",
    body: "Grant agreement preparation, then the reporting machinery that keeps the money in your accounts.",
    detail: [
      "Grant agreement negotiation and consortium agreement support",
      "Reporting calendar, templates and evidence requirements set up",
      "Periodic technical and financial reports drafted",
      "Amendments, audits and closure handled",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Scheduled backwards from a deadline that will not move"
        lede="EU calls close at a fixed hour on a fixed day. Everything below is planned from that moment in reverse, which is why we decline engagements that start too late to do properly."
      />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="space-y-16">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="grid gap-8 border-t border-ink-900/10 pt-10 lg:grid-cols-[8rem_minmax(0,1fr)_minmax(0,24rem)]"
              >
                <div>
                  <p className="font-display text-4xl text-gold-400">{phase.number}</p>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-ink-950">{phase.label}</h2>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.1em] text-gold-600">
                    {phase.duration}
                  </p>
                  <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-ink-700">
                    {phase.body}
                  </p>
                </div>
                <ul className="space-y-3 rounded-2xl bg-white p-6 ring-1 ring-ink-900/10">
                  {phase.detail.map((d) => (
                    <li key={d} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                      <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-20 sm:py-24">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Commercials"
            title="How we charge"
            lede="No surprises, and no arrangement that only pays us if you win."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Fixed fee per stage",
                body: "Each engagement stage is quoted as a fixed fee before it starts. You know the cost of the funding map before you commit to the proposal.",
              },
              {
                title: "Success fee, capped",
                body: "Where appropriate we add a success component on award, always capped and always disclosed up front. Many programmes limit what is eligible here.",
              },
              {
                title: "Retainer for delivery",
                body: "Post-award reporting and compliance run on a monthly retainer scaled to the project size and the number of partners.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <h3 className="font-display text-lg text-paper">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-400">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-400">
            Consultancy fees are sometimes an eligible project cost and sometimes not. We tell you
            which applies to your call before you sign anything.
          </p>
          <div className="mt-10">
            <ButtonLink href="/contact/" className="bg-gold-500 text-ink-950 hover:bg-gold-400">
              Ask for a quote
              <ArrowRight />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
