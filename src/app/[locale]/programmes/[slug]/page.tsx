import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ButtonLink, Container, Eyebrow, Tag } from "@/components/ui";
import {
  audienceLabels,
  categoryLabels,
  getProgramme,
  getProgrammes,
  programmeSlugs,
  statusLabels,
} from "@/content/programmes";
import { locales, type Locale, assertLocale } from "@/content/locales";
import { getCopy } from "@/content/pages";
import { href } from "@/content/site";

type Params = { locale: string; slug: string };

export function generateStaticParams(): Params[] {
  return locales.flatMap((locale) => programmeSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = assertLocale(localeParam);
  const programme = getProgramme(locale, slug);
  if (!programme) return { title: "404" };

  return {
    title: programme.name,
    description: programme.summary,
    alternates: {
      canonical: href(locale, `programmes/${slug}`),
      languages: {
        ro: href("ro", `programmes/${slug}`),
        en: href("en", `programmes/${slug}`),
        "x-default": href("ro", `programmes/${slug}`),
      },
    },
    openGraph: { title: programme.name, description: programme.summary },
  };
}

export default async function ProgrammePage({ params }: { params: Promise<Params> }) {
  const { locale: localeParam, slug } = await params;
  const locale = assertLocale(localeParam);
  const programme = getProgramme(locale, slug);
  if (!programme) notFound();

  const t = getCopy(locale).programmes;
  const labels = categoryLabels[locale];
  const categoryLabel = labels[programme.category];

  const related = getProgrammes(locale).filter(
    (p) => p.slug !== programme.slug && p.category === programme.category,
  );

  const who = audienceLabels[locale];
  const facts = [
    { label: t.factAuthority, value: programme.authority },
    { label: t.factApplicants, value: programme.whoApplies },
    { label: t.factCoFunding, value: programme.coFunding },
    // Only the Modernisation Fund schemes publish a headline allocation.
    ...(programme.budget ? [{ label: t.factBudget, value: programme.budget }] : []),
    { label: t.factAudience, value: programme.audience.map((a) => who[a]).join(" · ") },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 10% 0%, #b8903f 0%, transparent 55%), radial-gradient(ellipse at 90% 100%, #2f5372 0%, transparent 55%)",
          }}
        />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-400">
            <Link href={href(locale, "programmes")} className="hover:text-paper">
              {t.eyebrow}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink-200">{programme.acronym}</span>
          </nav>

          <Eyebrow>{categoryLabel}</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight tracking-tight text-paper sm:text-5xl">
            {programme.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200">{programme.summary}</p>
          {programme.status ? (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400/50 bg-white/5 px-4 py-1.5 text-sm font-medium text-gold-400">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              {statusLabels[locale][programme.status]}
            </p>
          ) : null}
        </Container>
      </section>

      <section className="border-b border-ink-900/10 bg-white">
        <Container>
          <dl className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-400">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-display text-lg leading-snug text-ink-950">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]">
            <div>
              <h2 className="font-display text-2xl text-ink-950">{t.howItWorks}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">{programme.detail}</p>

              <div className="mt-10 rounded-2xl border-l-4 border-gold-500 bg-white p-7 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">
                  {t.whereApplicantsLose}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-800">{programme.watchOut}</p>
              </div>

              {programme.status === "upcoming" ? (
                <div className="mt-10 rounded-2xl bg-paper-warm p-7">
                  <p className="text-[15px] leading-relaxed text-ink-800">{t.upcomingNote}</p>
                </div>
              ) : null}

              <h2 className="mt-14 font-display text-2xl text-ink-950">{t.bestSuited}</h2>
              <ul className="mt-6 space-y-4">
                {programme.bestFor.map((item) => (
                  <li key={item} className="flex gap-4 text-[15px] leading-relaxed text-ink-700">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl bg-ink-900 p-7 text-paper">
                <h2 className="font-display text-xl">{t.sidebarTitle(programme.acronym)}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-200">{t.sidebarBody}</p>
                <ButtonLink
                  href={href(locale, "contact")}
                  className="mt-6 w-full bg-gold-500 text-ink-950 hover:bg-gold-400"
                >
                  {t.sidebarCta}
                  <ArrowRight />
                </ButtonLink>
              </div>

              {related.length > 0 ? (
                <div className="mt-6 rounded-2xl border border-ink-900/10 bg-white p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                    {t.alsoIn(categoryLabel)}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {related.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={href(locale, `programmes/${p.slug}`)}
                          className="group flex items-center justify-between gap-3 text-[15px] font-medium text-ink-800 hover:text-gold-600"
                        >
                          {p.name}
                          <ArrowRight className="shrink-0 text-ink-400 transition group-hover:translate-x-1 group-hover:text-gold-600" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>{categoryLabel}</Tag>
                {programme.audience.map((a) => (
                  <Tag key={a}>{who[a]}</Tag>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
