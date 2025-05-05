import type { NextConfig } from "next";

const isProdBuild = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY_NAME || 'portfolio-01';

const basePath = isProdBuild ? `/${repoName}` : undefined;
const assetPrefix = isProdBuild ? `/${repoName}/` : undefined;

const nextPublicBasePath = isProdBuild ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  images: {
    unoptimized: true,
  },

  basePath: basePath,
  assetPrefix: assetPrefix,

  env: {
    NEXT_PUBLIC_BASE_PATH: nextPublicBasePath,
  },
};

export default nextConfig;