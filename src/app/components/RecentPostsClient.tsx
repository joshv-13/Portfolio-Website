'use client'

import Link from 'next/link'
import '../css/recent-posts.css'
import type { Post } from '@/lib/posts'

export default function RecentPostsClient({ posts }: { posts: Post[] }) {
  return (
    <section id="recent-posts" className="recent-posts-section">
      {/* HEADER */}
      <div className="recent-posts-header">
        <h2>Recent posts</h2>
      </div>

      {/* BIG SINGLE-COLUMN LIST */}
      <div className="posts-list">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="post-card">
            {p.frontmatter.image ? (
              <img src={p.frontmatter.image} alt={p.frontmatter.title} />
            ) : null}

            <div className="post-content">
              <p className="post-date">{p.frontmatter.date}</p>
              <h3 className="post-title">{p.frontmatter.title}</h3>

              {p.frontmatter.excerpt ? (
                <p className="post-excerpt">{p.frontmatter.excerpt}</p>
              ) : null}
            </div>
          </Link>
        ))}
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="posts-viewall">
        <Link href="/blog" className="posts-viewall-btn">
          View all posts
        </Link>
      </div>
    </section>
  )
}
