import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/ro/legal/", "/en/legal/", "/ro/404/", "/en/404/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
