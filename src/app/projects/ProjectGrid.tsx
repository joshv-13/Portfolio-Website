import React from 'react'
import Link from 'next/link'
import { getAllProjects } from '@/lib/projects'
import './ProjectGrid.css'

export default function ProjectGrid() {
  const projects = getAllProjects()

  return (
    <main className="blog-page">
      <div className="blog-container">
        <header className="blog-header">
          <p className="blog-eyebrow">Projects</p>
          <h1 className="blog-title">Recent Work</h1>
          <p className="blog-lead">
            Systems, experiments, and tools. Designed, built, and tested.
          </p>
        </header>

        <section className="blog-posts" aria-label="Recent posts">
          <div className="blog-grid">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="blog-card"
              >
                <div className="blog-card__imageWrap">
                  {project.frontmatter.image ? (
                    <img
                      src={project.frontmatter.image}
                      alt={project.frontmatter.title}
                      className="blog-card__image"
                    />
                  ) : null}
                </div>

                <div className="blog-card__body">
                  <div className="blog-card__date">{String(project.frontmatter.date)}</div>
                  <h2 className="blog-card__title">{project.frontmatter.title}</h2>
                  {project.frontmatter.excerpt ? (
                    <p className="blog-card__excerpt">{project.frontmatter.excerpt}</p>
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
