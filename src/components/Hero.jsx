import { hero } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: 'url(assets/img/slider/hero.jpg)' }}
        aria-hidden="true"
      />
      <div className="hero-fade" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="hero-title">
            <span className="hero-title__main">{hero.title[0]}</span>
            <span className="hero-title__accent">{hero.title[1]}</span>
          </h1>
          <p className="hero-sub">{hero.subtitle}</p>
          <p className="hero-lead">{hero.lead}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <span className="arrow">→</span>
            </a>
            <a className="btn btn-outline" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="hero-figure">
          <img src="assets/img/slider/image1.jpg" alt="Saykan Combat training group" />
          <div className="hero-badge">
            <strong>Est.</strong>
            <span>Lineage of GM Llanera</span>
          </div>
        </div>
      </div>
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee__track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              Single Stick · Double Stick · Daga · Espada y Daga · Mano Mano · Likasan · Panantukan · Sikaran ·{' '}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
