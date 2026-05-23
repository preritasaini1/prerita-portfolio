import useInView from '../hooks/useInView'
import './Certifications.css'

const CERTS = [
  {
    title: 'Microsoft Azure AI Fundamentals',
    code: 'AI-900',
    issuer: 'Microsoft',
    date: 'June 2025',
    icon: '🪟',
    color: '#00a4ef',
    badge: 'Microsoft',
    link: '',
  },
  {
    title: 'IBM Artificial Intelligence',
    code: 'IBM AI',
    issuer: 'IBM',
    date: 'October 2024',
    icon: '🔵',
    color: '#1f70c1',
    badge: 'IBM',
    link: '',
  },
  {
    title: 'IBM Python for Data Science & AI',
    code: 'Python AI',
    issuer: 'IBM',
    date: 'December 2023',
    icon: '🐍',
    color: '#1f70c1',
    badge: 'IBM',
    link: '',
  },
]

const HR_CERTS = [
  {
    title: 'Problem Solving',
    level: 'Verified Badge',
    link: 'https://www.hackerrank.com/profile/preritasaini1',
  },
  {
    title: 'Java',
    level: 'Verified Badge',
    link: 'https://www.hackerrank.com/profile/preritasaini1',
  },
  {
    title: 'Python',
    level: 'Verified Badge',
    link: 'https://www.hackerrank.com/profile/preritasaini1',
  },
  {
    title: 'SQL',
    level: 'Verified Badge',
    link: 'https://www.hackerrank.com/profile/preritasaini1',
  },
]

export default function Certifications() {
  const [ref, visible] = useInView()
  const [hrRef, hrVisible] = useInView()

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <p className="section-label">certifications</p>
        <h2 className="section-title">What I've <span>earned</span></h2>
        <div className="section-line" />

        {/* Main certs grid */}
        <div ref={ref} className={`certs-grid fade-in ${visible ? 'visible' : ''}`}>
          {CERTS.map((cert, i) => (
            <div
              key={i}
              className="cert-card card"
              style={{
                transitionDelay: `${i * 0.09}s`,
                '--cert-color': cert.color,
              }}
            >
              <div className="cert-accent" />
              <div className="cert-top">
                <span className="cert-icon">{cert.icon}</span>
                <span className="cert-badge">{cert.badge}</span>
              </div>
              <span className="cert-code tag">{cert.code}</span>
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* HackerRank verified skills */}
        <div ref={hrRef} className={`hr-section fade-in ${hrVisible ? 'visible' : ''}`}>
          <div className="hr-header">
            <div className="hr-logo-row">
              {/* HackerRank green square logo */}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect width="22" height="22" rx="4" fill="#2EC866"/>
                <path d="M11 4.5C7.41 4.5 4.5 7.41 4.5 11C4.5 14.59 7.41 17.5 11 17.5C14.59 17.5 17.5 14.59 17.5 11C17.5 7.41 14.59 4.5 11 4.5ZM13.5 13.5H12.25V11.75H9.75V13.5H8.5V8.5H9.75V10.5H12.25V8.5H13.5V13.5Z" fill="white"/>
              </svg>
              <span className="hr-label">HackerRank</span>
              <span className="hr-sublabel">Verified Skills</span>
            </div>
            <a
              href="https://www.hackerrank.com/profile/preritasaini1"
              target="_blank"
              rel="noopener noreferrer"
              className="hr-profile-link"
            >
              View Profile ↗
            </a>
          </div>

          <div className="hr-cards">
            {HR_CERTS.map((hc, i) => (
              <a
                key={i}
                href={hc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hr-card"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="hr-card-icon">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect width="28" height="28" rx="6" fill="#2EC866"/>
                    <path d="M14 6C9.58 6 6 9.58 6 14C6 18.42 9.58 22 14 22C18.42 22 22 18.42 22 14C22 9.58 18.42 6 14 6ZM17 17H15.5V14.5H12.5V17H11V11H12.5V13.25H15.5V11H17V17Z" fill="white"/>
                  </svg>
                </div>
                <div className="hr-card-body">
                  <p className="hr-card-title">{hc.title}</p>
                  <p className="hr-card-level">({hc.level})</p>
                </div>
                <div className="hr-verified">
                  <span className="hr-check">✓</span>
                  <span>Verified</span>
                  <span className="hr-skill-tag">SKILL</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
