import type { Metadata } from "next";
import { ArrowRight, ButtonLink, Container, PageHero, Tag } from "@/components/ui";
import { assertLocale, type Locale } from "@/content/locales";
import { getCopy } from "@/content/pages";
import { getCaseStudies } from "@/content/results";
import { href, siteCopy } from "@/content/site";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  const t = getCopy(locale).results;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function ResultsPage({ params }: { params: Promise<Params> }) {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  const t = getCopy(locale).results;
  const caseStudies = getCaseStudies(locale);
  const { stats } = siteCopy[locale];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede} />

      {/* PLACEHOLDER BANNER — delete this block once src/content/results.ts holds real engagements. */}
      <div className="bg-gold-200/60">
        <Container className="py-4">
          <p className="text-sm text-ink-800">
            <strong className="font-semibold">{t.placeholderStrong}</strong> {t.placeholderBody}{" "}
            <code className="rounded bg-white/70 px-1.5 py-0.5 font-mono text-[13px]">
              src/content/results.ts
            </code>{" "}
            {t.placeholderEnd}
          </p>
        </Container>
      </div>

      <section className="border-b border-ink-900/10 bg-white">
        <Container>
          <dl className="grid max-w-2xl grid-cols-1 gap-8 py-12 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl text-ink-950 sm:text-4xl">{stat.value}</dt>
                <dd className="mt-2 text-sm leading-snug text-ink-600">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="space-y-6">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="grid gap-8 rounded-2xl border border-ink-900/10 bg-white p-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]"
              >
                <div>
                  <p className="font-display text-4xl text-gold-600">{study.amount}</p>
                  <h2 className="mt-4 font-display text-xl leading-snug text-ink-950">
                    {study.client}
                  </h2>
                  <p className="mt-2 text-sm text-ink-600">{study.programme}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Tag>{study.sector}</Tag>
                    <Tag>{study.year}</Tag>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                      {t.situation}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                      {t.whatWeDid}
                    </h3>
                    <ul className="mt-2 space-y-2">
                      {study.approach.map((a) => (
                        <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-ink-700">
                          <span
                            aria-hidden
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500"
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="border-l-2 border-gold-400 pl-5 text-[15px] font-medium text-ink-900">
                    {study.result}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-ink-900 p-10 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl text-paper">{t.ctaTitle}</h2>
              <p className="mt-2 text-ink-200">{t.ctaLede}</p>
            </div>
            <ButtonLink
              href={href(locale, "contact")}
              className="bg-gold-500 text-ink-950 hover:bg-gold-400"
            >
              {t.ctaLabel}
              <ArrowRight />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
