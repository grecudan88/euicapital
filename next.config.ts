import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export -> ./out, served by Cloudflare Workers Static Assets.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
