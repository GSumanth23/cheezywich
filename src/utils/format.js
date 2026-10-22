import { CAFE, HOURS } from '../data/menu.js'

export const rupees = (n) => `₹${n}`

export const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')

// Current weekday + hour in the café's time zone (India), whatever the visitor's clock says
export function cafeNow() {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: CAFE.timeZone,
      weekday: 'long',
      hour: 'numeric',
      hour12: false,
    }).formatToParts(new Date())
    return {
      day: parts.find((p) => p.type === 'weekday').value,
      hour: Number(parts.find((p) => p.type === 'hour').value) % 24,
    }
  } catch {
    const d = new Date()
    return { day: HOURS[(d.getDay() + 6) % 7].day, hour: d.getHours() }
  }
}

export function openStatus() {
  const now = cafeNow()
  const today = HOURS.find((h) => h.day === now.day)
  if (!today) return { open: false, text: 'Closed now', today: now.day }
  if (now.hour >= today.open && now.hour < today.close) return { open: true, text: 'Open now', today: now.day }
  if (now.hour < today.open) return { open: false, text: `Opens ${today.label.split(' –')[0]}`, today: now.day }
  return { open: false, text: 'Closed now', today: now.day }
}

export function whatsappLink({ lines, total, mode, name, note }) {
  const body = [
    `Hi Cheezywich! I'd like to order (${mode}):`,
    '',
    ...lines.map((l) => `${l.qty} × ${l.name} – ${rupees(l.qty * l.price)}`),
    '',
    `Total: ${rupees(total)}`,
    note ? `Note: ${note}` : null,
    name ? `Name: ${name}` : null,
  ]
    .filter((x) => x !== null)
    .join('\n')
  return `https://wa.me/${CAFE.whatsapp}?text=${encodeURIComponent(body)}`
}
