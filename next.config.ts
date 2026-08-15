import type { NextConfig } from "next";
import { defaultLocale } from "./src/content/locales";

const nextConfig: NextConfig = {
  // Static export -> ./out, served by Cloudflare Workers Static Assets.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  productionBrowserSourceMaps: false,

  /**
   * Dev-server only — static export cannot emit redirects, and it must not:
   * in production these paths deliberately have no asset behind them so the
   * request falls through to the Worker, which picks a language from the
   * visitor's cookie and Accept-Language header before redirecting.
   *
   * These rules mirror that behaviour so `npm run dev` matches production:
   * `/` and any unprefixed path land on the default locale instead of 404ing.
   */
  async redirects() {
    return [
      { source: "/", destination: `/${defaultLocale}/`, permanent: false },
      {
        // Anything that is not already a locale, an internal Next path, or a
        // root-level file: /contact/ -> /ro/contact/
        source: "/:path((?!ro/|en/|_next/|api/|__next).+)",
        destination: `/${defaultLocale}/:path`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
