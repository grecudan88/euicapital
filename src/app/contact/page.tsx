import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free eligibility call with an EU funding consultant. Tell us about your project and we will tell you whether it is fundable.",
};

const faqs = [
  {
    q: "What happens after I send this?",
    a: "A senior consultant reads it and replies within one working day, normally with a first view on the instruments that fit and a proposed time for a call.",
  },
  {
    q: "Is the first call really free?",
    a: "Yes. Forty-five minutes, no obligation. We would rather spend it establishing whether there is a realistic route than sell you a study you do not need.",
  },
  {
    q: "Can you guarantee we get funded?",
    a: "No, and nobody can. Evaluation is competitive and independent. What we influence is fit, argument quality and delivery discipline — which is where most of the difference is made.",
  },
  {
    q: "Do you work outside the EU?",
    a: "We work with entities established in EU Member States and in countries associated to the relevant programme. Association status varies by programme, so ask us about your case.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with a free eligibility call"
        lede="Describe the project in a few lines. If EU funding is not the right route for it, we will tell you that first — and point you at what is."
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
            <ContactForm />

            <aside className="space-y-6">
              <div className="rounded-2xl border border-ink-900/10 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">
                  Direct
                </p>
                <dl className="mt-5 space-y-4 text-[15px]">
                  <div>
                    <dt className="text-sm text-ink-600">Email</dt>
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
                    <dt className="text-sm text-ink-600">Telephone</dt>
                    <dd className="font-medium text-ink-900">{site.phone}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink-600">Offices</dt>
                    <dd className="font-medium text-ink-900">{site.address}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink-600">Response time</dt>
                    <dd className="font-medium text-ink-900">One working day</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl bg-ink-900 p-7 text-paper">
                <p className="font-display text-lg">Working to a deadline?</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-200">
                  Put the closing date in your message. If a call shuts in under six weeks we
                  prioritise the reply — and tell you honestly whether it can still be done well.
                </p>
              </div>

              <p className="px-1 text-xs leading-relaxed text-ink-600">
                By sending this form you agree to us processing your details to respond to your
                enquiry, as described in our{" "}
                <Link href="/legal/privacy/" className="underline">
                  privacy notice
                </Link>
                .
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-paper-warm py-20">
        <Container>
          <h2 className="font-display text-2xl text-ink-950 sm:text-3xl">Before you write</h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {faqs.map((faq) => (
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
