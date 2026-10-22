import { useCallback, useRef, useState } from 'react'
import { IconSprite } from './components/Icons.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Bestsellers from './components/Bestsellers.jsx'
import Combos from './components/Combos.jsx'
import Menu from './components/Menu.jsx'
import OrderSlip from './components/OrderSlip.jsx'
import Visit from './components/Visit.jsx'
import Footer from './components/Footer.jsx'
import MobileBar from './components/MobileBar.jsx'
import { useCart } from './hooks/useCart.js'
import { rupees } from './utils/format.js'

export default function App() {
  const cart = useCart()
  const slipRef = useRef(null)
  const [toast, setToast] = useState('')
  const timer = useRef()

  const showToast = useCallback((msg) => {
    setToast(msg)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(''), 1400)
  }, [])

  const addItem = (name) => {
    if (!cart.qty(name)) showToast(`${name} added`)
    cart.add(name)
  }

  const goToOrder = () => slipRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const shop = { qty: cart.qty, onAdd: addItem, onRemove: cart.remove }

  return (
    <>
      <IconSprite />
      <div className="strip">
        <div className="wrap">
          <span>Order ahead on WhatsApp</span>
          <span>Takeaway &amp; dine-in</span>
          <span>Open daily till 10 PM</span>
        </div>
      </div>
      <Header count={cart.count} onCartClick={goToOrder} />
      <Hero />
      <Bestsellers {...shop} />
      <Combos {...shop} />
      <section id="menu" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <Menu {...shop}>
            <OrderSlip ref={slipRef} cart={cart} />
          </Menu>
        </div>
      </section>
      <Visit onCopy={showToast} />
      <Footer />
      {cart.count > 0 && (
        <MobileBar label={`${cart.count} ${cart.count === 1 ? 'item' : 'items'}`} total={rupees(cart.total)} onClick={goToOrder} />
      )}
      {toast && <div className="toast" role="status">{toast}</div>}
    </>
  )
}
