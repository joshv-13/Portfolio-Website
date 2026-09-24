import React from 'react'
import { notFound } from 'next/navigation'
import { getPostSlugs, getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const slugs = getPostSlugs()
  if (!slugs.includes(slug)) return notFound()

  const post = getPostBySlug(slug)

  return (
    <main style={{ padding: '4.5rem 0 5rem' }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <a href="/blog" style={{ fontWeight: 800, textDecoration: 'none' }}>
          ← Back to Posts
        </a>

        <h1 style={{ marginTop: '1.25rem', marginBottom: '0.5rem', color: 'rgba(2,8,23,0.95)' }}>
          {post.frontmatter.title}
        </h1>

        <p style={{ margin: 0, opacity: 0.7, color: 'rgba(2,8,23,0.72)' }}>
          {String(post.frontmatter.date)}
        </p>

        <article style={{ marginTop: '2rem', lineHeight: 1.85, color: 'rgba(2,8,23,0.92)' }}>
          <MDXRemote
            source={post.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>
      </div>
    </main>
  )
}
