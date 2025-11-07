// Post API utilities for Astro

export async function getAllPosts() {
  const posts = await import.meta.glob('/src/pages/posts/*.md', { eager: true });

  return Object.entries(posts).map(([path, module]) => {
    const filename = path.split('/').pop().replace('.md', '');
    return {
      id: filename,
      title: module.frontmatter.title,
      date: module.frontmatter.date,
      frontmatter: module.frontmatter,
      path,
    };
  });
}

export async function getPostById(id) {
  const posts = await getAllPosts();
  const post = posts.find(p => p.id === id);

  if (!post) {
    throw new Error(`Post not found: ${id}`);
  }

  return {
    id: post.id,
    title: post.title,
    date: post.date.slice(0, 10),
    frontmatter: post.frontmatter,
  };
}
