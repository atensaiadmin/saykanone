import { seminars } from '../data/content.js'

export default function Seminars() {
  return (
    <section id="seminars" className="section seminars">
      <div className="container">
        <header className="section-head">
          <span className="kicker">Seminars Worldwide</span>
          <h2 className="section-title">Hosting the Grandmaster</h2>
          <p className="section-intro">{seminars.intro}</p>
        </header>
        <div className="sem-grid">
          {seminars.highlights.map(e => (
            <article key={e.title} className="sem-card">
              <div className="sem-card__media">
                <img src={e.image} alt={e.title} loading="lazy" />
                <span className="sem-card__where">{e.where}</span>
              </div>
              <div className="sem-card__body">
                <h3>{e.title}</h3>
                <p>{e.blurb}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="sem-cta">
          <a className="btn btn-primary" href={seminars.cta.href}>
            {seminars.cta.label} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
