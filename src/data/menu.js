// Edit this file to change prices, items, combos, bestsellers, hours or contact details.
// veg: true = veg mark, false = non-veg mark, leave out for drinks and dips
// tag: optional red label next to the item (e.g. "Spicy")
// icon: one of sandwich, fries, pizza, cup, iced, shake, choco, dip
// tint: background colour for the category / card (CSS variable from styles.css)

export const CAFE = {
  name: 'Cheezywich',
  fullName: 'Cheezywich Cafe & Bites',
  area: 'Bandlaguda Jagir, Hyderabad',
  whatsapp: '917038592388', // country code + number, no spaces or +
  phoneDisplay: '+91 70385 92388',
  instagram: 'https://www.instagram.com/cheezywich_',
  instagramHandle: '@cheezywich_',
  directions: 'https://share.google/Cx64ibQcw7lXQsmR4',
  address: ['Plot No. 121/P, Abhyudaya Nagar', 'Bandlaguda Jagir, Hyderabad', 'Telangana 500086'],
  timeZone: 'Asia/Kolkata',
}

// open / close are 24-hour clock hours, used for the "Open now" badge (India time)
export const HOURS = [
  { day: 'Monday', label: '11 AM – 10 PM', open: 11, close: 22 },
  { day: 'Tuesday', label: '11 AM – 10 PM', open: 11, close: 22 },
  { day: 'Wednesday', label: '11 AM – 10 PM', open: 11, close: 22 },
  { day: 'Thursday', label: '11 AM – 10 PM', open: 11, close: 22 },
  { day: 'Friday', label: '11 AM – 10 PM', open: 11, close: 22 },
  { day: 'Saturday', label: '11 AM – 10 PM', open: 11, close: 22 },
  { day: 'Sunday', label: '12 PM – 10 PM', open: 12, close: 22 },
]

export const MENU = [
  {
    category: 'Sandwiches',
    icon: 'sandwich',
    tint: 'var(--cheese-soft)',
    items: [
      { name: 'Classic Veggie Delight', price: 60, veg: true },
      { name: 'Classic Cheese Sandwich', price: 90, veg: true },
      { name: 'Corn & Cheese Sandwich', price: 99, veg: true },
      { name: 'Peri Peri Paneer Sandwich', price: 149, veg: true },
      { name: 'Grilled Chicken Cheese', price: 199, veg: false },
      { name: 'Peri Peri Chicken Sandwich', price: 199, veg: false },
    ],
  },
  {
    category: 'Sides & Toasts',
    icon: 'fries',
    tint: 'var(--crust-soft)',
    items: [
      { name: 'Masala Egg Toast', price: 50, veg: false },
      { name: 'Salted Fries', price: 60, veg: true },
      { name: 'Egg & Cheese Toast', price: 70, veg: false },
      { name: 'Korean Bun', price: 75, veg: true },
      { name: 'Peri Peri Fries', price: 80, veg: true },
      { name: 'Garlic Bread', price: 99, veg: true },
      { name: 'Cheezy Fries', price: 99, veg: true },
      { name: 'Chilli Cheese Fire Toast', price: 119, veg: true, tag: 'Spicy' },
    ],
  },
  {
    category: 'Personal Pizzas',
    icon: 'pizza',
    tint: 'var(--tomato-soft)',
    items: [
      { name: 'Classic Margherita', price: 149, veg: true },
      { name: 'Garden Fresh Veg', price: 149, veg: true },
      { name: 'Peri Peri Chicken Pizza', price: 169, veg: false },
      { name: 'Juicy Smoked Chicken', price: 189, veg: false },
    ],
  },
  {
    category: 'Hot Coffee',
    icon: 'cup',
    tint: 'var(--coffee-soft)',
    items: [
      { name: 'Hot Coffee', price: 60 },
      { name: 'Espresso', price: 60 },
      { name: 'Café Latte', price: 110 },
      { name: 'Cappuccino', price: 120 },
      { name: 'Vanilla Latte', price: 140 },
      { name: 'Hot Mocha', price: 190 },
    ],
  },
  {
    category: 'Cold Coffee',
    icon: 'iced',
    tint: 'var(--coffee-soft)',
    items: [
      { name: 'Iced Latte', price: 120 },
      { name: 'Cold Coffee', price: 160 },
      { name: 'Cold Mocha', price: 180 },
    ],
  },
  {
    category: 'Milkshakes',
    icon: 'shake',
    tint: 'var(--berry-soft)',
    items: [
      { name: 'Oreo Crunch Milkshake', price: 179 },
      { name: 'KitKat Milkshake', price: 199, tag: 'Most fav' },
      { name: 'Cheezywich Mocha Shake', price: 229, tag: 'Signature' },
      { name: 'Nutella Dream Milkshake', price: 249 },
    ],
  },
  {
    category: 'Hot Chocolate',
    icon: 'choco',
    tint: 'var(--berry-soft)',
    items: [
      { name: 'Classic Hot Chocolate', price: 199 },
      { name: 'Nutella Hot Chocolate', price: 229 },
    ],
  },
  {
    category: 'Add-ons & Dips',
    icon: 'dip',
    tint: 'var(--cheese-soft)',
    items: [
      { name: 'Mayo Dip', price: 10 },
      { name: 'Hot Sauce', price: 10 },
      { name: 'Extra Cheese', price: 20 },
      { name: 'Signature Dip', price: 30 },
    ],
  },
]

// Must match item names in MENU exactly (prices come from MENU)
export const BESTSELLERS = [
  { name: 'KitKat Milkshake', icon: 'shake', tint: 'var(--berry-soft)', tag: 'Most fav', desc: 'Thick, creamy and loaded with KitKat.' },
  { name: 'Chilli Cheese Fire Toast', icon: 'sandwich', tint: 'var(--tomato-soft)', tag: 'Spicy', desc: 'Gooey cheese with a chilli kick.' },
  { name: 'Cheezywich Mocha Shake', icon: 'shake', tint: 'var(--coffee-soft)', tag: 'Signature', desc: 'Our own coffee and chocolate shake.' },
  { name: 'Cheezy Fries', icon: 'fries', tint: 'var(--cheese-soft)', tag: 'Must try', desc: 'Crispy fries covered in cheese.' },
]

// style: c1 = yellow, c2 = red, c3 = dark
export const COMBOS = [
  { name: 'Coffee Break Combo', price: 179, style: 'c1', parts: [['cup', 'Cappuccino'], ['sandwich', 'Korean Bun']] },
  { name: 'Fire Combo', price: 249, style: 'c2', parts: [['iced', 'Cold Coffee'], ['sandwich', 'Chilli Cheese Fire Toast']] },
  { name: 'Pizza Combo', price: 319, style: 'c3', parts: [['pizza', 'Juicy Smoked Chicken Pizza'], ['iced', 'Cold Coffee']] },
]

// Every orderable thing by name -> price
export const PRICE_LIST = Object.fromEntries([
  ...MENU.flatMap((c) => c.items.map((i) => [i.name, i.price])),
  ...COMBOS.map((c) => [c.name, c.price]),
])

// Lowest price in a category, for the hero chips
export const fromPrice = (category) =>
  Math.min(...MENU.find((c) => c.category === category).items.map((i) => i.price))
