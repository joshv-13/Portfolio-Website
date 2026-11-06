'use client'

import React from 'react'
import Link from 'next/link'
import '../css/footer.css'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-title">Josh Visser</h3>
          <p className="footer-tagline">
            A portfolio of work, ideas, and experiments.
          </p>
        </div>

        <div className="footer-right">
          <nav className="footer-nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            {/* <Link href="/blog">Blog</Link> */}
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
