import { academy, site } from '../data/content.js'

export default function Classes() {
  return (
    <section id="classes" className="section classes">
      <div className="container">
        <header className="section-head">
          <span className="kicker">Train With Us</span>
          <h2 className="section-title">Weekly classes at our Bray HQ</h2>
          <p className="section-intro">
            Saykan Combat is taught year-round at our home academy in Bray. Adults 18+. Beginners always welcome —
            bring a loose top and tracksuit bottoms, that&apos;s it.
          </p>
        </header>
        <div className="academy-card">
          <div className="academy-card__head">
            <span className="dot" />
            <div>
              <h3>{academy.name}</h3>
              <p className="academy-card__addr">{academy.address}</p>
            </div>
          </div>
          <dl className="academy-card__meta">
            <div><dt>When</dt><dd>{academy.schedule}</dd></div>
            <div><dt>Curriculum</dt><dd>{academy.curriculum}</dd></div>
            <div><dt>Instructor</dt><dd>{academy.instructor}</dd></div>
          </dl>
          <ul className="academy-card__notes">
            {academy.notes.map(n => <li key={n}>{n}</li>)}
          </ul>
          <div className="academy-card__cta">
            <a className="btn btn-primary" href={`tel:${site.phone.replace(/\s/g, '')}`}>
              Call {site.phone} <span className="arrow">→</span>
            </a>
            <a className="btn btn-link" href={`mailto:${site.email}`}>Email the academy</a>
          </div>
        </div>
      </div>
    </section>
  )
}
