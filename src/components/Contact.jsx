import { useState } from 'react'
import { site } from '../data/content.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const onSubmit = e => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\n\n${data.get('message')}`
    )
    window.location.href = `mailto:${site.email}?subject=Saykan%20Combat%20Enquiry&body=${body}`
    setSent(true)
  }
  return (
    <section id="contact" className="section section-dark contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="kicker">Get In Touch</span>
          <h2 className="section-title">Train, host, or just say hello</h2>
          <p className="lead">
            Whether you want to start training in Bray, host the Grandmaster at your own club, or simply ask a
            question about the art — drop us a message and we&apos;ll come back to you.
          </p>
          <ul className="contact-list">
            <li>
              <span className="lbl">Phone</span>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </li>
            <li>
              <span className="lbl">Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span className="lbl">Academy</span>
              <span>Masters Temple, Bray Bowl, Co. Wicklow, Ireland</span>
            </li>
            <li>
              <span className="lbl">Seminars</span>
              <span>By invitation, Ireland &amp; worldwide</span>
            </li>
            <li>
              <span className="lbl">Facebook</span>
              <a href={site.facebook} target="_blank" rel="noreferrer">Saykan Combat on Facebook</a>
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            <span>Name</span>
            <input name="name" required placeholder="Your name" />
          </label>
          <label>
            <span>Phone</span>
            <input name="phone" type="tel" placeholder="Optional" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={5} required placeholder="Tell us a little about yourself, or describe the seminar you'd like to host" />
          </label>
          <button type="submit" className="btn btn-primary">
            {sent ? 'Opening email…' : 'Send Enquiry'} <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  )
}
