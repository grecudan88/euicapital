import type { Metadata } from "next";
import { ArrowRight, ButtonLink, Container, PageHero, SectionHeading } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is an independent EU funding consultancy working with companies, research organisations and public bodies across the European Union.`,
};

const principles = [
  {
    title: "We say no",
    body: "If your project is not fundable this cycle, you will hear it on the first call. A polite yes that wastes three months of your team's time costs you far more than our fee.",
  },
  {
    title: "Your experts write the science",
    body: "We do not invent technical content. We interview your people, structure what they know, and translate it into the language evaluators are scoring against.",
  },
  {
    title: "Compliance is designed in",
    body: "Reporting systems, cost eligibility and audit trails are decided while the proposal is being written, not discovered during the first financial report.",
  },
  {
    title: "One named lead",
    body: "Every engagement has a single senior consultant accountable for it from the eligibility call to project closure. You will not be handed to a junior after signature.",
  },
];

const team = [
  {
    name: "Senior consultant — Innovation",
    focus: "Horizon Europe, EIC, Innovation Fund",
    background:
      "Former national contact point, background in industrial R&D programme evaluation.",
  },
  {
    name: "Senior consultant — Cohesion",
    focus: "ERDF, ESF+, Interreg, CAP",
    background: "Twelve years inside a regional managing authority, then advising applicants.",
  },
  {
    name: "Financial manager",
    focus: "Budgets, cost eligibility, audit",
    background: "Chartered accountant specialising in EU grant financial reporting.",
  },
  {
    name: "Consortium lead",
    focus: "Partner search, negotiation, governance",
    background: "Coordinated multi-country research consortia for a European research institute.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small firm that only does one thing"
        lede={`${site.name} advises organisations across the European Union on finding, winning and delivering public funding. We do not do marketing, we do not do general management consulting, and we do not take on projects we do not think can win.`}
      />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
            <div className="max-w-2xl">
              <SectionHeading eyebrow="Our position" title="Independent, and clear about it" />
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-700">
                <p>
                  {site.legalName} is a private consultancy. We are not part of the European Union
                  and we do not decide who gets funded. What we do is understand how the decision is
                  made, and prepare applicants accordingly.
                </p>
                <p>
                  That distinction matters. Nobody can guarantee a grant, and any adviser who
                  suggests otherwise is selling something else. What can be improved is the quality
                  of the fit, the strength of the argument, and the discipline of the delivery — and
                  those three things move success rates a very long way.
                </p>
                <p>
                  We work across direct-management programmes run from Brussels and shared-management
                  funds administered by national and regional authorities. Our clients are
                  mid-sized companies scaling a technology, research organisations building
                  consortia, and public bodies with capital and social programmes to finance.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-ink-900/10 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">
                At a glance
              </p>
              <dl className="mt-6 space-y-5 text-sm">
                {[
                  ["Founded", String(site.founded)],
                  ["Offices", site.address],
                  ["Member States served", "11"],
                  ["Focus", "EU public funding only"],
                  ["Working languages", "EN, RO, FR, DE"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-6 border-b border-ink-900/10 pb-4 last:border-0">
                    <dt className="text-ink-600">{label}</dt>
                    <dd className="text-right font-medium text-ink-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-paper-warm py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we operate"
            title="Four principles we do not bend"
            lede="They cost us work occasionally. They are also why clients come back for the next call."
          />
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="hairline pt-6">
                <h3 className="font-display text-xl text-ink-950">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The team"
            title="Who you actually work with"
            lede="Replace these placeholders with your consultants' names, photographs and profiles before launch."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-ink-900/10 bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-950">
                  <span className="font-display text-lg text-gold-400">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg text-ink-950">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold-600">{member.focus}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{member.background}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-ink-900 p-10 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl text-paper">Work with us</h2>
              <p className="mt-2 text-ink-200">
                Start with a free eligibility call. No commitment either way.
              </p>
            </div>
            <ButtonLink href="/contact/" className="bg-gold-500 text-ink-950 hover:bg-gold-400">
              Book a call
              <ArrowRight />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
