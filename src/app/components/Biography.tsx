'use client'

import React from 'react'
import '../css/biography.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Biography() {
  return (
    <section id="biography" className="bio-section">
      <div className="bio-container">

        {/* IMAGE */}
        <div className="bio-image-wrapper">
          <Image
            src="/Portfolio-Website/images/biography-home.png"
            alt="Josh Visser biography photo"
            width={500}
            height={750}
            priority
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="bio-text">
          <h2 className="bio-title">
            About<br />Josh Visser
          </h2>

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

          <Link href="/about" className="bio-readmore">
            Learn more
          </Link>
        </div>

      </div>
    </section>
  )
}