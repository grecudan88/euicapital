"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/content/locales";
import { getCopy } from "@/content/pages";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-2 w-full rounded-lg border border-ink-900/15 bg-white px-4 py-2.5 text-[15px] text-ink-900 outline-none transition placeholder:text-ink-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-200";

const labelClass = "block text-sm font-medium text-ink-800";

export function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<string[]>([]);

  const t = getCopy(locale).contact.form;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrors([]);

    const payload = {
      ...Object.fromEntries(new FormData(event.currentTarget)),
      locale,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        errors?: string[];
      };

      if (response.ok && data.ok) {
        setStatus("sent");
        return;
      }
      setErrors(data.errors ?? [t.genericError]);
      setStatus("error");
    } catch {
      setErrors([t.networkError(site.email)]);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-gold-400 bg-white p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-200">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="#9a7434"
            strokeWidth={1.8}
            className="h-6 w-6"
          >
            <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-5 font-display text-2xl text-ink-950">{t.successTitle}</h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-700">
          {t.successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-ink-900/10 bg-white p-7 sm:p-9"
    >
      {/* Honeypot: hidden from users, irresistible to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          {t.honeypot}
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          {t.name} <span className="text-gold-600">*</span>
          <input
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder={t.namePlaceholder}
          />
        </label>

        <label className={labelClass}>
          {t.email} <span className="text-gold-600">*</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder={t.emailPlaceholder}
          />
        </label>

        <label className={labelClass}>
          {t.organisation}
          <input
            name="organisation"
            autoComplete="organization"
            className={fieldClass}
            placeholder={t.organisationPlaceholder}
          />
        </label>

        <label className={labelClass}>
          {t.country}
          <input
            name="country"
            autoComplete="country-name"
            className={fieldClass}
            placeholder={t.countryPlaceholder}
          />
        </label>

        <label className={labelClass}>
          {t.stage}
          <select name="stage" defaultValue={t.stages[0]} className={fieldClass}>
            {t.stages.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>

        <label className={labelClass}>
          {t.budget}
          <select name="budget" defaultValue={t.budgets[4]} className={fieldClass}>
            {t.budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
      </div>

      <label className={`${labelClass} mt-5`}>
        {t.message} <span className="text-gold-600">*</span>
        <textarea
          name="message"
          required
          rows={6}
          className={fieldClass}
          placeholder={t.messagePlaceholder}
        />
      </label>

      {status === "error" && errors.length > 0 ? (
        <div role="alert" className="mt-5 rounded-lg border border-red-300 bg-red-50 p-4">
          <ul className="space-y-1 text-sm text-red-800">
            {errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-7 flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3 text-sm font-semibold text-paper transition hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? t.submitting : t.submit}
        </button>
        <p className="text-xs leading-relaxed text-ink-600">{t.note}</p>
      </div>
    </form>
  );
}
