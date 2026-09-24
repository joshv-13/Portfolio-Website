'use client'
import React from 'react'
import '../css/footer.css'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-brand">
          <h3 className="footer-title">Josh Visser</h3>
          <p className="footer-tagline">
            A portfolio of work, ideas, and experiments.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="footer-right">
          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            {/*<a href="/blog">Blog</a>*/}
            <a href="/contact">Contact</a>
          </nav>
        {/* 
          <div className="footer-copy">
            © {new Date().getFullYear()} Josh Visser — All rights reserved.
          </div>
        */}
        </div>
        
      </div>
    </footer>
  )
}
