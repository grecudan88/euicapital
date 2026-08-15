import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span aria-hidden className="h-px w-8 bg-gold-500" />
      {children}
    </p>
  );
}

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonProps) {
  const styles = {
    primary:
      "bg-ink-900 text-paper hover:bg-ink-800 focus-visible:outline-ink-900 shadow-sm shadow-ink-900/10",
    secondary:
      "bg-transparent text-ink-900 ring-1 ring-inset ring-ink-900/20 hover:bg-ink-900/5 focus-visible:outline-ink-900",
    ghost:
      "bg-transparent text-paper ring-1 ring-inset ring-paper/30 hover:bg-paper/10 focus-visible:outline-paper",
  }[variant];

  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${styles} ${className}`}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${
        tone === "dark" ? "text-paper" : ""
      }`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl ${
          tone === "dark" ? "text-paper" : "text-ink-950"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p className={`mt-4 text-lg ${tone === "dark" ? "text-ink-200" : "text-ink-700"}`}>{lede}</p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-32 sm:pb-24 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 0%, #b8903f 0%, transparent 45%), radial-gradient(circle at 85% 100%, #2f5372 0%, transparent 50%)",
        }}
      />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-200">{lede}</p>
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}

export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border border-ink-900/10 bg-white p-7 transition hover:border-gold-400/60 hover:shadow-lg hover:shadow-ink-900/5 ${className}`}
    >
      {children}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-paper-warm px-3 py-1 text-xs font-medium tracking-wide text-ink-700">
      {children}
    </span>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 ${className}`}
      strokeWidth={1.75}
      stroke="currentColor"
    >
      <path d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
