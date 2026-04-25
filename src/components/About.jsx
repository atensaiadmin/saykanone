import { about } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-media">
          <img src="assets/img/about/about.jpg" alt="Saykan Combat training" />
          <div className="about-media__shape" aria-hidden="true" />
        </div>
        <div className="about-copy">
          <span className="kicker">{about.kicker}</span>
          <h2 className="section-title">{about.title}</h2>
          {about.body.map((p, i) => <p key={i} className="lead">{p}</p>)}
          <ul className="stats">
            {about.stats.map(s => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
