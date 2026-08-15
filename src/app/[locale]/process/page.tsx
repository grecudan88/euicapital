import type { Metadata } from "next";
import { ArrowRight, ButtonLink, Container, PageHero, SectionHeading } from "@/components/ui";
import { assertLocale, type Locale } from "@/content/locales";
import { getCopy } from "@/content/pages";
import { href } from "@/content/site";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  const t = getCopy(locale).process;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function ProcessPage({ params }: { params: Promise<Params> }) {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  const t = getCopy(locale).process;

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede} />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="space-y-16">
            {t.phases.map((phase) => (
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
                      <span
                        aria-hidden
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500"
                      />
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
            eyebrow={t.pricingEyebrow}
            title={t.pricingTitle}
            lede={t.pricingLede}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.pricing.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <h3 className="font-display text-lg text-paper">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-400">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-400">{t.pricingNote}</p>
          <div className="mt-10">
            <ButtonLink
              href={href(locale, "contact")}
              className="bg-gold-500 text-ink-950 hover:bg-gold-400"
            >
              {t.pricingCta}
              <ArrowRight />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
