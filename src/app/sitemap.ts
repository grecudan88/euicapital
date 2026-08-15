import type { MetadataRoute } from "next";
import { locales } from "@/content/locales";
import { programmeSlugs } from "@/content/programmes";
import { navPaths, site } from "@/content/site";

export const dynamic = "force-static";

const paths = [
  { path: "", priority: 1 },
  ...navPaths.map((path) => ({ path, priority: path === "services" ? 0.9 : 0.7 })),
  { path: "contact", priority: 0.8 },
  ...programmeSlugs.map((slug) => ({ path: `programmes/${slug}`, priority: 0.6 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    paths.map(({ path, priority }) => {
      const suffix = path ? `${path}/` : "";
      return {
        url: `${site.url}/${locale}/${suffix}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((alt) => [alt, `${site.url}/${alt}/${suffix}`]),
          ),
        },
      };
    }),
  );
}
