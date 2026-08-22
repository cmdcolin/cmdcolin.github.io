interface PostModule {
  frontmatter: {
    title: string
    date: string
    [key: string]: unknown
  }
  default: unknown
}

function getPostModules() {
  return import.meta.glob<PostModule>('/src/_posts/*.md', { eager: true })
}

function idFromPath(path: string) {
  return path.slice(path.lastIndexOf('/') + 1, -'.md'.length)
}

export function getAllPosts() {
  return Object.entries(getPostModules())
    .map(([path, module]) => ({
      id: idFromPath(path),
      title: module.frontmatter.title,
      date: module.frontmatter.date,
      frontmatter: module.frontmatter,
    }))
    .toSorted((a, b) => b.date.localeCompare(a.date))
}

export function getPostById(id: string) {
  const module = getPostModules()[`/src/_posts/${id}.md`]

  if (!module) {
    throw new Error(`Post not found: ${id}`)
  }

  return {
    id,
    title: module.frontmatter.title,
    date: module.frontmatter.date,
    frontmatter: module.frontmatter,
    default: module.default,
  }
}
