import { ArrowRight, ButtonLink, Container, Eyebrow } from "@/components/ui";
import type { Locale } from "@/content/locales";
import { getCopy } from "@/content/pages";
import { href } from "@/content/site";

export function NotFoundContent({ locale }: { locale: Locale }) {
  const t = getCopy(locale).notFound;

  return (
    <section className="bg-ink-950 py-40">
      <Container>
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-paper sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-200">{t.lede}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={href(locale)} className="bg-gold-500 text-ink-950 hover:bg-gold-400">
            {t.ctaHome}
            <ArrowRight />
          </ButtonLink>
          <ButtonLink href={href(locale, "programmes")} variant="ghost">
            {t.ctaProgrammes}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
