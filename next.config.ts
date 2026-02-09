import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove trailing slashes for cleaner URLs
  trailingSlash: false,
  // If deploying to a subpath (e.g., username.github.io/repo-name), uncomment and set:
  // basePath: '/StudySphere',
  // assetPrefix: '/StudySphere',
};

export default nextConfig;
