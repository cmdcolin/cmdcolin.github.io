module.exports = {
  reactStrictMode: true,
}

// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
})
