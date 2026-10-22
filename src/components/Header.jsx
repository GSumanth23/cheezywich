import { useEffect, useState } from 'react'
import { openStatus } from '../utils/format.js'

const LOGO = `${import.meta.env.BASE_URL}logo.svg`

export default function Header({ count, onCartClick }) {
  const [status, setStatus] = useState(openStatus)

  useEffect(() => {
    const id = setInterval(() => setStatus(openStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="navbar">
      <div className="nav wrap">
        <a className="brand" href="#top">
          <img src={LOGO} alt="" />
          <b>Cheezywich</b>
        </a>
        <nav>
          <a href="#best">Bestsellers</a>
          <a href="#combos">Combos</a>
          <a href="#menu">Menu</a>
          <a href="#visit">Visit</a>
        </nav>
        <div className="right">
          <span className={`open${status.open ? '' : ' closed'}`}>
            <i />
            <span>{status.text}</span>
          </span>
          <button className="cart-btn" type="button" onClick={onCartClick}>
            My order <b>{count}</b>
          </button>
        </div>
      </div>
    </div>
  )
}
