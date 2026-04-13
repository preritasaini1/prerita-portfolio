import { useState } from 'react'
import useInView from '../hooks/useInView'
import './Contact.css'

export default function Contact() {
  const [ref, visible] = useInView()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('preritasaini1@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-label">contact</p>
        <h2 className="section-title">Let's <span>connect</span></h2>
        <div className="section-line" />

        <div ref={ref} className={`contact-inner fade-in ${visible ? 'visible' : ''}`}>
          <div className="contact-left">
            <p className="contact-intro">
              I'm actively looking for opportunities in AI/ML engineering and software development.
              Whether you have a project in mind, a role to offer, or just want to say hi —
              my inbox is always open!
            </p>

            <div className="contact-links">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div className="contact-info">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">preritasaini1@gmail.com</span>
                </div>
                <button className="copy-btn" onClick={copyEmail}>
                  {copied ? '✓ Copied!' : 'Copy'}
                </button>
              </div>

              <a
                href="https://www.linkedin.com/in/prerita-saini-b67393284/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item contact-item-link"
              >
                <span className="contact-icon">💼</span>
                <div className="contact-info">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">prerita-saini</span>
                </div>
                <span className="contact-arrow">↗</span>
              </a>

              <a
                href="https://github.com/preritasaini1"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item contact-item-link"
              >
                <span className="contact-icon">🐙</span>
                <div className="contact-info">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">preritasaini1</span>
                </div>
                <span className="contact-arrow">↗</span>
              </a>

              <a
                href="https://leetcode.com/u/Prerita_1"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item contact-item-link"
              >
                <span className="contact-icon">⚡</span>
                <div className="contact-info">
                  <span className="contact-label">LeetCode</span>
                  <span className="contact-value">Prerita_1</span>
                </div>
                <span className="contact-arrow">↗</span>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-terminal card">
              <div className="terminal-bar">
                <span className="t-dot red" /><span className="t-dot yellow" /><span className="t-dot green" />
                <span className="t-title">message.sh</span>
              </div>
              <div className="ct-body">
                <p className="ct-line">
                  <span className="ct-prompt">$</span>{' '}
                  <span className="ct-cmd">send --to preritasaini1@gmail.com</span>
                </p>
                <div className="ct-box">
                  <p className="ct-field">
                    <span className="ct-key">Subject:</span>
                    <span className="ct-val">Let's collaborate on AI!</span>
                  </p>
                  <p className="ct-field">
                    <span className="ct-key">From:</span>
                    <span className="ct-val">you@company.com</span>
                  </p>
                  <p className="ct-field">
                    <span className="ct-key">Body:</span>
                    <span className="ct-val">Hi Prerita, I'd love to...</span>
                  </p>
                </div>
                <p className="ct-line ct-success">
                  <span className="ct-prompt">✓</span> Response guaranteed within 24h
                </p>
              </div>
            </div>

            <a href="mailto:preritasaini1@gmail.com" className="btn btn-primary email-btn">
              📧 Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
