/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  output: 'export',

  images: {
    loader: 'akamai',
    path: '/',
  },
}

export default nextConfig
