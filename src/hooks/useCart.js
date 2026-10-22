import { useEffect, useMemo, useState } from 'react'
import { PRICE_LIST } from '../data/menu.js'

const KEY = 'cheezywich-cart'

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '{}')
    // drop anything no longer on the menu
    return Object.fromEntries(Object.entries(saved).filter(([name, q]) => PRICE_LIST[name] != null && q > 0))
  } catch {
    return {}
  }
}

export function useCart() {
  const [items, setItems] = useState(load)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items))
    } catch {
      /* storage blocked: cart still works for this visit */
    }
  }, [items])

  const add = (name) => setItems((c) => ({ ...c, [name]: (c[name] || 0) + 1 }))
  const remove = (name) =>
    setItems((c) => {
      const next = { ...c, [name]: (c[name] || 0) - 1 }
      if (next[name] <= 0) delete next[name]
      return next
    })
  const clear = () => setItems({})
  const qty = (name) => items[name] || 0

  const lines = useMemo(
    () => Object.entries(items).map(([name, q]) => ({ name, qty: q, price: PRICE_LIST[name] })),
    [items],
  )
  const total = lines.reduce((sum, l) => sum + l.qty * l.price, 0)
  const count = lines.reduce((sum, l) => sum + l.qty, 0)

  return { lines, total, count, qty, add, remove, clear }
}
