// next.config.js
import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  images: {
    loader: 'akamai',
    path: '/',
  },
};

export default withMDX(nextConfig);
