import { useEffect, useRef } from 'react'

const STACK = [
  { name: 'React',       desc: 'interfaces web' },
  { name: 'Supabase',    desc: 'base de données & auth' },
  { name: 'Tailwind CSS',desc: 'design rapide' },
  { name: 'Vercel',      desc: 'déploiement' },
  { name: 'Lovable',     desc: 'prototypage rapide' },
  { name: 'Claude IA',   desc: 'workflow IA' },
]

export default function Stack() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current.classList.add('visible') },
      { threshold: 0.1 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stack" className="section fade-in" ref={ref}>
      <div className="section-label">Stack</div>
      <div className="stack-grid">
        {STACK.map(item => (
          <div key={item.name} className="stack-item">
            <span className="stack-arrow">▹</span>
            <div>
              <span className="stack-name">{item.name}</span>
              <span className="stack-desc"> — {item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
