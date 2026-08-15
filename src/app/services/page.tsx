import type { Metadata } from "next";
import { ArrowRight, ButtonLink, Container, PageHero } from "@/components/ui";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Funding strategy, proposal writing, consortium building, grant management, audit support and resubmission for EU funding applicants.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six ways we get involved"
        lede="Engage us for the whole cycle or for the single stage where your team runs out of capacity. Each engagement has a defined scope, a fixed fee and a named lead."
      />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="space-y-20">
            {services.map((service, index) => (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]"
              >
                <div>
                  <p className="font-display text-sm text-gold-600">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-3xl leading-tight text-ink-950">
                    {service.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-700">
                    {service.summary}
                  </p>
                  <p className="mt-5 max-w-xl border-l-2 border-gold-400 pl-5 text-[15px] font-medium text-ink-900">
                    {service.outcome}
                  </p>
                </div>

                <div className="rounded-2xl border border-ink-900/10 bg-white p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">
                    What you receive
                  </p>
                  <ul className="mt-5 space-y-3">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 text-[15px] leading-relaxed text-ink-700">
                        <svg
                          aria-hidden
                          viewBox="0 0 16 16"
                          className="mt-1 h-4 w-4 shrink-0 text-gold-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                        >
                          <path d="M3 8.5l3.2 3.2L13 5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-ink-900/10 pt-4 text-sm text-ink-600">
                    <span className="font-semibold text-ink-900">Typical duration:</span>{" "}
                    {service.timeline}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-warm py-20">
        <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl text-ink-950 sm:text-3xl">
              Not sure which one you need?
            </h2>
            <p className="mt-3 text-ink-700">
              Describe the project in a few lines. We will come back with the stage we would start
              at and what it would cost.
            </p>
          </div>
          <ButtonLink href="/contact/">
            Get in touch
            <ArrowRight />
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
