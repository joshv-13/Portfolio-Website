import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import './recentPosts.css'

export default function RecentPosts() {
  const posts = getAllPosts()

  return (
    <main className="blog-page">
      <div className="blog-container">
        <header className="blog-header">
          <p className="blog-eyebrow">Blog</p>
          <h1 className="blog-title">Recent Posts</h1>
          <p className="blog-lead">
            Writing, notes, and frameworks. Short, practical, and meant to be used.
          </p>
        </header>

        <section className="blog-posts" aria-label="Recent posts">
          <div className="blog-grid">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card"
              >
                <div className="blog-card__imageWrap">
                  {post.frontmatter.image ? (
                    <img
                      src={post.frontmatter.image}
                      alt={post.frontmatter.title}
                      className="blog-card__image"
                    />
                  ) : null}
                </div>

                <div className="blog-card__body">
                  <div className="blog-card__date">{String(post.frontmatter.date)}</div>
                  <h2 className="blog-card__title">{post.frontmatter.title}</h2>
                  {post.frontmatter.excerpt ? (
                    <p className="blog-card__excerpt">{post.frontmatter.excerpt}</p>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
