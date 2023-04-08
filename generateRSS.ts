import { getAllPosts, generateRSSFeed } from './lib/api.ts'

const posts = await getAllPosts()
generateRSSFeed(posts)
