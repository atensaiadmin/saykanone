import { grandmaster } from '../data/content.js'

export default function Grandmaster() {
  return (
    <section id="grandmaster" className="section section-dark grandmaster">
      <div className="container gm-grid">
        <div className="gm-media">
          <img src={grandmaster.image} alt={grandmaster.name} />
          <div className="gm-media__plate">
            <strong>GM</strong>
            <span>Founder · Saykan Combat</span>
          </div>
        </div>
        <div className="gm-copy">
          <span className="kicker">{grandmaster.kicker}</span>
          <h2 className="section-title">{grandmaster.name}</h2>
          <p className="gm-ranks">{grandmaster.ranks}</p>
          {grandmaster.bio.map((p, i) => <p key={i} className="gm-para">{p}</p>)}
          <blockquote className="gm-quote">{grandmaster.philosophy}</blockquote>
        </div>
      </div>
    </section>
  )
}
