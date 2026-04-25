import { useState } from 'react'
import { site } from '../data/content.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#art', label: 'The Art' },
  { href: '#grandmaster', label: 'Grandmaster' },
  { href: '#classes', label: 'Classes' },
  { href: '#seminars', label: 'Seminars' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Header({ scrolled }) {
  const [open, setOpen] = useState(false)
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">
            <img src="assets/img/logo.jpg" alt="Saykan Combat" />
          </span>
          <span className="brand-text">
            <strong>{site.brand}</strong>
            <em>Ireland</em>
          </span>
        </a>
        <nav className={`nav ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)}>
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn btn-ghost header-cta">
          {site.phone}
        </a>
        <button
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label="Menu"
          onClick={() => setOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
