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
              I'm Prerita Saini, a B.Tech Computer Science student at GLA University, Mathura, specializing in AI & Data Analytics. I'm an AI/ML-focused software developer with hands-on experience building RAG systems, agentic AI workflows, and production-ready, full-stack applications.
            </p>
            <p className="about-text">
              I secured <strong>1st place at IIT Roorkee's E-Summit Hackathon</strong> out of 300+ teams by building SciSPY — an AI research assistant with real-time arXiv paper retrieval. I love solving hard challenges, optimizing model architectures, and building clean, impactful backend pipelines.
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
                  <p>B.Tech in Computer Science (Honors in AI & Data Analytics)</p>
                </div>
                <span className="edu-year">Aug 2023 – May 2027</span>
              </div>
              <div className="edu-meta">
                <span className="tag">CPI: 8.4</span>
              </div>
            </div>

            <div className="edu-card card">
              <div className="edu-header">
                <div className="edu-icon-wrap">🏫</div>
                <div className="edu-info">
                  <h3>Kendriya Vidyalaya Refinery Nagar, Mathura</h3>
                  <p>Class XII (CBSE): 84.6% · Class X (CBSE): 98.2%</p>
                </div>
                <span className="edu-year">Completed 2023</span>
              </div>
              <div className="edu-meta">
                <span className="tag">Class XII: 84.6%</span>
                <span className="tag">Class X: 98.2%</span>
              </div>
            </div>

            {/* Hackathon highlight */}
            <div className="award-card card">
              <div className="award-left">
                <div className="award-trophy">🏆</div>
                <div>
                  <h3 className="award-title">E-Summit Hackathon — 1st Place</h3>
                  <p className="award-sub">IIT Roorkee &middot; Feb 2025</p>
                  <p className="award-detail">Ranked #1 among <strong>300+ competing teams</strong> by building SciSPY for real-time arXiv retrieval and contextual Q&A.</p>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="facts-row">
              <div className="fact-item">
                <span className="fact-num">650+</span>
                <span className="fact-label">LeetCode solved</span>
              </div>
              <div className="fact-div" />
              <div className="fact-item">
                <span className="fact-num">8.4</span>
                <span className="fact-label">CPI</span>
              </div>
              <div className="fact-div" />
              <div className="fact-item">
                <span className="fact-num">3</span>
                <span className="fact-label">Certifications</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
