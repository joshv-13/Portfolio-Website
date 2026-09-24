'use client'

import React, { useState } from 'react'
import './contact.css'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        // Try to surface the server error (helps debug)
        const data = await res.json().catch(() => ({}))
        console.error('Contact API error:', res.status, data)
        throw new Error(data?.error || `Request failed (${res.status})`)
      }

      setStatus('sent')
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="contact-page">
      <div className="contact-container">
        {/* LEFT COLUMN */}
        <section className="contact-left">
          <p className="contact-eyebrow">Contact</p>
          <h1 className="contact-title">Get in touch</h1>
          <p className="contact-lead">
            For research, project inquiries, or anything else — send a note and I’ll reply when I can.
          </p>

          <div className="contact-card">
            <div className="contact-row">
              <div className="contact-label">Name</div>
              <div className="contact-value">Josh Visser</div>
            </div>

            <div className="contact-row">
              <div className="contact-label">Email</div>
              <div className="contact-value">
                <a className="contact-link" href="mailto:joshdvisser@gmail.com">
                  joshdvisser@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-label">Location</div>
              <div className="contact-value">Toronto, Canada</div>
            </div>

            <div className="contact-row">
              <div className="contact-label">Links</div>
              <div className="contact-links">
                <a
                  className="contact-pill"
                  href="https://www.linkedin.com/in/josh-visser/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="contact-pill"
                  href="https://github.com/joshv-13"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN — FORM */}
        <section className="contact-right" aria-labelledby="contact-form-title">
          <div className="contact-form-shell">
            <div className="contact-form-header">
              <h2 id="contact-form-title" className="contact-form-title">
                Message
              </h2>
            </div>

            {status === 'sent' ? (
              <div className="contact-success" role="status" aria-live="polite">
                <div className="contact-success-title">Message Sent</div>
                <p className="contact-success-text">
                  Thanks for reaching out — I’ll get back to you as soon as I can
                </p>
                <button className="contact-secondary-btn" onClick={() => setStatus('idle')}>
                  Write another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit}>
                <label className="contact-field">
                  <span className="contact-field-label">Your name</span>
                  <input className="contact-input" name="name" type="text" placeholder="Jane Doe" required />
                </label>

                <label className="contact-field">
                  <span className="contact-field-label">Your email</span>
                  <input className="contact-input" name="email" type="email" placeholder="jane@domain.com" required />
                </label>

                <label className="contact-field">
                  <span className="contact-field-label">Subject</span>
                  <input
                    className="contact-input"
                    name="subject"
                    type="text"
                    placeholder="Collaboration / Question"
                    required
                  />
                </label>

                <label className="contact-field">
                  <span className="contact-field-label">Message</span>
                  <textarea
                    className="contact-textarea"
                    name="message"
                    placeholder="Write your message…"
                    rows={8}
                    required
                  />
                </label>

                <div className="contact-actions">
                  <button className="contact-primary-btn" type="submit" disabled={loading}>
                    {loading ? 'Sending…' : 'Send message'}
                  </button>

                  <a className="contact-secondary-btn" href="mailto:joshdvisser@gmail.com">
                    Email directly
                  </a>
                </div>

                {status === 'error' && (
                  <p className="contact-error">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
