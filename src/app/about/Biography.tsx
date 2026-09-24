import React from 'react'
import './biography.css'

export default function Biography() {
  return (
    <section id="biography" className="bio" aria-labelledby="bio-title">
      <p id="bio-eyebrow" className="about-eyebrow">
        About
      </p>

      <div className="bio-grid">
        {/* LEFT: Title column */}
        <div className="bio-left">
          <h1 id="bio-title" className="about-title">
            Biography
          </h1>
          <div className="about-subtitle">(short version)</div>
        </div>

        {/* RIGHT: Text column */}
        <div className="bio-right">
          <p>
            I’m a master’s student in Electrical and Computer Engineering at
            the University of Waterloo, where I work with Professor George
            Shaker on radar sensing and electromagnetics. I previously
            completed my degree in Biomedical Engineering at the University
            of Guelph.
          </p>

          <p>
            My research brings together RF hardware, signal processing, and
            machine learning to explore how wireless systems can sense and
            understand the world around us. From monitoring human activity
            to developing new sensing capabilities, I enjoy taking ideas
            from simulation and prototypes to experiments that test how
            they work in practice.
          </p>

          <p>
            Outside of engineering, I love skiing, climbing, golfing,
            diving, and staying active. I’m always looking for opportunities
            to travel, spend time in nature, and explore somewhere new.
            Photography gives me a way to capture some of the beautiful
            places I get to visit and the moments I want to remember.
          </p>
          <p>
            
          </p>
        </div>
      </div>
    </section>
  )
}
