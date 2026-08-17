"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  audienceKeys,
  audienceLabels,
  categoryKeys,
  categoryLabels,
  getProgrammes,
  statusLabels,
  type Audience,
  type CategoryKey,
} from "@/content/programmes";
import type { Locale } from "@/content/locales";
import { getCopy } from "@/content/pages";
import { href } from "@/content/site";
import { ArrowRight, Tag } from "./ui";

type AudienceFilter = "all" | Audience;

export function ProgrammeExplorer({ locale }: { locale: Locale }) {
  const [category, setCategory] = useState<CategoryKey | "all">("all");
  const [audience, setAudience] = useState<AudienceFilter>("all");
  const [query, setQuery] = useState("");

  const t = getCopy(locale).programmes;
  const labels = categoryLabels[locale];
  const who = audienceLabels[locale];
  const statusText = statusLabels[locale];
  const programmes = useMemo(() => getProgrammes(locale), [locale]);

  const filtered = useMemo(() => {
    const q = normalise(query);
    return programmes.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (audience !== "all" && !p.audience.includes(audience)) return false;
      if (!q) return true;
      const haystack = `${p.name} ${p.acronym} ${p.summary} ${p.whoApplies} ${p.bestFor.join(" ")}`;
      return normalise(haystack).includes(q);
    });
  }, [programmes, category, audience, query]);

  const audienceOptions: [AudienceFilter, string][] = [
    ["all", t.audienceAll],
    ...audienceKeys.map((k) => [k, who[k]] as [AudienceFilter, string]),
  ];

  return (
    <div>
      <div className="rounded-2xl border border-ink-900/10 bg-white p-5 sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto]">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-600">
              {t.searchLabel}
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="mt-2 w-full rounded-lg border border-ink-900/15 bg-paper px-4 py-2.5 text-[15px] text-ink-900 outline-none placeholder:text-ink-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
            />
          </label>

          <fieldset>
            <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-600">
              {t.audienceLabel}
            </legend>
            <div className="mt-2 inline-flex rounded-lg border border-ink-900/15 p-1">
              {audienceOptions.map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={audience === value}
                  onClick={() => setAudience(value)}
                  className={`rounded-md px-4 py-1.5 text-sm font-medium transition ${
                    audience === value ? "bg-ink-900 text-paper" : "text-ink-600 hover:text-ink-900"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-900/10 pt-5">
          {(["all", ...categoryKeys] as const).map((c) => (
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
              {c === "all" ? t.themeAll : labels[c]}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-ink-600" role="status" aria-live="polite">
        {t.showing(filtered.length, programmes.length)}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-ink-900/20 p-12 text-center">
          <p className="font-display text-xl text-ink-950">{t.emptyTitle}</p>
          <p className="mt-2 text-ink-600">
            {t.emptyBody}{" "}
            <Link href={href(locale, "contact")} className="font-medium text-gold-600 underline">
              {t.emptyLink}
            </Link>{" "}
            {t.emptyBodyEnd}
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={href(locale, `programmes/${p.slug}`)}
              className="group flex flex-col rounded-2xl border border-ink-900/10 bg-white p-7 transition hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-xs font-semibold tracking-wider text-gold-600">
                  {p.acronym}
                </span>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {p.audience.map((a) => (
                    <Tag key={a}>{who[a]}</Tag>
                  ))}
                </div>
              </div>
              <h3 className="mt-4 font-display text-xl leading-snug text-ink-950">{p.name}</h3>
              {p.status ? (
                <p className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-ink-900/5 px-2.5 py-1 text-xs font-medium text-ink-700">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  {statusText[p.status]}
                </p>
              ) : null}
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">{p.summary}</p>

              <dl className="mt-6 grid gap-4 border-t border-ink-900/10 pt-5 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-[0.1em] text-ink-400">
                    {t.applicantsLabel}
                  </dt>
                  <dd className="mt-1 font-medium text-ink-900">{p.whoApplies}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.1em] text-ink-400">
                    {t.coFundingLabel}
                  </dt>
                  <dd className="mt-1 font-medium text-ink-900">{p.coFunding}</dd>
                </div>
              </dl>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
                {t.detailLink}
                <ArrowRight className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/** Strips diacritics so "finantare" also matches "finanțare". */
function normalise(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}
