import useInView from '../hooks/useInView'
import './About.css'

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section id="about" className="about">
      <div className="container">
        <div ref={ref} className={`about-inner fade-in ${visible ? 'visible' : ''}`}>

          <div className="about-left">
            <p className="section-label">about me</p>
            <h2 className="section-title">Building AI that <span>matters</span></h2>
            <div className="section-line" />

            <p className="about-text">
              I'm Prerita Saini, a BTech Computer Science student at GLA University
              specialising in AI & Data Analytics. I secured{' '}
              <strong>1st place at IIT Roorkee's E-Summit Hackathon</strong> out of 300+ teams,
              and I've shipped production-grade ML systems ranging from real-time defect
              detection to intelligent research agents.
            </p>
            <p className="about-text">
              I love solving hard problems — whether it's squeezing accuracy out of a
              TensorFlow model, building clean NLP pipelines, or grinding LeetCode at 2 am.
              I believe great AI isn't just technically sound; it solves real problems for
              real people.
            </p>

            <div className="about-links">
              <a href="https://www.linkedin.com/in/prerita-saini-b67393284/" target="_blank" rel="noopener noreferrer" className="about-link">
                LinkedIn ↗
              </a>
              <a href="https://github.com/preritasaini1" target="_blank" rel="noopener noreferrer" className="about-link">
                GitHub ↗
              </a>
              <a href="https://leetcode.com/u/Prerita_1" target="_blank" rel="noopener noreferrer" className="about-link">
                LeetCode ↗
              </a>
            </div>
          </div>

          <div className="about-right">
            {/* Education — University only */}
            <div className="edu-card card">
              <div className="edu-header">
                <div className="edu-icon-wrap">🎓</div>
                <div className="edu-info">
                  <h3>GLA University, Mathura</h3>
                  <p>BTech Computer Science — AI & Data Analytics</p>
                </div>
                <span className="edu-year">2023 – 2027</span>
              </div>
              <div className="edu-meta">
                <span className="tag">CGPA: 8.4</span>
              </div>
            </div>

            {/* Hackathon highlight */}
            <div className="award-card card">
              <div className="award-left">
                <div className="award-trophy">🏆</div>
                <div>
                  <h3 className="award-title">E-Summit Hackathon — 1st Place</h3>
                  <p className="award-sub">IIT Roorkee &middot; Feb 2025</p>
                  <p className="award-detail">Ranked #1 among <strong>300+ competing teams</strong> from top engineering colleges across India.</p>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="facts-row">
              <div className="fact-item">
                <span className="fact-num">450+</span>
                <span className="fact-label">LeetCode solved</span>
              </div>
              <div className="fact-div" />
              <div className="fact-item">
                <span className="fact-num">8.4</span>
                <span className="fact-label">CGPA</span>
              </div>
              <div className="fact-div" />
              <div className="fact-item">
                <span className="fact-num">4</span>
                <span className="fact-label">Certifications</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
