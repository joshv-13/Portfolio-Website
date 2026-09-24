'use client'

import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import '../css/projects.css'
import type { Project } from '@/lib/projects'



export default function FeaturedProjectsClient({
  projects,
}: {
  projects: Project[]
  
}) {
  return (
    <section id="projects" className="interviews-section">
      <div className="container">
        {/* HEADER */}
        <div className="interviews-header">
          <p className="interviews-eyebrow">Start here</p>
          <h2 className="interviews-title">Featured Projects</h2>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={32}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            900: { slidesPerView: 2.2 },
            1200: { slidesPerView: 3.1 },
          }}
          className="interviews-swiper"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="interview-card"
              >
                {/* IMAGE */}
                {p.frontmatter.image && (
                  <div className="interview-card-image-wrapper">
                    <img
                      src={p.frontmatter.image}
                      alt={p.frontmatter.title}
                      className="interview-card-image"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* BODY */}
                <div className="interview-card-body">
                  <h3 className="interview-card-title">
                    {p.frontmatter.title}
                  </h3>
                  <p className="interview-card-meta">
                    {p.frontmatter.excerpt}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* SEE ALL */}
        <div className="interviews-see-all-wrapper">
          <Link href="/projects" className="interviews-see-all-btn">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  )
}
