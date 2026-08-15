import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { ProgrammeExplorer } from "@/components/programme-explorer";
import { assertLocale, type Locale } from "@/content/locales";
import { getCopy } from "@/content/pages";

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
