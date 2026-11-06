'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Project } from '@/lib/projects'
import './ProjectGrid.css'

export default function ProjectGridClient({ projects }: { projects: Project[] }) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const tags = [...new Set(projects.flatMap(({ frontmatter }) =>
    frontmatter.tag ? [frontmatter.tag] : []
  ))].sort((a, b) => a.localeCompare(b))
  const visibleProjects = selectedTag === null
    ? projects
    : projects.filter(({ frontmatter }) => frontmatter.tag === selectedTag)

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

        {tags.length > 0 && (
          <div className="project-filters" role="group" aria-label="Filter projects by tag">
            {[null, ...tags].map((tag) => (
              <button
                key={tag ?? 'all'}
                type="button"
                className="project-filter"
                aria-pressed={selectedTag === tag}
                onClick={() => setSelectedTag(tag)}
              >
                {tag ?? 'All projects'}
              </button>
            ))}
          </div>
        )}
        <p className="project-results" role="status">
          {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'}
          {selectedTag ? ` tagged “${selectedTag}”` : ''}
        </p>

        <section className="blog-posts" aria-label="Projects">
          <div className="blog-grid">
            {visibleProjects.map((project) => (
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
                  {project.frontmatter.tag && (
                    <span className="project-tag">{project.frontmatter.tag}</span>
                  )}
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
