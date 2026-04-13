import useInView from '../hooks/useInView'
import './Experience.css'

const EXPERIENCES = [
  {
    role: 'Software Engineer Intern',
    company: 'Palanam Technology',
    location: 'NIT Delhi, India',
    period: 'June – July 2025',
    type: 'Internship',
    color: 'cyan',
    bullets: [
      'Developed NLP-based solutions to automate tasks and extract actionable insights from textual data using Python',
      'Worked on real-world text processing pipelines for enterprise use cases',
      'Collaborated with cross-functional teams at NIT Delhi campus',
    ],
    stack: ['Python', 'NLP', 'Text Processing'],
  },
  {
    role: 'E-Summit Hackathon — 1st Place',
    company: 'IIT Roorkee',
    location: 'Roorkee, India',
    period: 'February 2025',
    type: 'Achievement',
    color: 'gold',
    bullets: [
      'Secured 1st Position among 300+ teams at IIT Roorkee\'s E-Summit Hackathon',
      'Competed against teams from top engineering colleges across India',
      'Demonstrated end-to-end AI solution development under time pressure',
    ],
    stack: ['AI/ML', 'Competitive'],
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
