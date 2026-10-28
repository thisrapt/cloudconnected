import type { NextConfig } from "next";

// WordPress pages that were empty stubs, drafts or duplicates. They are redirected to the
// page that now covers them so old links and search results keep working.
const legacyRedirects: Record<string, string> = {
  "/hp/": "/onze-partners/",
  "/microsoft/": "/onze-partners/",
  "/acronis/": "/onze-partners/",
  "/apple/": "/onze-partners/",
  "/cisco/": "/onze-partners/",
  "/hp-portfolio/": "/onze-partners/",
  "/over-ons-nieuw/": "/over-ons/",
  "/diensten/": "/",
};

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Keep the WordPress URL format (e.g. /zakelijk-internet/) so existing links and rankings carry over.
  trailingSlash: true,
  async redirects() {
    return Object.entries(legacyRedirects).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
