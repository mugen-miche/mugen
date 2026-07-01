import { useEffect, useRef } from 'react'

export default function About() {
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
    <section id="about" className="section fade-in" ref={ref}>
      <div className="section-label">À propos</div>
      <p className="body-text">
        Je suis <span className="highlight">Parfait Michel</span>, développeur web freelance
        à Cotonou, Bénin. Je construis des apps web sous le handle{' '}
        <span className="highlight">mugen</span> — "infini" en japonais.
      </p>
      <p className="body-text">
        Mon approche : comprendre le vrai problème avant d'écrire la première ligne de code.
        J'ai livré des apps pour des imprimeries, des boutiques, des commerçants —
        des outils utilisés au quotidien par de vraies personnes.
      </p>
      <p className="body-text">
        Étudiant à l'<span className="highlight">IFRI (Université d'Abomey-Calavi)</span>,
        en gap year pour construire des produits qui servent l'Afrique de l'Ouest.
      </p>
    </section>
  )
}
