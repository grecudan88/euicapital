import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { ProgrammeExplorer } from "@/components/programme-explorer";

export const metadata: Metadata = {
  title: "EU funding programmes",
  description:
    "Horizon Europe, Digital Europe, ERDF, ESF+, LIFE, CEF, the Innovation Fund, Interreg and rural development — what each instrument funds and who is eligible.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="The instruments, and who each one is actually for"
        lede="Two things decide where your project belongs: what you are building, and who administers the money. Filter by theme or management mode to narrow it down."
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <ProgrammeExplorer />

          <aside className="mt-16 rounded-2xl border border-ink-900/10 bg-paper-warm p-8">
            <h2 className="font-display text-xl text-ink-950">
              Direct or shared management — why it matters
            </h2>
            <div className="mt-4 grid gap-6 text-[15px] leading-relaxed text-ink-700 sm:grid-cols-2">
              <p>
                <strong className="font-semibold text-ink-900">Direct management</strong> means the
                European Commission or one of its executive agencies runs the call itself. One set
                of rules, one portal, one deadline, and competition across the whole Union. Scores
                are typically published in an Evaluation Summary Report.
              </p>
              <p>
                <strong className="font-semibold text-ink-900">Shared management</strong> means the
                money is allocated to your Member State or region, which sets its own calls, forms,
                language and scoring. The competition is smaller, the paperwork is local, and state
                aid rules usually decide your maximum funding intensity.
              </p>
            </div>
            <p className="mt-6 border-t border-ink-900/10 pt-5 text-sm text-ink-600">
              Figures on this page are indicative headline allocations for the 2021&ndash;2027
              multiannual financial framework and are rounded. Always confirm against the current
              work programme and call documentation before making a decision.
            </p>
          </aside>
        </Container>
      </section>
    </>
  );
}
