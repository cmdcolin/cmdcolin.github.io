import type { MarkdownInstance } from 'astro'

interface Frontmatter {
  title: string
  date: string
}

export function getAllPosts() {
  return Object.entries(
    import.meta.glob<MarkdownInstance<Frontmatter>>('/src/_posts/*.md', {
      eager: true,
    }),
  )
    .map(([path, { frontmatter, Content }]) => ({
      id: path.slice(path.lastIndexOf('/') + 1, -'.md'.length),
      title: frontmatter.title,
      date: frontmatter.date,
      Content,
    }))
    .toSorted((a, b) => b.date.localeCompare(a.date))
}
