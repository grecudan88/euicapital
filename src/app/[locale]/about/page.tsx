import type { Metadata } from "next";
import { ArrowRight, ButtonLink, Container, PageHero, SectionHeading } from "@/components/ui";
import { assertLocale, type Locale } from "@/content/locales";
import { getCopy } from "@/content/pages";
import { href, site, siteCopy } from "@/content/site";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  const t = getCopy(locale).about;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function AboutPage({ params }: { params: Promise<Params> }) {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  const t = getCopy(locale).about;
  const { address } = siteCopy[locale];

  const glance: [string, string][] = [
    [t.glance.founded, String(site.founded)],
    [t.glance.offices, address],
    [t.glance.focus, t.glance.focusValue],
    [t.glance.languages, t.glance.languagesValue],
  ];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede} />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
            <div className="max-w-2xl">
              <SectionHeading eyebrow={t.positionEyebrow} title={t.positionTitle} />
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-700">
                {t.positionIntro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {/* The three refusals are the whole positioning — they get their
                  own line rather than being buried mid-paragraph. */}
              <p className="my-9 border-l-2 border-gold-500 pl-6 font-display text-2xl leading-snug text-ink-950 sm:text-[1.75rem]">
                {t.positionPull}
              </p>

              <div className="space-y-5 text-[17px] leading-relaxed text-ink-700">
                {t.positionOutro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-ink-900/10 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">
                {t.glanceTitle}
              </p>
              <dl className="mt-6 space-y-5 text-sm">
                {glance.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-6 border-b border-ink-900/10 pb-4 last:border-0"
                  >
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
          <SectionHeading eyebrow={t.stanceEyebrow} title={t.stanceTitle} />
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {t.stance.map((paragraph) => (
              <p key={paragraph} className="hairline pt-6 text-[15px] leading-relaxed text-ink-700">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={t.principlesEyebrow}
            title={t.principlesTitle}
            lede={t.principlesLede}
          />
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {t.principles.map((p) => (
              <div key={p.title} className="hairline pt-6">
                <h3 className="font-display text-xl text-ink-950">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-warm py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow={t.teamEyebrow} title={t.teamTitle} lede={t.teamLede} />
          <div className="mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {t.team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-ink-900/10 bg-white p-7">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    className="h-20 w-20 rounded-full object-cover object-top ring-1 ring-ink-900/10"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ink-950">
                    <span className="font-display text-2xl text-gold-400">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                <h3 className="mt-5 font-display text-lg text-ink-950">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold-600">{member.role}</p>
                {/* Rendered only once real copy exists — never show an empty line. */}
                {member.focus ? (
                  <p className="mt-3 text-sm text-ink-600">{member.focus}</p>
                ) : null}
                {member.background ? (
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
                    {member.background}
                  </p>
                ) : null}
              </div>
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
