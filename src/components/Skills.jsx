import useInView from '../hooks/useInView'
import './Skills.css'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    icon: '⌨️',
    skills: ['Python', 'Java', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'AI / ML',
    icon: '🧠',
    skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'LangChain', 'NLP'],
  },
  {
    label: 'Web & Backend',
    icon: '🌐',
    skills: ['React.js', 'FastAPI', 'Node.js', 'Streamlit', 'Flask', 'Electron.js'],
  },
  {
    label: 'Data',
    icon: '📊',
    skills: ['NumPy', 'Pandas', 'MySQL', 'PostgreSQL', 'Firebase'],
  },
  {
    label: 'DevOps & Tools',
    icon: '🔧',
    skills: ['Git', 'Docker', 'Kubernetes', 'Azure', 'ArXiv API'],
  },
]

const SOFT = [
  'Problem-Solving',
  'Team Collaboration',
  'Analytical Thinking',
  'Quick Learning',
  'Communication',
]

export default function Skills() {
  const [ref, visible] = useInView()

  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label">skills</p>
        <h2 className="section-title">My <span>tech stack</span></h2>
        <div className="section-line" />

        <div ref={ref} className={`skills-inner fade-in ${visible ? 'visible' : ''}`}>
          <div className="skills-grid">
            {SKILL_GROUPS.map((group, gi) => (
              <div key={group.label} className="skill-group card" style={{ transitionDelay: `${gi * 0.08}s` }}>
                <div className="skill-group-header">
                  <span className="skill-group-icon">{group.icon}</span>
                  <span className="skill-group-label">{group.label}</span>
                </div>
                <div className="skill-tags">
                  {group.skills.map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="soft-skills-section">
            <h3 className="soft-title">Professional Skills</h3>
            <div className="soft-tags">
              {SOFT.map(s => (
                <span key={s} className="soft-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="leetcode-bar">
            <div className="lc-left">
              <span className="lc-icon">⚡</span>
              <div>
                <strong>450+ LeetCode Problems Solved</strong>
                <p>Consistently practicing DSA — arrays, DP, graphs, trees & more</p>
              </div>
            </div>
            <a
              href="https://leetcode.com/u/Prerita_1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View Profile ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
