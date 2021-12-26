// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-prism')],
  },
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
})
