import { forwardRef, useState } from 'react'
import { Icon } from './Icons.jsx'
import { rupees, whatsappLink } from '../utils/format.js'

const OrderSlip = forwardRef(function OrderSlip({ cart }, ref) {
  const [name, setName] = useState('')
  const [note, setNote] = useState('')
  const [mode, setMode] = useState('Takeaway')
  const { lines, total, count, add, remove } = cart
  const empty = count === 0

  return (
    <aside className="slip" ref={ref} aria-label="Your order">
      <h3>Your order</h3>

      {empty ? (
        <div className="empty">
          <Icon name="sandwich" />
          <span>Your order is empty. Tap <b>Add</b> on anything that looks good.</span>
        </div>
      ) : (
        <>
          <ul>
            {lines.map((l) => (
              <li className="line" key={l.name}>
                <span>{l.name}</span>
                <span className="qty">
                  <button type="button" aria-label={`Remove one ${l.name}`} onClick={() => remove(l.name)}>−</button>
                  <span>{l.qty}</span>
                  <button type="button" aria-label={`Add one ${l.name}`} onClick={() => add(l.name)}>+</button>
                </span>
                <span className="amt">{rupees(l.qty * l.price)}</span>
              </li>
            ))}
          </ul>
          <div className="total">
            <span>Total</span>
            <span>{rupees(total)}</span>
          </div>
        </>
      )}

      <label htmlFor="custName">Your name</label>
      <input id="custName" autoComplete="given-name" placeholder="Name for the order" value={name} onChange={(e) => setName(e.target.value)} />

      <label id="modeLabel">How will you have it?</label>
      <div className="seg" role="group" aria-labelledby="modeLabel">
        {['Takeaway', 'Dine-in'].map((m) => (
          <button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)}>
            {m}
          </button>
        ))}
      </div>

      <label htmlFor="note">Notes (optional)</label>
      <input id="note" placeholder="Less spicy, extra cheese…" value={note} onChange={(e) => setNote(e.target.value)} />

      <a
        className="send"
        href={empty ? undefined : whatsappLink({ lines, total, mode, name: name.trim(), note: note.trim() })}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={empty}
      >
        <Icon name="wa" />
        Send order on WhatsApp
      </a>
      <p className="small" style={{ margin: '10px 0 0' }}>
        Opens WhatsApp with your order typed out. Pay at the counter.
      </p>
    </aside>
  )
})

export default OrderSlip
