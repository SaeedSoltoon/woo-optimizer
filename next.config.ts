import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Use static export output so `next export` produces a static `out/` folder
  output: 'export',
  // No basePath/assetPrefix so assets are referenced from root (/_next/...)
  // This is required when the Pages site uses a custom domain (saeedsoltani.ir)
};

export default nextConfig;
