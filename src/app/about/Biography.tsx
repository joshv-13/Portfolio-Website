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
            I recently graduated with a degree in Biomedical Engineering and am preparing to pursue graduate studies focused on sensing systems and electromagnetics.
          </p>

          <p>
            During my undergraduate studies, I worked on radar-based human activity recognition and engineering projects spanning RF sensing, signal processing, and applied machine learning. I’m particularly interested in building systems that connect hardware, data, and real-world human applications.
          </p>

          <p>
            Outside of engineering, I spend most of my time in motion — skiing, climbing, golfing, diving, training, or exploring new places. I’m drawn to environments that push me physically and mentally, and I value learning through experience. Whether in research or in the mountains, I’m motivated by curiosity, discipline, and the pursuit of meaningful challenges.
          </p>
          <p>
            
          </p>
        </div>
      </div>
    </section>
  )
}
