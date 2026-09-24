'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import '../css/navbar.css'

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  if (isHome) return null

  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <header className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <Link href="/" className="navbar-name">
          Josh Visser
        </Link>
      </div>

      {/* CENTER */}
      <nav className="navbar-center">
        <div
          className="navbar-dropdown"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          
          {/* ABOUT DROPDOWN */}
          <button className="navbar-link navbar-link-button" aria-haspopup="true" aria-expanded={aboutOpen}>
            <Link href="/about" className="navbar-link">
              About
            </Link>
          </button>

          {aboutOpen && (
            <div className="navbar-dropdown-menu">
              <Link href="/about#biography" className="navbar-dropdown-item">
                Biography
              </Link>
              <Link href="/about#skills" className="navbar-dropdown-item">
                Skills
              </Link>
              <Link href="/about#experience" className="navbar-dropdown-item">
                Experience
              </Link>
              <Link href="/about#publications" className="navbar-dropdown-item">
                Publications & Awards
              </Link>
            </div>
          )}
        </div>

        <Link className="navbar-link" href="/projects">Projects</Link>
        {/*<Link className="navbar-link" href="/blog">Blog</Link>*/}
        <Link className="navbar-link" href="/photography">Photography</Link>
        <Link className="navbar-link" href="/contact">Contact</Link>
        
      </nav>

      {/* RIGHT */}
      <div className="navbar-right">

        {/* GitHub 
        <a
          href="https://github.com/YOUR_GITHUB_USERNAME"
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
          href="https://www.linkedin.com/in/josh-visser/"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

      </div>
    </header>
  )
}

