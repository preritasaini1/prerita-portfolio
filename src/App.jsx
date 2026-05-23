import { useEffect, useRef } from 'react'
import Cursor from './components/Cursor.jsx'
import ParticleNetwork from './components/ParticleNetwork.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Cursor />
      {/* Scanline overlay */}
      <div className="scanline-overlay" />
      {/* Particle Network Animation background */}
      <ParticleNetwork />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
