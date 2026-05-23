import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const roles = [
  'AI/ML-focused Developer',
  'Agentic AI Architect',
  'IIT Roorkee Hackathon Winner',
  'Software Engineer Intern',
  '650+ LeetCode Solved',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const role = roles[roleIndex]
    let i = 0
    let timeout

    if (typing) {
      const type = () => {
        if (i <= role.length) {
          setDisplayed(role.slice(0, i))
          i++
          timeout = setTimeout(type, 60)
        } else {
          setTimeout(() => setTyping(false), 1800)
        }
      }
      type()
    } else {
      let j = role.length
      const erase = () => {
        if (j >= 0) {
          setDisplayed(role.slice(0, j))
          j--
          timeout = setTimeout(erase, 35)
        } else {
          setRoleIndex(prev => (prev + 1) % roles.length)
          setTyping(true)
        }
      }
      erase()
    }

    return () => clearTimeout(timeout)
  }, [roleIndex, typing])

  useEffect(() => {
    const id = setInterval(() => setShowCursor(p => !p), 500)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" className="hero">
      {/* Animated orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="container hero-content">
        <div className="hero-terminal">
          <div className="terminal-bar">
            <span className="t-dot red" />
            <span className="t-dot yellow" />
            <span className="t-dot green" />
            <span className="t-title">prerita@portfolio ~ </span>
          </div>
          <div className="terminal-body">
            <p className="t-line"><span className="t-prompt">$</span> whoami</p>
            <p className="t-line t-output">Prerita Saini</p>
            <p className="t-line"><span className="t-prompt">$</span> cat role.txt</p>
            <p className="t-line t-output t-role">
              {displayed}
              <span className={`t-cursor ${showCursor ? 'visible' : ''}`}>▋</span>
            </p>
            <p className="t-line"><span className="t-prompt">$</span> echo $LOCATION</p>
            <p className="t-line t-output">GLA University, Mathura · India</p>
            <p className="t-line t-blink"><span className="t-prompt">$</span> <span className="t-cursor-small">█</span></p>
          </div>
        </div>

        <div className="hero-text">
          <p className="hero-greeting">Hello World, I'm</p>
          <h1 className="hero-name">
            Prerita<br />
            <span className="name-accent">Saini</span>
          </h1>
          <p className="hero-desc">
            AI/ML-focused software developer building RAG systems, agentic AI workflows, and production-ready, full-stack applications. Winner of IIT Roorkee's E-Summit Hackathon.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">650+</span>
              <span className="stat-label">LeetCode</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">300+</span>
              <span className="stat-label">Teams Beaten</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">8.4</span>
              <span className="stat-label">CPI</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects →</a>
            <a
              href="https://drive.google.com/file/d/1rs4BNngJmaqPnfScUggG6q-JV25rVRpk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Resume ↗
            </a>
            <a
              href="https://github.com/preritasaini1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/prerita-saini-b67393284/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </a>
    </section>
  )
}
