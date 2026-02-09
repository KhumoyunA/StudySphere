import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Set basePath for GitHub Pages subdirectory deployment
  basePath: '/StudySphere',
  assetPrefix: '/StudySphere',
};

export default nextConfig;
