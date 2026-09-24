'use client'

import React from 'react'
import '../css/hero.css' // adjust path if this file lives elsewhere
import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="hero">
      {/* BACKGROUND IMAGE */}
      <div className="hero-bg">
        <Image
          src="/Portfolio-Website/images/portrait-home-2.jpg"
          alt="Author portrait"
          fill
          priority
          className="hero-image"
        />
      </div>

      {/* NAVBAR */}
      <header className="hero-navbar">
        {/* Right-half gradient behind the navbar */}
        <div className="hero-navbar-gradient" />

        {/* LEFT — NAME */}
        {/* LEFT */}
        <div className="hero-navbar-left">
          <Link href="/" className="navbar-name">
            Josh Visser
          </Link>
        </div>

        {/* CENTER — NAV LINKS */}
        <nav className="hero-navbar-center">
          {/* ABOUT DROPDOWN */}
          <div className="hero-navbar-dropdown">
            <button className="nav-link hero-nav-link-button" aria-haspopup="true" aria-expanded="false">
              <Link href="/about" className="navbar-link">
                About
              </Link>
            </button>

            <div className="hero-navbar-dropdown-menu" role="menu">
              <Link href="/about#biography" className="hero-navbar-dropdown-item" role="menuitem">
                Biography
              </Link>
              <Link href="/about#skills" className="hero-navbar-dropdown-item" role="menuitem">
                Skills
              </Link>
              <Link href="/about#experience" className="hero-navbar-dropdown-item" role="menuitem">
                Experience
              </Link>
              <Link href="/about#publications" className="hero-navbar-dropdown-item" role="menuitem">
                Publications &amp; Awards
              </Link>
            </div>
          </div>

  <Link href="/projects" className="nav-link">Projects</Link>
  {/*<Link href="/blog" className="nav-link">Blog</Link>*/}
  <Link className="navbar-link" href="/photography">Photography</Link>
  <Link href="/contact" className="nav-link">Contact</Link>
</nav>

        {/* RIGHT */}
        <div className="navbar-right">
  
          {/* GitHub 
          <a
            href="https://github.com/joshv-13"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          */}
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/josh-visser"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
  
        </div>
        
      </header>

      {/* HERO CONTENT */}
      <div className="hero-content">
        {/* RIGHT-HALF PORTFOLIO INFO PANEL */}
        <div className="hero-book-panel">
          <div className="book-info-inner">
            {/* Credibility / status line 

            <div className="book-stars">
              <span>⚡</span>
              <span className="book-stars-text">
                5 publications · IEEE AP-S SDC 2025 (3rd place) · Radar/ML + RF sensing
              </span>
            </div>
            */}
            {/* Heading */}
            <h1 className="book-heading">
              Building sensing systems with
              <br />
              RF, AI, and signal processing.
            </h1>

            {/* Meta */}
            <div className="book-meta">
              <span style={{ fontWeight: 600, color: '#ffffff' }}>Josh Visser</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '1px',
                  height: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.61)',
                }}
              />
              <span>RF Sensing · Electromagnetics · Signal Processing</span>
            </div>

            {/* Description */}
            <p className="book-text">
              I’m a master’s student in Electrical and Computer Engineering at the
              University of Waterloo, with a background in Biomedical Engineering.
              My research combines radar sensing, electromagnetics, signal processing,
              and machine learning to develop sensing systems for real-world applications.
            </p>

            {/* Buttons */}
            <div className="book-actions">
              <a
                href="#projects"
                style={{
                  display: 'inline-block',
                  borderRadius: 9999,
                  padding: '0.55rem 1.6rem',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  textDecoration: 'none',
                }}
              >
                View projects
              </a>

              <a
                href="/Resume_JoshVisser.pdf"
                download="Resume_JoshVisser.pdf"
                style={{
                  display: 'inline-block',
                  borderRadius: 9999,
                  padding: '0.55rem 1.6rem',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  border: '1px solid rgba(255,255,255,0.7)',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                Download CV
              </a>

            </div>

      
          </div>
        </div>
      </div>
    </section>
  )
}
