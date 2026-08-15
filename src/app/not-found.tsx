import { ArrowRight, ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-ink-950 py-40">
      <Container>
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-paper sm:text-5xl">
          This page is not in the current work programme
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-200">
          The address you followed does not exist, or the page has moved. The programme index is a
          good place to pick the thread back up.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/" className="bg-gold-500 text-ink-950 hover:bg-gold-400">
            Back to the homepage
            <ArrowRight />
          </ButtonLink>
          <ButtonLink href="/programmes/" variant="ghost">
            Browse programmes
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
