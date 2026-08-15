import type { NextConfig } from "next";
import { defaultLocale } from "./src/content/locales";

const nextConfig: NextConfig = {
  // Static export -> ./out, served by Cloudflare Workers Static Assets.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  productionBrowserSourceMaps: false,

  /**
   * Dev-server only. Static export cannot emit redirects, and it must not:
   * in production `/` deliberately has no asset behind it so the request
   * falls through to the Worker, which picks a language from the visitor's
   * cookie and Accept-Language header. This just stops `npm run dev` from
   * 404ing at the root.
   */
  async redirects() {
    return [{ source: "/", destination: `/${defaultLocale}/`, permanent: false }];
  },
};

export default nextConfig;
