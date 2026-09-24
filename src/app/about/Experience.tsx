'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import './experience.css'

type Mode = 'timeline' | 'resume'

type TimelineItem = {
  date: string
  title: string
  org: string
  bullets: string[]
  kind?: 'work' | 'research' | 'education' | 'leadership' | 'milestone'
}

export default function Experience() {
  const [mode, setMode] = useState<Mode>('timeline')

  const viewportRef = useRef<HTMLDivElement | null>(null)
  const [showTopFade, setShowTopFade] = useState(false)
  const [showBottomFade, setShowBottomFade] = useState(false)

const items = useMemo<TimelineItem[]>(
  () => [
    {
      date: 'Sept 2020 — May 2025',
      title: 'B.Eng. Biomedical Engineering (Major)',
      org: 'University of Guelph',
      kind: 'education',
      bullets: [
        'Five years of circuits, signals, and controlled chaos — finished with a 3.71 GPA and a mild addiction to signal processing.',
        'Learned to love Fourier transforms, feedback loops, biomedical signals, and building things that actually work in the real world.',
      ],
    },
    {
      date: 'Sept 2021 — May 2022',
      title: 'Engineering Peer Helper',
      org: 'University of Guelph',
      kind: 'leadership',
      bullets: [
        'Helped fellow engineers survive midterms, group projects, and existential crises — mostly through better time management.',
      ],
    },
    {
      date: 'Jan 2023 — Aug 2023',
      title: 'R&D Engineer',
      org: 'Accelovant Technologies (North Vancouver, BC)',
      kind: 'work',
      bullets: [
        'Built custom SFP modules and fiber-optic temperature probes — tiny hardware, big consequences.',
        'Automated 50+ SolidWorks drawings with a Visual Basic macro because clicking the same button 50 times is unacceptable.',
        'Designed a Bed-of-Nails test fixture that improved QC for 5,000+ PCBs per year.',
      ],
    },
    {
      date: 'Sept 2022 — May 2024',
      title: 'Mechanical Engineer',
      org: 'University of Guelph Robotics Team',
      kind: 'leadership',
      bullets: [
        'Led a full redesign of a competition robotic arm — equal parts CAD, stress analysis, and “why is this vibrating?”',
      ],
    },
    {
      date: 'May 2024 — Jan 2025',
      title: 'Machine Learning & Radar Research',
      org: 'University of Waterloo — Wireless Sensors & Devices Lab',
      kind: 'research',
      bullets: [
        'Built a privacy-preserving radar system to monitor activity in long-term care homes — no cameras, just physics.',
        'Pushed classification accuracy to ~95% with deep learning models that survived noise, multipath, and reality.',
        'Collected data from 10+ participants and engineered the full preprocessing pipeline from raw radar to usable insight.',
      ],
    },
    {
      date: 'Sept 2024 — Apr 2025',
      title: 'AI Medication Assistant & Smart Pillbox',
      org: 'University of Guelph — Undergraduate Project',
      kind: 'research',
      bullets: [
        'Prototyped a computer-vision smart pillbox to verify medication adherence (because “I took it” isn’t data).',
        'Built an LLM-powered interface to track dosage, symptoms, and interactions — bridging hardware with conversational AI.',
      ],
    },
    {
      date: 'Jan 2025',
      title: 'First Conference Presentation',
      org: 'IEEE LAMC (San Juan, Puerto Rico)',
      kind: 'milestone',
      bullets: [
        'Presented my first conference paper — radar systems, healthcare applications, and 30+ people staring at my slides.',
      ],
    },
    {
      date: 'Jan 2025 — May 2025',
      title: 'Hardware Engineer',
      org: 'Evertz Microsystems (Burlington, ON)',
      kind: 'work',
      bullets: [
        'Designed and tested high-speed routing PCBs for professional broadcast equipment — where signal integrity really matters.',
        'Ran power integrity simulations and validated them on real hardware (the best kind of confirmation).',
        'Resolved 30+ sourcing and power-circuit design issues without setting anything on fire.',
      ],
    },
    {
      date: 'July 2025',
      title: 'Design Contest Presentation',
      org: 'IEEE AP-S Student Design Contest (IEEE Antennas & Propagation Conference)',
      kind: 'milestone',
      bullets: [
        'Presented a multi-radar tracking system with a novel lens design to narrow beamwidth and track people across a room.',
        'Walked away with 3rd Place — which feels very good at an international antenna conference.',
      ],
    },
    {
      date: 'May 2026',
      title: 'Started My Master’s at Waterloo',
      org: 'University of Waterloo — Electrical and Computer Engineering',
      kind: 'milestone',
      bullets: [
        'Began my MASc under the supervision of Professor George Shaker, focusing on radar sensing and electromagnetics.',
        'Excited to build on my biomedical engineering background and explore new ways to combine RF hardware, signal processing, and machine learning.',
      ],
    },
  ],
  []
)


  useEffect(() => {
    if (mode !== 'timeline') return
    const el = viewportRef.current
    if (!el) return

    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = el
      const hasOverflow = scrollHeight > clientHeight + 2
      if (!hasOverflow) {
        setShowTopFade(false)
        setShowBottomFade(false)
        return
      }
      setShowTopFade(scrollTop > 2)
      setShowBottomFade(scrollTop + clientHeight < scrollHeight - 2)
    }

    update()
    el.addEventListener('scroll', update, { passive: true })

    const ro = new ResizeObserver(update)
    ro.observe(el)

    return () => {
      el.removeEventListener('scroll', update as any)
      ro.disconnect()
    }
  }, [mode, items.length])

  return (
    <section id="experience" className="exp" aria-labelledby="exp-title">
      <p id="exp-eyebrow" className="about-eyebrow">
        About
      </p>

      <div className="exp-header">
        <h1 id="exp-title" className="about-title">
          Experience
        </h1>

        <div className="exp-toggle" role="tablist" aria-label="Experience view toggle">
          <button
            type="button"
            className={`exp-tab ${mode === 'timeline' ? 'is-active' : ''}`}
            onClick={() => setMode('timeline')}
            role="tab"
            aria-selected={mode === 'timeline'}
          >
            Timeline
          </button>

          <button
            type="button"
            className={`exp-tab ${mode === 'resume' ? 'is-active' : ''}`}
            onClick={() => setMode('resume')}
            role="tab"
            aria-selected={mode === 'resume'}
          >
            Resume
          </button>
        </div>
      </div>

      {mode === 'timeline' ? (
        <div className="exp-timeline-shell">
          <div className={`exp-fade exp-fade-top ${showTopFade ? 'is-visible' : ''}`} aria-hidden="true" />
          <div className={`exp-fade exp-fade-bottom ${showBottomFade ? 'is-visible' : ''}`} aria-hidden="true" />

          <div className="exp-timeline-viewport" ref={viewportRef}>
            <div className="exp-timeline" role="list">
              <div className="exp-spine" aria-hidden="true" />

              {items.map((it, idx) => {
                const side = idx % 2 === 0 ? 'left' : 'right'
                const kind = it.kind ?? 'work'

                const Card = (
                  <div className="exp-card-wrap">
                    <div className="exp-date-pill">{it.date}</div>

                    <div className="exp-card">
                      <div className="exp-role">{it.title}</div>
                      <div className="exp-org">{it.org}</div>
                      <ul className="exp-bullets">
                        {it.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )

                return (
                  <article key={`${it.date}-${it.title}`} className={`exp-item exp-${side} exp-${kind}`} role="listitem">
                    <div className="exp-left-col">{side === 'left' ? Card : null}</div>
                    <div className="exp-spine-col" aria-hidden="true">
                      <div className="exp-dot" />
                    </div>
                    <div className="exp-right-col">{side === 'right' ? Card : null}</div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="exp-resume">
          <div className="exp-resume-embed">
            <object data="/Resume_JoshVisser.pdf" type="application/pdf" width="100%" height="100%">
              <div className="exp-resume-fallback">
                <p>Your browser can’t display PDFs inline.</p>
                <a className="exp-download" href="/Resume_JoshVisser.pdf" target="_blank" rel="noreferrer">
                  Download resume
                </a>
              </div>
            </object>
          </div>
        </div>
      )}
    </section>
  )
}

