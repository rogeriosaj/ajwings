import "@project/env/web";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/ajwings" : "",
  typedRoutes: true,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
