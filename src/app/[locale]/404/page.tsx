import type { Metadata } from "next";
import { NotFoundContent } from "@/components/not-found-content";
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
  return { title: getCopy(locale).notFound.eyebrow, robots: { index: false, follow: false } };
}

export default async function NotFoundPage({ params }: { params: Promise<Params> }) {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  return <NotFoundContent locale={locale} />;
}
