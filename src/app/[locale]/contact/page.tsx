import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
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
  const t = getCopy(locale).contact;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function ContactPage({ params }: { params: Promise<Params> }) {
  const { locale: localeParam } = await params;
  const locale = assertLocale(localeParam);
  const t = getCopy(locale).contact;
  const { address } = siteCopy[locale];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede} />

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
            <ContactForm locale={locale} />

            <aside className="space-y-6">
              <div className="rounded-2xl border border-ink-900/10 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">
                  {t.directTitle}
                </p>
                <dl className="mt-5 space-y-4 text-[15px]">
                  <div>
                    <dt className="text-sm text-ink-600">{t.emailLabel}</dt>
                    <dd>
                      <a
                        href={`mailto:${site.email}`}
                        className="font-medium text-ink-900 underline decoration-gold-400 underline-offset-4"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink-600">{t.phoneLabel}</dt>
                    <dd>
                      <a
                        href={`tel:${site.phoneHref}`}
                        className="font-medium text-ink-900 underline decoration-gold-400 underline-offset-4"
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink-600">{t.contactPersonLabel}</dt>
                    <dd className="font-medium text-ink-900">{site.contactPerson}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink-600">{t.officesLabel}</dt>
                    <dd className="font-medium text-ink-900">{address}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink-600">{t.responseLabel}</dt>
                    <dd className="font-medium text-ink-900">{t.responseValue}</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl bg-ink-900 p-7 text-paper">
                <p className="font-display text-lg">{t.deadlineTitle}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-200">{t.deadlineBody}</p>
              </div>

              <p className="px-1 text-xs leading-relaxed text-ink-600">
                {t.privacyNote}{" "}
                <Link href={href(locale, "legal/privacy")} className="underline">
                  {t.privacyLink}
                </Link>
                .
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-paper-warm py-20">
        <Container>
          <h2 className="font-display text-2xl text-ink-950 sm:text-3xl">{t.faqTitle}</h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {t.faqs.map((faq) => (
              <div key={faq.q} className="hairline pt-6">
                <dt className="font-display text-lg text-ink-950">{faq.q}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink-700">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
