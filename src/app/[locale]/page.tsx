import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ButtonLink,
  Card,
  Container,
  Eyebrow,
  SectionHeading,
  Tag,
} from "@/components/ui";
import { assertLocale, type Locale } from "@/content/locales";
import { getCopy } from "@/content/pages";
import { getServices } from "@/content/services";
import { categoryLabels, getProgrammes } from "@/content/programmes";
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
  return { description: siteCopy[locale].description };
}

export default async function HomePage({ params }: { params: Promise<Params> }) {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);

  return (
    <>
      <Hero locale={locale} />
      <Problem locale={locale} />
      <Services locale={locale} />
      <Programmes locale={locale} />
      <Process locale={locale} />
      <Results locale={locale} />
      <ClosingCta locale={locale} />
    </>
  );
}

function Hero({ locale }: { locale: Locale }) {
  const t = getCopy(locale).home;
  const { stats } = siteCopy[locale];

  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 12% 10%, #b8903f 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 90% 90%, #2f5372 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fbfaf7 1px, transparent 1px), linear-gradient(90deg, #fbfaf7 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <Container className="relative pb-24 pt-36 sm:pb-32 sm:pt-44">
        <div className="max-w-3xl">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            {t.titleLine1}
            <br />
            <span className="text-gold-400">{t.titleLine2}</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-200">{t.lede}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink
              href={href(locale, "contact")}
              className="bg-gold-500 text-ink-950 hover:bg-gold-400"
            >
              {t.ctaPrimary}
              <ArrowRight />
            </ButtonLink>
            <ButtonLink href={href(locale, "programmes")} variant="ghost">
              {t.ctaSecondary}
            </ButtonLink>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container>
          <dl className="grid max-w-2xl grid-cols-1 gap-px sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 py-8 lg:px-6">
                <dt className="font-display text-3xl text-gold-400 sm:text-4xl">{stat.value}</dt>
                <dd className="mt-2 text-sm leading-snug text-ink-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}

function Problem({ locale }: { locale: Locale }) {
  const t = getCopy(locale).home;

  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t.problemEyebrow} title={t.problemTitle} lede={t.problemLede} />
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {t.frictions.map((item, i) => (
            <div key={item.title} className="hairline pt-6">
              <span className="font-display text-sm text-gold-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl text-ink-950">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Services({ locale }: { locale: Locale }) {
  const t = getCopy(locale);
  const services = getServices(locale);

  return (
    <section className="bg-paper-warm py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={t.home.servicesEyebrow}
            title={t.home.servicesTitle}
            lede={t.home.servicesLede}
          />
          <Link
            href={href(locale, "services")}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-900"
          >
            {t.ui.allServices}
            <ArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="flex flex-col">
              <h3 className="font-display text-xl text-ink-950">{service.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">
                {service.summary}
              </p>
              <p className="mt-5 border-t border-ink-900/10 pt-4 text-sm font-medium text-gold-600">
                {service.outcome}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Programmes({ locale }: { locale: Locale }) {
  const t = getCopy(locale).home;
  const programmes = getProgrammes(locale);
  const labels = categoryLabels[locale];

  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={t.programmesEyebrow}
          title={t.programmesTitle}
          lede={t.programmesLede}
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <Link
              key={p.slug}
              href={href(locale, `programmes/${p.slug}`)}
              className="group flex flex-col justify-between rounded-2xl border border-ink-900/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xs font-semibold tracking-wider text-gold-600">
                    {p.acronym}
                  </span>
                  <Tag>{labels[p.category]}</Tag>
                </div>
                <h3 className="mt-4 font-display text-lg leading-snug text-ink-950">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.summary}</p>
              </div>
              <p className="mt-5 flex items-center justify-between border-t border-ink-900/10 pt-4 text-sm">
                <span className="font-medium text-ink-900">{p.budget}</span>
                <ArrowRight className="text-ink-400 transition group-hover:translate-x-1 group-hover:text-gold-600" />
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process({ locale }: { locale: Locale }) {
  const t = getCopy(locale).home;

  return (
    <section className="bg-ink-950 py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,26rem)_1fr]">
          <div>
            <SectionHeading
              eyebrow={t.processEyebrow}
              tone="dark"
              title={t.processTitle}
              lede={t.processLede}
            />
            <div className="mt-8">
              <ButtonLink href={href(locale, "process")} variant="ghost">
                {t.processCta}
                <ArrowRight />
              </ButtonLink>
            </div>
          </div>

          <ol className="relative space-y-10 border-l border-white/15 pl-8">
            {t.steps.map((step) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.3rem] top-1.5 h-3 w-3 rounded-full border-2 border-gold-400 bg-ink-950"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
                  {step.label}
                </p>
                <h3 className="mt-2 font-display text-xl text-paper">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-400">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function Results({ locale }: { locale: Locale }) {
  const t = getCopy(locale);
  const caseStudies = getCaseStudies(locale);

  return (
    <section className="bg-paper-warm py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={t.home.resultsEyebrow} title={t.home.resultsTitle} />
          <Link
            href={href(locale, "results")}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-900"
          >
            {t.ui.allResults}
            <ArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((c) => (
            <Card key={c.slug} className="flex flex-col">
              <p className="font-display text-3xl text-gold-600">{c.amount}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ink-400">{c.programme}</p>
              <h3 className="mt-4 font-display text-lg text-ink-950">{c.client}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">{c.result}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ClosingCta({ locale }: { locale: Locale }) {
  const t = getCopy(locale).home;

  return (
    <section className="bg-paper py-24 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-16 sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(ellipse at 100% 0%, #b8903f 0%, transparent 55%)",
            }}
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl leading-tight text-paper sm:text-4xl">
              {t.ctaTitle}
            </h2>
            <p className="mt-4 text-lg text-ink-200">{t.ctaLede}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink
                href={href(locale, "contact")}
                className="bg-gold-500 text-ink-950 hover:bg-gold-400"
              >
                {t.ctaPrimaryLabel}
                <ArrowRight />
              </ButtonLink>
              <ButtonLink href={href(locale, "results")} variant="ghost">
                {t.ctaSecondaryLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
