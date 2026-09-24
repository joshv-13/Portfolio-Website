'use client'

import React from 'react'
import './publications-awards.css'

type Pub = {
  title: string
  venue: string
  summary: string
  link?: string
}

type Award = {
  title: string
  year: string
  summary: string
}

export default function PublicationsAwards() {
  const publications: Pub[] = [

    {
      title: 'Activity Monitoring System for Long-Term Care Bathrooms Using mm-Wave FMCW Radar',
      venue: 'IEEE Sensors Journal (2026)',
      summary: 'Journal submission describing a full FMCW radar-based monitoring system for long-term care settings.',
      link: 'https://doi.org/10.1109/JSEN.2026.3693940',
    },
    {
      title: 'Modified GRIN Luneburg Lens for High-Efficiency Millimeter-Wave Multi-Radar Sensing',
      venue: 'IEEE EuCAP (2026)',
      summary: 'Conference paper presenting a GRIN Luneburg lens design for Multi-Radar Sensing.',
      link: 'https://doi.org/10.23919/EuCAP68105.2026.11612377',
    },
    {
      title: 'AI-Based Activity Monitoring in Washrooms Using Low-Resolution Radar',
      venue: 'IEEE LAMC (2025)',
      summary: 'Conference paper presenting a radar + AI pipeline for washroom activity monitoring using low-resolution sensing.',
      link: 'https://doi.org/10.1109/LAMC63321.2025.10880536',
    },
    {
      title: 'Validating mm-Wave Radar System for Fall Detection in Washrooms',
      venue: 'IEEE HI-POCT (2024)',
      summary: 'Experimental validation of a mm-wave radar system for fall detection in washroom environments.',
      link: 'https://doi.org/10.1109/HI-POCT64255.2024.10876204',
    },
    
    {
      title: 'Millimeter-Wave Multi-Radar Tracking System Utilizing a Modified GRIN Luneburg Lens',
      venue: 'IEEE Transactions on Antennas and Propagation (Submitted)',
      summary: 'Multi-radar healthcare monitoring system leveraging a modified GRIN Luneburg lens.',
      link: 'https://arxiv.org/abs/2601.12629',
    },
    
  ]

  const awards: Award[] = [
    {title: 'NSERC Canada Graduate Research Scholarship — Master’s (CGRS M)', year: '2026', summary: 'Awarded in support of my master’s research in radar sensing and electromagnetics at the University of Waterloo.'},
    {title: 'President’s Graduate Scholarship — University of Waterloo', year: '2026', summary: 'Awarded by the University of Waterloo in recognition of receiving an NSERC Canada Graduate Research Scholarship.'},
    { title: '3rd Place & Semifinalist — IEEE AP-S Student Design Contest', year: '2025', summary: 'International design contest recognition for technical system design.' },
    { title: 'Rising Stars Research Fellow — University of Waterloo', year: '2024', summary: 'Competitive fellowship recognizing high-potential graduate researchers.' },
    { title: 'MITACS Accelerate Intern', year: '2024', summary: 'Industry–academia research internship focused on applied R&D.' },
    { title: 'Dean’s Honour List — University of Guelph (All Semesters)', year: '2020–2025', summary: 'Awarded for consistent academic excellence across all semesters.' },
    { title: 'Undergraduate Entrance Scholarship — University of Guelph', year: '2020', summary: 'Merit-based entrance scholarship for academic achievement.' },
  ]

  return (
    <section id="publications" className="pa" aria-labelledby="pa-title">
      <p className="about-eyebrow">About</p>

      <header className="about-section-header">
        <h1 id="pa-title" className="about-title">
          Publications &amp; Awards
        </h1>
      </header>

      <div className="pa-viewport">
        <div className="pa-fade pa-fade-top" />
        <div className="pa-fade pa-fade-bottom" />

        <div className="pa-scroll">
          <div className="pa-columns">
            <div className="pa-column">
              <h2 className="pa-column-title">Publications</h2>

              {publications.map((p, i) => (
                <article key={i} className="pa-card">
                  <h3 className="pa-card-title">
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noreferrer">
                        {p.title}
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <div className="pa-card-meta">{p.venue}</div>
                  <p className="pa-card-summary">{p.summary}</p>
                </article>
              ))}
            </div>

            <div className="pa-column">
              <h2 className="pa-column-title">Awards &amp; Scholarships</h2>

              {awards.map((a, i) => (
                <article key={i} className="pa-card">
                  <h3 className="pa-card-title">{a.title}</h3>
                  <div className="pa-card-meta">{a.year}</div>
                  <p className="pa-card-summary">{a.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

