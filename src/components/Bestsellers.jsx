import { Icon } from './Icons.jsx'
import AddControl from './AddControl.jsx'
import { BESTSELLERS, PRICE_LIST } from '../data/menu.js'
import { rupees } from '../utils/format.js'

export default function Bestsellers({ qty, onAdd, onRemove }) {
  return (
    <section id="best" style={{ paddingTop: 36 }}>
      <div className="wrap">
        <div className="head">
          <div>
            <div className="kicker">Customer favourites</div>
            <h2>Bestsellers</h2>
          </div>
          <p>Start here if it's your first visit.</p>
        </div>
        <div className="best">
          {BESTSELLERS.map((b) => (
            <article className="bcard" key={b.name} style={{ background: b.tint }}>
              <span className="tag">{b.tag}</span>
              <div className="art"><Icon name={b.icon} /></div>
              <h3>{b.name}</h3>
              <div className="small">{b.desc}</div>
              <div className="row">
                <span className="price">{rupees(PRICE_LIST[b.name])}</span>
                <AddControl name={b.name} qty={qty(b.name)} onAdd={onAdd} onRemove={onRemove} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
