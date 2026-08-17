import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { ProgrammeExplorer } from "@/components/programme-explorer";
import { assertLocale, type Locale } from "@/content/locales";
import { getCopy } from "@/content/pages";
import { callSnapshot } from "@/content/programmes";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  const t = getCopy(locale).programmes;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function ProgrammesPage({ params }: { params: Promise<Params> }) {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  const t = getCopy(locale).programmes;

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede} />

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          {/* Dated snapshot: the only time-sensitive figure on the site.
              Refresh it from the official calendar, do not let it rot. */}
          <div className="mb-10 rounded-2xl border border-gold-400/60 bg-white p-6 sm:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-xl text-ink-950">{t.snapshotTitle}</h2>
              <a
                href={callSnapshot.source}
                rel="noopener noreferrer"
                target="_blank"
                className="text-sm font-medium text-gold-600 underline underline-offset-4"
              >
                {t.snapshotLink}
              </a>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-800">
              {t.snapshotBody(
                callSnapshot.openForImmUat,
                callSnapshot.openTotal,
                formatDate(callSnapshot.verifiedOn, locale),
              )}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{t.snapshotNote}</p>
          </div>

          <ProgrammeExplorer locale={locale} />

          <aside className="mt-16 rounded-2xl border border-ink-900/10 bg-paper-warm p-8">
            <h2 className="font-display text-xl text-ink-950">{t.asideTitle}</h2>
            <div className="mt-4 grid gap-6 text-[15px] leading-relaxed text-ink-700 sm:grid-cols-2">
              <p>{t.asideDirect}</p>
              <p>{t.asideShared}</p>
            </div>
            <p className="mt-6 border-t border-ink-900/10 pt-5 text-sm text-ink-600">
              {t.asideNote}
            </p>
          </aside>
        </Container>
      </section>
    </>
  );
}

function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(locale === "ro" ? "ro-RO" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
