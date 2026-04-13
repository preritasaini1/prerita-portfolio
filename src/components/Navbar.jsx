import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const scrollY = window.scrollY + 120
      for (const { id } of [...links].reverse()) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        <span className="logo-bracket">&lt;</span>PS<span className="logo-bracket">/&gt;</span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://github.com/preritasaini1"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            GitHub ↗
          </a>
        </li>
      </ul>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
