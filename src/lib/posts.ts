import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'src', 'data', 'posts')

export type PostFrontmatter = {
  title: string
  excerpt: string
  image?: string
  date?: string
  tech?: string[]
  featured?: boolean
}

export type Post = {
  slug: string
  frontmatter: PostFrontmatter
  content: string
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`)
  const file = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(file)

  const frontmatter = data as PostFrontmatter

  // required fields (prevents the TS error and catches bad MDX)
  if (!frontmatter.title || !frontmatter.excerpt) {
    throw new Error(
      `Missing required frontmatter in ${slug}.mdx. Required: title, excerpt`
    )
  }

  return {
    slug,
    frontmatter,
    content,
  }
}

export function getAllPosts(): Post[] {
  return getPostSlugs().map((slug) => getPostBySlug(slug))
}

export function getRecentPosts(): Post[] {
  // Option A (recommended): use frontmatter featured: true
  const featured = getAllPosts().filter((p) => p.frontmatter.featured)

  // If none are marked featured, just return the first 3 so the homepage never breaks
  if (featured.length === 0) return getAllPosts().slice(0, 3)

  return featured.slice(0, 6)
  }