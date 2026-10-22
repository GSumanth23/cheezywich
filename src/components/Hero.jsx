import { Icon } from './Icons.jsx'
import { CAFE, PRICE_LIST, fromPrice } from '../data/menu.js'
import { rupees } from '../utils/format.js'

const LOGO = `${import.meta.env.BASE_URL}logo.svg`

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <div className="kicker" style={{ color: '#2a1a12', opacity: 0.75 }}>
            Cafe &amp; Bites · {CAFE.area}
          </div>
          <h1 style={{ marginTop: 8 }}>
            Melty, cheesy, <span>made fresh.</span>
          </h1>
          <p>
            Grilled cheese sandwiches, loaded fries, personal pizzas, thick shakes and real coffee. Pick your
            favourites and send your order in one tap.
          </p>
          <div className="cta">
            <a className="btn red" href="#menu">Order now</a>
            <a className="btn line" href="#combos">See combos</a>
          </div>
          <div className="chips">
            <span className="chip"><Icon name="sandwich" />Sandwiches <small>from {rupees(fromPrice('Sandwiches'))}</small></span>
            <span className="chip"><Icon name="pizza" />Pizzas <small>from {rupees(fromPrice('Personal Pizzas'))}</small></span>
            <span className="chip"><Icon name="cup" />Coffee <small>from {rupees(fromPrice('Hot Coffee'))}</small></span>
          </div>
        </div>
        <div className="stage">
          <img className="plate" src={LOGO} alt="Cheezywich logo: a little chef making a sandwich" />
          <div className="sticker s1"><Icon name="shake" /><span>KitKat Shake<small>Most loved</small></span></div>
          <div className="sticker s2"><Icon name="fries" /><span>Fire Combo<small>just {rupees(PRICE_LIST['Fire Combo'])}</small></span></div>
          <div className="sticker s3"><Icon name="cup" /><span>Hot coffee {rupees(PRICE_LIST['Hot Coffee'])}</span></div>
        </div>
      </div>
      <svg className="drip" viewBox="0 0 1200 46" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 46V20c30 0 40 8 60 8s26-18 52-18 30 26 50 26 22-14 46-14 26 10 54 10 34-22 62-22 28 30 52 30 22-18 48-18 30 12 58 12 30-20 56-20 26 16 50 16 24-10 52-10 32 22 58 22 26-24 54-24 28 14 52 14 26-8 50-8 30 16 56 16 22-20 48-20 30 10 52 10H1200V46Z" />
      </svg>
    </header>
  )
}
