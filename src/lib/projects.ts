import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const PROJECTS_DIR = path.join(process.cwd(), 'src', 'data', 'projects')

export type ProjectFrontmatter = {
  title: string
  excerpt: string
  image?: string
  date?: string
  tech?: string[]
  featured?: boolean
}

export type Project = {
  slug: string
  frontmatter: ProjectFrontmatter
  content: string
}

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getProjectBySlug(slug: string): Project {
  const fullPath = path.join(PROJECTS_DIR, `${slug}.mdx`)
  const file = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(file)

  const frontmatter = data as ProjectFrontmatter

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

export function getAllProjects(): Project[] {
  return getProjectSlugs()
    .map((slug) => getProjectBySlug(slug))
    .sort((a, b) => {
      // newest -> oldest
      const timeA = a.frontmatter.date
        ? new Date(a.frontmatter.date).getTime()
        : 0
      const timeB = b.frontmatter.date
        ? new Date(b.frontmatter.date).getTime()
        : 0
      return timeB - timeA
    })
}

export function getFeaturedProjects(): Project[] {
  // Option A (recommended): use frontmatter featured: true
  const featured = getAllProjects().filter((p) => p.frontmatter.featured)

  // If none are marked featured, just return the first 3 so the homepage never breaks
  if (featured.length === 0) return getAllProjects().slice(0, 3)

  return featured.slice(0, 6)
}