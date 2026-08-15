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
    title: t.privacyTitle,
    description: t.privacyMeta,
    robots: { index: false, follow: true },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<Params> }) {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  const t = getCopy(locale).legal;

  return (
    <LegalPage
      eyebrow={t.eyebrow}
      title={t.privacyTitle}
      lede={t.privacyLede}
      sections={t.privacySections}
      footnote={t.privacyFootnote}
    />
  );
}
