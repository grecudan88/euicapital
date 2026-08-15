import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
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
  const t = getCopy(locale).legal;
  return {
    title: t.termsTitle,
    description: t.termsMeta,
    robots: { index: false, follow: true },
  };
}

export default async function TermsPage({ params }: { params: Promise<Params> }) {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  const t = getCopy(locale).legal;

  return (
    <LegalPage
      eyebrow={t.eyebrow}
      title={t.termsTitle}
      lede={t.termsLede}
      sections={t.termsSections}
      footnote={t.termsFootnote}
    />
  );
}
