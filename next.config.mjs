/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的エクスポートを有効にする
  output: 'export',

  // GitHub Pages でサブディレクトリにデプロイする場合に必要な設定 (例: https://<user>.github.io/<repo>/)
  // basePath: '/<repo>', // リポジトリ名に合わせて変更
  // assetPrefix: '/<repo>/', // リポジトリ名に合わせて変更

  // next/image で外部ドメインの画像を使用する場合の設定 (今回は Unsplash を使用)
  images: {
    unoptimized: true, // 静的エクスポートでは最適化を無効にする必要がある場合が多い
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
