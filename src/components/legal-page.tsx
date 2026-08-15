import { Container, PageHero } from "./ui";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  eyebrow,
  title,
  lede,
  sections,
  footnote,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  sections: LegalSection[];
  footnote?: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lede={lede} />
      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl space-y-12">
            {sections.map((section) => (
              <div key={section.heading} className="hairline pt-8">
                <h2 className="font-display text-2xl text-ink-950">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-ink-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}

            {footnote ? (
              <p className="rounded-2xl bg-paper-warm p-6 text-sm leading-relaxed text-ink-600">
                {footnote}
              </p>
            ) : null}
          </div>
        </Container>
      </section>
    </>
  );
}
