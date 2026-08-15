import type { Metadata } from "next";
import { ArrowRight, ButtonLink, Container, PageHero } from "@/components/ui";
import { assertLocale, type Locale } from "@/content/locales";
import { getCopy } from "@/content/pages";
import { getServices } from "@/content/services";
import { href } from "@/content/site";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  const t = getCopy(locale).services;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function ServicesPage({ params }: { params: Promise<Params> }) {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  const t = getCopy(locale).services;
  const services = getServices(locale);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede} />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="space-y-20">
            {services.map((service, index) => (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]"
              >
                <div>
                  <p className="font-display text-sm text-gold-600">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-3xl leading-tight text-ink-950">
                    {service.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-700">
                    {service.summary}
                  </p>
                  <p className="mt-5 max-w-xl border-l-2 border-gold-400 pl-5 text-[15px] font-medium text-ink-900">
                    {service.outcome}
                  </p>
                </div>

                <div className="rounded-2xl border border-ink-900/10 bg-white p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">
                    {t.deliverablesLabel}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 text-[15px] leading-relaxed text-ink-700">
                        <svg
                          aria-hidden
                          viewBox="0 0 16 16"
                          className="mt-1 h-4 w-4 shrink-0 text-gold-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                        >
                          <path
                            d="M3 8.5l3.2 3.2L13 5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-ink-900/10 pt-4 text-sm text-ink-600">
                    <span className="font-semibold text-ink-900">{t.durationLabel}</span>{" "}
                    {service.timeline}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-warm py-20">
        <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl text-ink-950 sm:text-3xl">{t.closingTitle}</h2>
            <p className="mt-3 text-ink-700">{t.closingLede}</p>
          </div>
          <ButtonLink href={href(locale, "contact")}>
            {t.closingCta}
            <ArrowRight />
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
