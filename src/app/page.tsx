import Link from "next/link";
import { ArrowRight, ButtonLink, Card, Container, Eyebrow, SectionHeading, Tag } from "@/components/ui";
import { services } from "@/content/services";
import { programmes } from "@/content/programmes";
import { caseStudies } from "@/content/results";
import { site, stats } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <Programmes />
      <Process />
      <Results />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 12% 10%, #b8903f 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 90% 90%, #2f5372 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fbfaf7 1px, transparent 1px), linear-gradient(90deg, #fbfaf7 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <Container className="relative pb-24 pt-36 sm:pb-32 sm:pt-44">
        <div className="max-w-3xl">
          <Eyebrow>Independent EU funding consultancy</Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            Europe has the money.
            <br />
            <span className="text-gold-400">We help you win it.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-200">
            Over a trillion euros moves through EU programmes each budget cycle. Most of it goes to
            organisations that understood the rules early. {site.name} finds the right instrument
            for your project, writes the application, and manages the grant once you win it.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact/" variant="primary" className="bg-gold-500 text-ink-950 hover:bg-gold-400">
              Book a free eligibility call
              <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/programmes/" variant="ghost">
              Explore the programmes
            </ButtonLink>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container>
          <dl className="grid grid-cols-2 gap-px lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 py-8 lg:px-6">
                <dt className="font-display text-3xl text-gold-400 sm:text-4xl">{stat.value}</dt>
                <dd className="mt-2 text-sm leading-snug text-ink-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}

const frictions = [
  {
    title: "The call finds you too late",
    body: "By the time a relevant call is public knowledge, the well-prepared applicants have been drafting for months. Positioning starts before publication.",
  },
  {
    title: "Eligibility is decided on details",
    body: "Entity type, region, TRL, aid intensity, partner geography. A single mismatch removes an otherwise excellent project from consideration.",
  },
  {
    title: "Evaluators score, they do not read",
    body: "Applications are marked against a published grid. Text that does not map to a criterion earns nothing, however well written it is.",
  },
  {
    title: "Winning is the start of the obligation",
    body: "Reporting, timesheets, procurement rules and audit trails decide whether the money stays yours. Most clawbacks are administrative.",
  },
];

function Problem() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why applications fail"
          title="Four reasons good projects never get funded"
          lede="None of them are about the quality of the idea. Each one is solvable with preparation."
        />
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {frictions.map((item, i) => (
            <div key={item.title} className="hairline pt-6">
              <span className="font-display text-sm text-gold-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl text-ink-950">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-paper-warm py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we do"
            title="End to end, or exactly the part you need"
            lede="Most clients start with a strategy sprint and stay with us through delivery. Some bring us in eight weeks before a deadline. Both work."
          />
          <Link
            href="/services/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-900"
          >
            All services
            <ArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="flex flex-col">
              <h3 className="font-display text-xl text-ink-950">{service.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">
                {service.summary}
              </p>
              <p className="mt-5 border-t border-ink-900/10 pt-4 text-sm font-medium text-gold-600">
                {service.outcome}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Programmes() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Instruments we work with"
          title="Nine major routes to European funding"
          lede="Direct grants from Brussels, shared-management money from your region, and the large infrastructure instruments in between."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <Link
              key={p.slug}
              href={`/programmes/${p.slug}/`}
              className="group flex flex-col justify-between rounded-2xl border border-ink-900/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xs font-semibold tracking-wider text-gold-600">
                    {p.acronym}
                  </span>
                  <Tag>{p.category}</Tag>
                </div>
                <h3 className="mt-4 font-display text-lg leading-snug text-ink-950">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.summary}</p>
              </div>
              <p className="mt-5 flex items-center justify-between border-t border-ink-900/10 pt-4 text-sm">
                <span className="font-medium text-ink-900">{p.budget}</span>
                <ArrowRight className="text-ink-400 transition group-hover:translate-x-1 group-hover:text-gold-600" />
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

const steps = [
  {
    label: "Week 1",
    title: "Eligibility call",
    body: "Forty-five minutes on your project, your entity and your timeline. You leave knowing whether EU funding is realistic and which instruments fit.",
  },
  {
    label: "Weeks 2–3",
    title: "Funding map",
    body: "A ranked shortlist of calls with deadlines, co-financing rates, eligibility notes and an honest probability estimate for each.",
  },
  {
    label: "Weeks 4–12",
    title: "Build and submit",
    body: "We write the proposal, assemble the consortium if one is needed, build the budget, and run two review rounds against the scoring grid.",
  },
  {
    label: "After award",
    title: "Deliver and report",
    body: "Grant agreement, periodic reporting, amendments and audit readiness for the life of the project.",
  },
];

function Process() {
  return (
    <section className="bg-ink-950 py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,26rem)_1fr]">
          <div>
            <SectionHeading
              eyebrow="How we work"
              tone="dark"
              title="A process built around deadlines you cannot move"
              lede="EU calls close at a fixed hour. Everything we do is scheduled backwards from that moment."
            />
            <div className="mt-8">
              <ButtonLink href="/process/" variant="ghost">
                See the full method
                <ArrowRight />
              </ButtonLink>
            </div>
          </div>

          <ol className="relative space-y-10 border-l border-white/15 pl-8">
            {steps.map((step) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.3rem] top-1.5 h-3 w-3 rounded-full border-2 border-gold-400 bg-ink-950"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
                  {step.label}
                </p>
                <h3 className="mt-2 font-display text-xl text-paper">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-400">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function Results() {
  return (
    <section className="bg-paper-warm py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected engagements"
            title="What the work looks like in practice"
          />
          <Link
            href="/results/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-900"
          >
            All results
            <ArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((c) => (
            <Card key={c.slug} className="flex flex-col">
              <p className="font-display text-3xl text-gold-600">{c.amount}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ink-400">{c.programme}</p>
              <h3 className="mt-4 font-display text-lg text-ink-950">{c.client}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">{c.result}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-16 sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 100% 0%, #b8903f 0%, transparent 55%)",
            }}
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl leading-tight text-paper sm:text-4xl">
              Tell us about your project. We will tell you whether it is fundable.
            </h2>
            <p className="mt-4 text-lg text-ink-200">
              No obligation, no pitch deck required. If there is no realistic route, we will say so
              on the first call.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink
                href="/contact/"
                className="bg-gold-500 text-ink-950 hover:bg-gold-400"
              >
                Start a conversation
                <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/results/" variant="ghost">
                Read the case studies
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
