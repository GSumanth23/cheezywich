# Cheezywich Cafe & Bites

Website for Cheezywich Cafe & Bites, Bandlaguda Jagir, Hyderabad. Built with React 18 + Vite.
Customers browse the menu, build an order and send it to the café on WhatsApp.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production files in dist/
npm run preview  # serve the built site locally
```

## Update the menu, prices, hours or contact

Everything lives in **`src/data/menu.js`**:

- `CAFE`: WhatsApp number, phone, Instagram, address, directions link
- `HOURS`: opening hours (24-hour `open` / `close` used for the "Open now" badge, in India time)
- `COMBOS`: combo deals
- `MENU`: categories and items. `veg: true` / `false` sets the veg / non-veg mark; leave it out for drinks and dips. `tag` adds a handwritten note like "most fav!"

Change the file, rebuild, redeploy. No other code needs touching.

## Project layout

```
src/
  data/menu.js          all café content
  hooks/useCart.js      cart state, saved in the visitor's browser
  utils/format.js       ₹ formatting, India-time open status, WhatsApp message link
  components/           Header, Hero, Combos, Menu, OrderSlip, Visit, Footer
  styles.css            all styling, light + dark mode
public/
  logo.webp, logo.png   logo (swap in a sharper original when available)
```

## Deploy

It's a static site, so any static host works.

- **Netlify**: build command `npm run build`, publish directory `dist`. Or run `npm run build` and drag `dist/` onto app.netlify.com/drop.
- **Vercel**: import the repo; it detects Vite automatically.
- **Render**: New → Static Site, build command `npm run build`, publish directory `dist`.

Point a custom domain (for example cheezywich.in) at the host from its domain settings.

## Ideas for later

- Admin page to edit prices or mark items sold out (needs a small backend or a headless CMS)
- Save orders to a database alongside the WhatsApp message
- Online payment via Razorpay or a UPI link
