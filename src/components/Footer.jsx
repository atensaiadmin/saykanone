import { site } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href="#top" className="brand brand--footer">
            <span className="brand-mark">
              <img src="assets/img/logo.jpg" alt="Saykan Combat" />
            </span>
            <span className="brand-text"><strong>{site.brand}</strong><em>Ireland</em></span>
          </a>
          <p className="muted">{site.tagline}. An art for life — combat, health and respect.</p>
        </div>
        <div>
          <h4>Visit</h4>
          <ul className="footer-list">
            <li>Masters Temple — Bray, Co. Wicklow</li>
            <li>Seminars on invitation, worldwide</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="footer-list">
            <li><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} {site.brand} Ireland. All rights reserved.</span>
          <span className="muted">Lineage: Grandmaster Modesto "Ding" Llanera</span>
        </div>
      </div>
    </footer>
  )
}
