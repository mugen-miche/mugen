import { useEffect, useRef } from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current.classList.add('visible') },
      { threshold: 0.05 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projets" className="section fade-in" ref={ref}>
      <div className="section-label">Projets</div>
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <div className="project-year">{project.year}</div>
          <div className="project-body">
            <div className="project-header">
              <span className="project-name">{project.name}</span>
              <span className="project-arrow">↗</span>
              <span className={`project-status ${project.status === 'Livré' ? 'status-done' : 'status-wip'}`}>
                {project.status}
              </span>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.stack.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
