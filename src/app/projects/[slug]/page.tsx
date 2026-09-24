import React from 'react'
import { notFound } from 'next/navigation'
import { getProjectSlugs, getProjectBySlug } from '@/lib/projects'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const slugs = getProjectSlugs()
  if (!slugs.includes(slug)) return notFound()

  const project = getProjectBySlug(slug)

  return (
    <main style={{ padding: '4.5rem 0 5rem' }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <a href="/projects" style={{ fontWeight: 800, textDecoration: 'none' }}>
          ← Back to Projects
        </a>

        <h1 style={{ marginTop: '1.25rem', marginBottom: '0.5rem', color: 'rgba(2,8,23,0.95)' }}>
          {project.frontmatter.title}
        </h1>

        <p style={{ margin: 0, opacity: 0.7, color: 'rgba(2,8,23,0.72)' }}>
          {String(project.frontmatter.date)}
        </p>

        <article style={{ marginTop: '2rem', lineHeight: 1.85, color: 'rgba(2,8,23,0.92)' }}>
          <MDXRemote
            source={project.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>
      </div>
    </main>
  )
}
