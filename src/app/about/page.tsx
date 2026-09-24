import React from 'react'
import './about.css'
import Biography from './Biography'
import Experience from './Experience'
import Skills from './Skills'
import PublicationsAwards from './PublicationsAwards'

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-container">
        <Biography />
        <Skills />
        <Experience />
        <PublicationsAwards />
      </div>
    </main>
  )
}

