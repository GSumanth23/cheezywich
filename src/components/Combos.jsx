import { Icon } from './Icons.jsx'
import AddControl from './AddControl.jsx'
import { COMBOS } from '../data/menu.js'
import { rupees } from '../utils/format.js'

export default function Combos({ qty, onAdd, onRemove }) {
  return (
    <section id="combos" style={{ paddingTop: 16 }}>
      <div className="wrap">
        <div className="head">
          <div>
            <div className="kicker">More food, better price</div>
            <h2>Combos</h2>
          </div>
        </div>
        <div className="combos">
          {COMBOS.map((c) => (
            <article className={`combo ${c.style}`} key={c.name}>
              <div className="badge">
                <div><small>only</small>{rupees(c.price)}</div>
              </div>
              <h3>{c.name}</h3>
              <ul>
                {c.parts.map(([icon, label]) => (
                  <li key={label}><Icon name={icon} />{label}</li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <AddControl name={c.name} qty={qty(c.name)} onAdd={onAdd} onRemove={onRemove} label="Add combo" className="addbig" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
