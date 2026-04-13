import useInView from '../hooks/useInView'
import './Projects.css'

const FEATURED = {
  id: 'scispy',
  title: 'SciSPY',
  subtitle: 'AI Research Paper Retrieval Agent',
  date: 'Feb 2025',
  desc: `An AI-powered research agent that retrieves, analyzes, and summarizes scientific papers in seconds. 
  Built using Python, SciPy and the ArXiv API, it implements a heuristic framework for intelligent query-based 
  insight extraction from PDFs — automating what used to take researchers hours into a single command.`,
  highlights: [
    'Intelligent query-based insight extraction from academic PDFs',
    'Heuristic framework for automated research summarization',
    'ArXiv API integration for real-time paper discovery',
    'Concise, actionable insights generation pipeline',
  ],
  stack: ['Python', 'SciPy', 'ArXiv API', 'NLP', 'PDF Parsing'],
  github: 'https://github.com/preritasaini1/SciSPY',
  demo: 'https://scispy-agent.onrender.com/',   // ← paste your live demo URL here e.g. 'https://scispy.streamlit.app'
  color: '#00e5ff',
}

const PROJECTS = [
  {
    id: 'defect',
    title: 'AI Quality Assurance',
    subtitle: 'Real-Time Defect Detection System',
    date: 'Oct 2025',
    desc: 'TensorFlow-based autoencoder model detecting defects in manufacturing items in real-time via webcam or image uploads, with live confidence scoring and QR code traceability.',
    stack: ['TensorFlow', 'Flask', 'OpenCV', 'Python', 'Autoencoder'],
    github: 'https://github.com/preritasaini1',
    icon: '🔍',
  },
  {
    id: 'notes',
    title: 'Secure Notes App',
    subtitle: 'Cross-Platform Desktop App',
    date: 'May–Jun 2025',
    desc: 'Secure cross-platform note-taking app with password protection, unsaved change alerts, and multi-page navigation built using Electron.js.',
    stack: ['Electron.js', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/preritasaini1',
    icon: '🔐',
  },
]

export default function Projects() {
  const [featRef, featVisible] = useInView()
  const [gridRef, gridVisible] = useInView()

  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label">projects</p>
        <h2 className="section-title">Things I've <span>built</span></h2>
        <div className="section-line" />

        {/* Featured Project */}
        <div
          ref={featRef}
          className={`featured-project fade-in ${featVisible ? 'visible' : ''}`}
        >
          <div className="feat-badge">
            <span>★ Featured Project</span>
          </div>

          <div className="feat-inner">
            <div className="feat-left">
              <div className="feat-meta">
                <span className="tag">{FEATURED.date}</span>
              </div>
              <h3 className="feat-title">{FEATURED.title}</h3>
              <p className="feat-subtitle">{FEATURED.subtitle}</p>
              <p className="feat-desc">{FEATURED.desc}</p>

              <ul className="feat-highlights">
                {FEATURED.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="feat-bullet">▹</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="feat-stack">
                {FEATURED.stack.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>

              <div className="feat-actions">
                <a
                  href={FEATURED.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on GitHub ↗
                </a>
                {FEATURED.demo && (
                  <a
                    href={FEATURED.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>

            <div className="feat-right">
              <div className="feat-visual">
                <div className="feat-terminal">
                  <div className="terminal-bar">
                    <span className="t-dot red" /><span className="t-dot yellow" /><span className="t-dot green" />
                    <span className="t-title">scispy.py</span>
                  </div>
                  <div className="feat-code">
                    <p><span className="k">from</span> scispy <span className="k">import</span> ResearchAgent</p>
                    <br />
                    <p><span className="k">agent</span> = ResearchAgent(</p>
                    <p className="indent"><span className="s">source</span>=<span className="v">"arxiv"</span>,</p>
                    <p className="indent"><span className="s">summarize</span>=<span className="v">True</span></p>
                    <p>)</p>
                    <br />
                    <p>results = agent.query(</p>
                    <p className="indent"><span className="v">"transformer attention mechanisms"</span></p>
                    <p>)</p>
                    <br />
                    <p className="comment"># ✓ Found 12 papers</p>
                    <p className="comment"># ✓ Extracted key insights</p>
                    <p className="comment"># ✓ Summary generated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div
          ref={gridRef}
          className={`projects-grid fade-in ${gridVisible ? 'visible' : ''}`}
        >
          {PROJECTS.map((p, i) => (
            <div key={p.id} className="proj-card card" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="proj-top">
                <span className="proj-icon">{p.icon}</span>
                <div className="proj-links">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                    title="GitHub"
                  >
                    ↗
                  </a>
                </div>
              </div>
              <span className="tag proj-date">{p.date}</span>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-subtitle">{p.subtitle}</p>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-stack">
                {p.stack.map(s => (
                  <span key={s} className="proj-tech">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
