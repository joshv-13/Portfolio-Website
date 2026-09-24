'use client'

import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import './skills.css'

type Skill = {
  id: string
  label: string
  iconSrc: string // path to your icon file (in /public)
  iconAlt?: string
}

export default function Skills() {
  const [active, setActive] = useState<Skill | null>(null)

  const skills = useMemo<Skill[]>(
    () => [
      {
        id: 'python',
        label: 'Python (Keras, TensorFlow, OpenCV, NumPy, SciKit)',
        iconSrc: '/images/icons/Python.png',
        iconAlt: 'Python',
      },
      { id: 'matlab', label: 'MATLAB', iconSrc: '/images/icons/matlab.png', iconAlt: 'MATLAB' },
      { id: 'c', label: 'C (Basic)', iconSrc: '/images/icons/C.png', iconAlt: 'C' },
      { id: 'solidworks', label: 'SolidWorks', iconSrc: '/images/icons/Solidworks.png', iconAlt: 'SolidWorks' },
      { id: 'ltspice', label: 'LTspice', iconSrc: '/images/icons/LTSpice.png', iconAlt: 'LTspice' },
      { id: 'altium', label: 'Altium', iconSrc: '/images/icons/Altium.png', iconAlt: 'Altium' },
      { id: 'digital', label: 'Digital Circuit Design', iconSrc: '/images/icons/DigitalCircuitDesign.png', iconAlt: 'Digital design' },
      { id: 'pcb', label: 'PCB Layout', iconSrc: '/images/icons/PCBLayout.png', iconAlt: 'PCB layout' },
      {
        id: 'proto',
        label: 'Rapid Prototyping (soldering, 3D-printing)',
        iconSrc: '/images/icons/RapidPrototyping.png',
        iconAlt: 'Prototyping',
      },
      { id: 'debug', label: 'Debugging', iconSrc: '/images/icons/Debugging.png', iconAlt: 'Debugging' },
    ],
    []
  )
  return (
    <section
      id="skills"
      className={`skills ${active ? 'is-dimmed' : ''}`}
      aria-labelledby="skills-title"
      onMouseLeave={() => setActive(null)}
    >
      <p className="about-eyebrow">About</p>

      <header className="about-section-header">
        <h1 id="skills-title" className="about-title">
          Skills
        </h1>
      </header>

      <div className="skills-grid" aria-label="Skills list">
        {skills.map((s) => {
          const isActive = active?.id === s.id

          return (
            <button
              key={s.id}
              type="button"
              className={`skill-tile ${isActive ? 'is-active' : ''}`}
              onMouseEnter={() => setActive(s)}
              onFocus={() => setActive(s)}
              onBlur={() => setActive(null)}
              aria-label={s.label}
            >
              <span className="skill-icon" aria-hidden="true">
                <Image
                  src={s.iconSrc}
                  alt={s.iconAlt ?? s.label}
                  width={34}
                  height={34}
                  className="skill-icon-img"
                />
              </span>
            </button>
          )
        })}
      </div>

      {/* Center overlay label for the entire section */}
      <div className={`skills-overlay ${active ? 'is-visible' : ''}`} aria-hidden={!active}>
        <div className="skills-overlay-pill">{active?.label}</div>
      </div>
    </section>
  )
}
