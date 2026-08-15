import type { MetadataRoute } from "next";
import { programmes } from "@/content/programmes";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/services/", priority: 0.9 },
    { path: "/programmes/", priority: 0.9 },
    { path: "/process/", priority: 0.7 },
    { path: "/results/", priority: 0.7 },
    { path: "/about/", priority: 0.6 },
    { path: "/contact/", priority: 0.8 },
  ];

  const programmePages = programmes.map((p) => ({
    path: `/programmes/${p.slug}/`,
    priority: 0.6,
  }));

  return [...routes, ...programmePages].map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
