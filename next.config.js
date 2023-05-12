/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  output: 'export',

  images: {
    loader: 'akamai',
    path: '/',
  },
}

export default nextConfig
