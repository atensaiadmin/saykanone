import { useState } from 'react'
import { faqs } from '../data/content.js'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section faq">
      <div className="container faq-grid">
        <div className="faq-intro">
          <span className="kicker">Common Questions</span>
          <h2 className="section-title">Before your first class</h2>
          <p>If anything else is on your mind, just call or email — we are happy to chat before you commit.</p>
        </div>
        <ul className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={f.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span>{f.q}</span>
                  <i aria-hidden="true">{isOpen ? '–' : '+'}</i>
                </button>
                <div className="faq-item__body"><p>{f.a}</p></div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
