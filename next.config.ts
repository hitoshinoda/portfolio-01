// next.config.ts
import type { NextConfig } from "next";

// GitHub Actions実行中かどうかを判定
const isProdBuild = process.env.GITHUB_ACTIONS === 'true';
// GitHub Actionsビルド時のみ環境変数 GITHUB_REPOSITORY_NAME を読み込む
// ローカル開発時はフォールバック値を使う (主に publicBasePath 計算用)
const repoName = isProdBuild ? process.env.GITHUB_REPOSITORY_NAME : 'portfolio-01';

// NEXT_PUBLIC_BASE_PATH に設定する値を決定
// ・本番ビルド時 (isProdBuild === true): /<リポジトリ名>
// ・ローカル開発時 (isProdBuild === false): "" (空文字列)
const publicBasePath = isProdBuild ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  devIndicators: false,
  // output: "export", // configure-pages が注入するのでコメントアウトまたは削除
  // images: { // configure-pages が注入するのでコメントアウトまたは削除
  //  unoptimized: true,
  // },

  // basePath: undefined, // configure-pages が注入するのでコメントアウトまたは削除
  // assetPrefix: undefined, // configure-pages が注入するのでコメントアウトまたは削除

  env: {
    // 条件に応じて決定した値を NEXT_PUBLIC_BASE_PATH に設定
    NEXT_PUBLIC_BASE_PATH: publicBasePath,
  },
  reactStrictMode: true,
};

export default nextConfig;