import { principles } from '../data/content.js'

export default function Principles() {
  return (
    <section className="section principles">
      <div className="container">
        <header className="section-head section-head--center">
          <span className="kicker">Our Principles</span>
          <h2 className="section-title">An art for life</h2>
        </header>
        <div className="prin-grid">
          {principles.map((p, i) => (
            <div key={p.title} className="prin-card">
              <span className="prin-num">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
