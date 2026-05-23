import useInView from '../hooks/useInView'
import './Projects.css'

const FEATURED_PROJECTS = [
  {
    id: 'mallmind',
    title: 'MallMind',
    subtitle: 'Agentic Shopping Concierge',
    date: 'Jan 2025',
    desc: 'A multi-agent AI shopping concierge featuring JWT authentication and a GraphQL/Apollo backend. Deployed live on Vercel.',
    highlights: [
      'Implemented multi-agent workflows for product recommendation, mall navigation, and real-time deal comparison.',
      'Integrated OpenAI-powered virtual try-on features to enhance user shopping experience.',
      'Optimized backend schemas using GraphQL, Node.js, and MongoDB for fast data retrieval.',
    ],
    stack: ['Next.js', 'Node.js', 'GraphQL', 'MongoDB', 'OpenAI API', 'JWT'],
    github: 'https://github.com/preritasaini1/MallMind',
    demo: 'https://mall-mind.vercel.app/',
    image: '/Photos/Dashboard.png',
    color: '#00e5ff',
    terminalTitle: 'mallmind-nav.js',
    terminalLines: (
      <>
        <p><span className="k">const</span> NAVIGATE_MALL = gql`</p>
        <p className="indent">query GetNavigation($from: String!) &#123;</p>
        <p className="indent-2">navigation(start: $from) &#123;</p>
        <p className="indent-3">path, estTime</p>
        <p className="indent-2">&#125;</p>
        <p className="indent">&#125;</p>
        <p>`;</p>
        <br />
        <p><span className="k">const</span> res = <span className="k">await</span> client.query(&#123; query: NAVIGATE_MALL &#125;);</p>
        <br />
        <p className="comment">// ✓ Multi-agent workflows active</p>
        <p className="comment">// ✓ Virtual try-on ready (OpenAI)</p>
        <p className="comment">// ✓ GraphQL query successful</p>
      </>
    )
  },
  {
    id: 'scispy',
    title: 'SciSPY',
    subtitle: 'AI Research Intelligence Assistant',
    date: 'Feb 2025',
    desc: 'A full-stack research assistant that integrates the arXiv Open API for real-time paper retrieval with Gemini API for contextual AI-powered Q&A on academic papers.',
    highlights: [
      'Architected a stateless, API-driven backend with dynamic search filters and clean Streamlit UI.',
      'Deployed on Render with a live demo supporting contextual Q&A on academic PDFs.',
      'Integrated Gemini API for contextual paper summarization and natural-language Q&A.',
    ],
    stack: ['Python', 'Streamlit', 'Gemini API', 'arXiv API', 'RAG'],
    github: 'https://github.com/preritasaini1/SciSPY',
    demo: 'https://scispy-agent.onrender.com/',
    image: '/images/Search.png',
    color: '#00e5ff',
    terminalTitle: 'scispy.py',
    terminalLines: (
      <>
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
      </>
    )
  }
]

const PROJECTS = [
  {
    id: 'defect',
    title: 'AI Quality Assurance',
    subtitle: 'Real-Time Defect Detection System',
    date: 'Oct 2025',
    desc: 'Developed a manufacturing defect detection system using TensorFlow autoencoder models with confidence scoring, defect visualization overlays, and QR-based product traceability. Supported by a Flask dashboard for live webcam inspections.',
    stack: ['TensorFlow', 'Keras', 'Flask', 'OpenCV', 'Python'],
    github: 'https://github.com/preritasaini1/AI_Quality_Assurance',
    image: '/screenshots/Pass.png',
    icon: '🔍',
  },
  {
    id: 'carpool',
    title: 'Smart Carpooling System',
    subtitle: 'Full-Stack Ride-Sharing Platform',
    date: 'Jul 2024',
    desc: 'Developed a full-stack ride-sharing platform with secure user authentication, real-time booking workflows, and relational data management using MySQL. Optimized database queries for matching passengers and drivers.',
    stack: ['Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/preritasaini1/Carpooling-System',
    image: '/images/carpooling.png',
    icon: '🚗',
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

        {/* Featured Projects */}
        <div
          ref={featRef}
          className={`featured-projects-container fade-in ${featVisible ? 'visible' : ''}`}
        >
          {FEATURED_PROJECTS.map((p, idx) => (
            <div
              key={p.id}
              className={`featured-project ${idx % 2 !== 0 ? 'alt' : ''}`}
              style={{ marginBottom: idx === FEATURED_PROJECTS.length - 1 ? '4rem' : '3rem' }}
            >
              <div className="feat-badge">
                <span>★ Featured Project</span>
              </div>

              <div className="feat-inner">
                <div className="feat-left">
                  <div className="feat-meta">
                    <span className="tag">{p.date}</span>
                  </div>
                  <h3 className="feat-title">{p.title}</h3>
                  <p className="feat-subtitle">{p.subtitle}</p>
                  <p className="feat-desc">{p.desc}</p>

                  <ul className="feat-highlights">
                    {p.highlights.map((h, i) => (
                      <li key={i}>
                        <span className="feat-bullet">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="feat-stack">
                    {p.stack.map(s => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>

                  <div className="feat-actions">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View on GitHub ↗
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
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
                    {p.image ? (
                      <div className="feat-browser">
                        <div className="browser-bar">
                          <span className="t-dot red" /><span className="t-dot yellow" /><span className="t-dot green" />
                          <span className="browser-url">{p.title.toLowerCase()}.ai/dashboard</span>
                        </div>
                        <div className="browser-content">
                          <img src={p.image} alt={`${p.title} Dashboard`} className="browser-img" />
                        </div>
                      </div>
                    ) : (
                      <div className="feat-terminal">
                        <div className="terminal-bar">
                          <span className="t-dot red" /><span className="t-dot yellow" /><span className="t-dot green" />
                          <span className="t-title">{p.terminalTitle}</span>
                        </div>
                        <div className="feat-code">
                          {p.terminalLines}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div
          ref={gridRef}
          className={`projects-grid fade-in ${gridVisible ? 'visible' : ''}`}
        >
          {PROJECTS.map((p, i) => (
            <div key={p.id} className="proj-card card" style={{ transitionDelay: `${i * 0.1}s`, padding: p.image ? '0' : '' }}>
              {p.image && (
                <div className="proj-card-img-wrap">
                  <img src={p.image} alt={p.title} className="proj-card-img" />
                </div>
              )}
              <div className="proj-card-body" style={{ padding: p.image ? '1.6rem 1.8rem' : '0' }}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
