import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Use static export output so `next export` produces a static `out/` folder
  output: 'export',
  // GitHub project page settings for https://SaeedSoltoon.github.io/woo-optimizer
  basePath: '/woo-optimizer',
  assetPrefix: '/woo-optimizer',
};

export default nextConfig;
