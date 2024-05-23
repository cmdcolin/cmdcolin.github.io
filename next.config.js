/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  output: 'export',
  productionBrowserSourceMaps: true,

  images: {
    loader: 'akamai',
    path: '/',
  },
}

export default nextConfig
