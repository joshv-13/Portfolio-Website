'use client'

import React from 'react'
import '../css/biography.css'
import Image from 'next/image'

export default function Biography() {
  return (
    <section id="biography" className="bio-section">
      <div className="bio-container">

        {/* IMAGE */}
        <div className="bio-image-wrapper">
          <Image
            src="/images/biography-home.png"
            alt="Josh Visser biography photo"
            width={500}
            height={750}
            priority
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="bio-text">
          <h2 className="bio-title">About<br />Josh Visser</h2>

          <p>
            I recently graduated with a degree in Biomedical Engineering and am preparing to pursue graduate studies focused on sensing systems and electromagnetics.
          </p>

          <p>
            During my undergraduate studies, I worked on radar-based human activity recognition and engineering projects spanning RF sensing, signal processing, and applied machine learning. I’m particularly interested in building systems that connect hardware, data, and real-world human applications.
          </p>

          <p>
            Outside of engineering, I spend most of my time in motion — skiing, climbing, golfing, diving, training, or exploring new places. I’m drawn to environments that push me physically and mentally, and I value learning through experience. Whether in research or in the mountains, I’m motivated by curiosity, discipline, and the pursuit of meaningful challenges.
          </p>
          
            

          <a href="/about" className="bio-readmore">Learn more</a>
        </div>

      </div>
    </section>
  )
}
