const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],

  images: {
    loader: 'akamai',
    path: '/',
  },
};

export default (nextConfig);
