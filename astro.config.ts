import { defineConfig } from 'astro/config'
import { unified } from '@astrojs/markdown-remark'
import sitemap from '@astrojs/sitemap'
import rehypeTreeSitter from './lib/rehype-tree-sitter.ts'
import rehypeLazyImages from './lib/rehype-lazy-images.ts'

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: 'https://cmdcolin.github.io',
  markdown: {
    syntaxHighlight: false,
    processor: unified({
      rehypePlugins: [rehypeTreeSitter, rehypeLazyImages],
    }),
  },
})
