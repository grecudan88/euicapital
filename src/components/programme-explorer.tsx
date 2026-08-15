"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, programmes } from "@/content/programmes";
import { ArrowRight, Tag } from "./ui";

type Management = "all" | "direct" | "shared";

export function ProgrammeExplorer() {
  const [category, setCategory] = useState<string>("all");
  const [management, setManagement] = useState<Management>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programmes.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (management === "direct" && !p.managedBy.startsWith("Direct")) return false;
      if (management === "shared" && !p.managedBy.startsWith("Shared")) return false;
      if (!q) return true;
      return `${p.name} ${p.acronym} ${p.summary} ${p.bestFor.join(" ")}`.toLowerCase().includes(q);
    });
  }, [category, management, query]);

  return (
    <div>
      <div className="rounded-2xl border border-ink-900/10 bg-white p-5 sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto]">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-600">
              Search
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. hydrogen, training, SME investment"
              className="mt-2 w-full rounded-lg border border-ink-900/15 bg-paper px-4 py-2.5 text-[15px] text-ink-900 outline-none placeholder:text-ink-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
            />
          </label>

          <fieldset>
            <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-600">
              Management mode
            </legend>
            <div className="mt-2 inline-flex rounded-lg border border-ink-900/15 p-1">
              {(
                [
                  ["all", "All"],
                  ["direct", "Direct"],
                  ["shared", "Shared"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={management === value}
                  onClick={() => setManagement(value)}
                  className={`rounded-md px-4 py-1.5 text-sm font-medium transition ${
                    management === value
                      ? "bg-ink-900 text-paper"
                      : "text-ink-600 hover:text-ink-900"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-900/10 pt-5">
          {["all", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                category === c
                  ? "bg-gold-500 text-ink-950"
                  : "bg-paper-warm text-ink-700 hover:bg-ink-900/10"
              }`}
            >
              {c === "all" ? "All themes" : c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-ink-600" role="status" aria-live="polite">
        Showing {filtered.length} of {programmes.length} programmes
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-ink-900/20 p-12 text-center">
          <p className="font-display text-xl text-ink-950">No programme matches those filters</p>
          <p className="mt-2 text-ink-600">
            Try a broader search, or{" "}
            <Link href="/contact/" className="font-medium text-gold-600 underline">
              ask us directly
            </Link>{" "}
            — national and regional schemes are not all listed here.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/programmes/${p.slug}/`}
              className="group flex flex-col rounded-2xl border border-ink-900/10 bg-white p-7 transition hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-xs font-semibold tracking-wider text-gold-600">
                  {p.acronym}
                </span>
                <Tag>{p.category}</Tag>
              </div>
              <h3 className="mt-4 font-display text-xl leading-snug text-ink-950">{p.name}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">{p.summary}</p>

              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-ink-900/10 pt-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-[0.1em] text-ink-400">Budget</dt>
                  <dd className="mt-1 font-medium text-ink-900">{p.budget}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.1em] text-ink-400">Co-funding</dt>
                  <dd className="mt-1 font-medium text-ink-900">{p.coFunding}</dd>
                </div>
              </dl>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
                Programme detail
                <ArrowRight className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
