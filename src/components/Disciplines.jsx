import { disciplines } from '../data/content.js'

export default function Disciplines() {
  return (
    <section id="art" className="section section-dark disciplines">
      <div className="container">
        <header className="section-head">
          <span className="kicker">The Saykan Curriculum</span>
          <h2 className="section-title">Four arts, one system</h2>
          <p className="section-intro">
            Saykan Combat covers every range — from long stick to the clinch, from breath work to street defence.
            Each discipline reinforces the others.
          </p>
        </header>
        <div className="disc-grid">
          {disciplines.map((d, i) => (
            <article key={d.id} className="disc-card" style={{ '--i': i }}>
              <div className="disc-card__media">
                <img src={d.image} alt={d.name} loading="lazy" />
                <span className="disc-card__index">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="disc-card__body">
                <span className="disc-card__sub">{d.sub}</span>
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
