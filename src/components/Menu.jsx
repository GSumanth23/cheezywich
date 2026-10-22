import { useState } from 'react'
import { Icon } from './Icons.jsx'
import AddControl from './AddControl.jsx'
import { MENU } from '../data/menu.js'
import { rupees, slug } from '../utils/format.js'

function VegMark({ veg }) {
  if (veg === undefined) return null
  return <i className={`vm${veg ? '' : ' nv'}`} role="img" aria-label={veg ? 'Veg' : 'Non-veg'} />
}

// children = the order slip shown beside the menu
export default function Menu({ qty, onAdd, onRemove, children }) {
  const [active, setActive] = useState(MENU[0].category)

  const jump = (category) => {
    setActive(category)
    document.getElementById(slug(category))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div className="head" style={{ marginBottom: 6 }}>
        <div>
          <div className="kicker">Freshly made</div>
          <h2>Full menu</h2>
        </div>
        <div className="legend">
          <span><i className="vm" /> Veg</span>
          <span><i className="vm nv" /> Non-veg</span>
        </div>
      </div>

      <div className="tabs-wrap">
        <div className="tabs" role="group" aria-label="Jump to a menu section">
          {MENU.map((c) => (
            <button key={c.category} className="tab" type="button" aria-pressed={active === c.category} onClick={() => jump(c.category)}>
              <Icon name={c.icon} />
              {c.category}
            </button>
          ))}
        </div>
      </div>

      <div className="layout">
        <div>
          {MENU.map((c) => (
            <div className="cat" id={slug(c.category)} key={c.category}>
              <div className="cat-h">
                <div className="bub" style={{ background: c.tint }}><Icon name={c.icon} /></div>
                <div>
                  <h3>{c.category}</h3>
                  <span>{c.items.length} items</span>
                </div>
              </div>
              <div className="items">
                {c.items.map((item) => (
                  <div className="item" key={item.name}>
                    <div className="info">
                      <div className="nm">
                        <VegMark veg={item.veg} />
                        <span>{item.name}</span>
                        {item.tag && <span className="hot">{item.tag}</span>}
                      </div>
                      <div className="pr">{rupees(item.price)}</div>
                    </div>
                    <AddControl name={item.name} qty={qty(item.name)} onAdd={onAdd} onRemove={onRemove} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {children}
      </div>
    </>
  )
}
