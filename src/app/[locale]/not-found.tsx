import { NotFoundContent } from "@/components/not-found-content";
import { defaultLocale } from "@/content/locales";

/**
 * Next renders this without locale params, so it falls back to the primary
 * language. The Worker serves the locale-correct /{locale}/404/ page for real
 * 404 responses — see worker/index.ts.
 */
export default function NotFound() {
  return <NotFoundContent locale={defaultLocale} />;
}
