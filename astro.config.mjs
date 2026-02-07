import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import rehypeTreeSitter from './lib/rehype-tree-sitter.js'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],
  site: 'https://cmdcolin.github.io',
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [rehypeTreeSitter],
  },
})
