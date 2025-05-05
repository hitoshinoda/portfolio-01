import type { NextConfig } from "next";

const isProdBuild = process.env.GITHUB_ACTIONS === "true";
const repoName = isProdBuild
  ? process.env.GITHUB_REPOSITORY_NAME
  : "portfolio-01";

const basePath = isProdBuild ? `/${repoName}` : undefined;
const assetPrefix = isProdBuild ? `/${repoName}/` : undefined;

const publicBasePath = isProdBuild ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: assetPrefix,
  env: {
    NEXT_PUBLIC_BASE_PATH: publicBasePath,
  },
  reactStrictMode: true,
};

export default nextConfig;
