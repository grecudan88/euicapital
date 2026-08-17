import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getCopy } from "@/content/pages";
import { notFound } from "next/navigation";
import { isLocale, locales, localeTags } from "@/content/locales";
import { site, siteCopy } from "@/content/site";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
});

type Params = { locale: string };

export function generateStaticParams(): Params[] {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const locale = localeParam;
  const copy = siteCopy[locale];

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${copy.tagline}`,
      template: `%s — ${site.name}`,
    },
    description: copy.description,
    keywords:
      locale === "ro"
        ? [
            "consultanta fonduri europene",
            "fonduri nerambursabile IMM",
            "scriere proiecte europene",
            "fonduri nerambursabile",
            "fonduri europene primarii UAT",
            "programe regionale 2021-2027",
          ]
        : [
            "EU funding consultancy",
            "SME grant funding Romania",
            "grant writing",
            "European funds",
            "local authority EU funding",
            "EU grant application",
          ],
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        ro: "/ro/",
        en: "/en/",
        "x-default": "/ro/",
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: `${site.name} — ${copy.tagline}`,
      description: copy.description,
      url: `${site.url}/${locale}/`,
      locale: localeTags[locale].replace("-", "_"),
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { locale: localeParam } = await params;
  // `generateStaticParams` only emits real locales, but the dev server matches
  // any string against [locale] — reject the rest so dev matches production.
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam;
  const copy = getCopy(locale);

  const organisationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    description: siteCopy[locale].description,
    legalName: site.legalName,
    email: site.email,
    telephone: site.phoneHref,
    taxID: site.cui,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fdc. Emil Racoviță 19",
      addressLocality: "Iași",
      addressRegion: "Iași",
      addressCountry: "RO",
    },
    url: `${site.url}/${locale}/`,
    areaServed: "European Union",
    serviceType: locale === "ro" ? "Consultanță fonduri europene" : "EU funding consultancy",
    availableLanguage: ["ro", "en"],
  };

  return (
    <html lang={locale} className={`${inter.variable} ${serif.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          {copy.ui.skipToContent}
        </a>
        <SiteHeader locale={locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={locale} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
