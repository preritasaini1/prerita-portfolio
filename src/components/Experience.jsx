import useInView from '../hooks/useInView'
import './Experience.css'

const EXPERIENCES = [
  {
    role: 'Software Engineer Intern',
    company: 'Palanam Technology',
    location: 'NIT Delhi, India',
    period: 'June 2025 – July 2025',
    type: 'Internship',
    color: 'cyan',
    bullets: [
      'Built a RAG-based insurance policy analysis tool using FAISS, PyMuPDF, and Gemini API for clause-level retrieval, source-backed responses, and payout reasoning from PDF documents.',
      'Developed semantic search components and vectorized text structures to enable precise clause matching.',
      'Designed a retrieval pipeline that handles layout-aware parsing and processes documents efficiently.',
    ],
    stack: ['Python', 'FAISS', 'PyMuPDF', 'Gemini API', 'RAG', 'Vector Search'],
  },
  {
    role: 'E-Summit Hackathon Winner',
    company: 'IIT Roorkee',
    location: 'Roorkee, India',
    period: 'Feb 2025',
    type: 'Achievement',
    color: 'gold',
    bullets: [
      'Won 1st place among 300+ teams by building SciSPY — an AI research assistant with real-time arXiv paper retrieval and LLM-powered contextual Q&A.',
      'Created a stateless, API-driven backend with dynamic search filtering and a clean Streamlit UI.',
      'Integrated real-time arXiv indexing with Gemini API to summarize papers and answer queries accurately.',
    ],
    stack: ['Python', 'Streamlit', 'Gemini API', 'arXiv API', 'NLP'],
  },
]

export default function Experience() {
  const [ref, visible] = useInView()

  return (
    <section id="experience" className="experience">
      <div className="container">
        <p className="section-label">experience</p>
        <h2 className="section-title">Where I've <span>worked</span></h2>
        <div className="section-line" />

        <div ref={ref} className={`exp-timeline fade-in ${visible ? 'visible' : ''}`}>
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className={`exp-item exp-${exp.color}`}>
              <div className="exp-dot" />
              <div className="exp-card card">
                <div className="exp-header">
                  <div>
                    <span className={`exp-type-badge exp-type-${exp.color}`}>{exp.type}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">
                      {exp.company} · <span>{exp.location}</span>
                    </p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>

                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="exp-bullet-icon">▹</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="exp-stack">
                  {exp.stack.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
