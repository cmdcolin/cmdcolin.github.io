// Post API utilities for Astro

interface PostModule {
  frontmatter: {
    title: string
    date: string
    [key: string]: unknown
  }
  default: unknown
}

export async function getAllPosts() {
  const postModules = import.meta.glob<PostModule>('/src/_posts/*.md', {
    eager: true,
  })

  return Object.entries(postModules).map(([path, module]) => {
    const filename = path.split('/').pop()!.replace('.md', '')
    return {
      id: filename,
      title: module.frontmatter.title,
      date: module.frontmatter.date,
      frontmatter: module.frontmatter,
    }
  })
}

export async function getPostById(id: string) {
  const postModules = import.meta.glob<PostModule>('/src/_posts/*.md', {
    eager: true,
  })
  const postPath = `/src/_posts/${id}.md`
  const module = postModules[postPath]

  if (!module) {
    throw new Error(`Post not found: ${id}`)
  }

  return {
    id,
    title: module.frontmatter.title,
    date: module.frontmatter.date.slice(0, 10),
    frontmatter: module.frontmatter,
    default: module.default,
  }
}
