// Food and UI icons as one SVG sprite. Render <IconSprite /> once, then <Icon name="pizza" /> anywhere.
const S = { stroke: '#2a1a12', strokeWidth: 2.5, strokeLinejoin: 'round' }

export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <symbol id="i-sandwich" viewBox="0 0 48 48">
          <path d="M6 22 L24 9 L42 22 Z" fill="#e9a65a" {...S} />
          <path d="M5 24 h38 l-3 5 l-4 -2 l-4 4 l-4 -3 l-4 3 l-4 -3 l-4 3 l-4 -3 z" fill="#ffc233" {...S} />
          <path d="M6 31 h36 v5 a3 3 0 0 1 -3 3 h-30 a3 3 0 0 1 -3 -3 z" fill="#e9a65a" {...S} />
          <path d="M8 26 q4 3 8 0 q4 3 8 0" fill="none" stroke="#3fae5a" strokeWidth="2.5" />
        </symbol>
        <symbol id="i-cup" viewBox="0 0 48 48">
          <path d="M17 6 q-3 4 0 8 M24 4 q-3 5 0 10 M31 6 q-3 4 0 8" fill="none" {...S} strokeLinecap="round" />
          <path d="M8 18 h28 v10 a12 12 0 0 1 -12 12 h-4 a12 12 0 0 1 -12 -12 z" fill="#fff" {...S} />
          <path d="M36 22 h3 a5 5 0 0 1 0 10 h-4" fill="none" {...S} />
          <ellipse cx="22" cy="18" rx="14" ry="3" fill="#8a5a3a" {...S} />
          <path d="M5 43 h34" {...S} strokeLinecap="round" />
        </symbol>
        <symbol id="i-pizza" viewBox="0 0 48 48">
          <path d="M24 44 L6 10 q18 -10 36 0 Z" fill="#ffc233" {...S} />
          <path d="M6 10 q18 -10 36 0 l-2 4 q-16 -8 -32 0 z" fill="#e9a65a" {...S} />
          <circle cx="20" cy="20" r="3.5" fill="#e4472b" stroke="#2a1a12" strokeWidth="2" />
          <circle cx="29" cy="24" r="3.5" fill="#e4472b" stroke="#2a1a12" strokeWidth="2" />
          <circle cx="24" cy="33" r="3" fill="#e4472b" stroke="#2a1a12" strokeWidth="2" />
        </symbol>
        <symbol id="i-shake" viewBox="0 0 48 48">
          <path d="M28 3 l-4 12" {...S} strokeLinecap="round" />
          <path d="M12 15 q0 -7 12 -7 q12 0 12 7 z" fill="#fff" {...S} />
          <path d="M10 15 h28 l-4 28 h-20 z" fill="#f59ab8" {...S} />
          <path d="M12 24 h24" stroke="#2a1a12" strokeWidth="2" />
          <circle cx="31" cy="8" r="3" fill="#e4472b" stroke="#2a1a12" strokeWidth="2" />
        </symbol>
        <symbol id="i-fries" viewBox="0 0 48 48">
          <path d="M15 20 l-2 -14 M20 20 l0 -16 M25 20 l1 -15 M30 20 l3 -13 M34 21 l4 -10" stroke="#ffc233" strokeWidth="5" strokeLinecap="round" />
          <path d="M15 20 l-2 -14 M20 20 l0 -16 M25 20 l1 -15 M30 20 l3 -13 M34 21 l4 -10" stroke="#2a1a12" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
          <path d="M9 19 h30 l-4 25 h-22 z" fill="#e4472b" {...S} />
          <path d="M19 30 q5 4 10 0" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </symbol>
        <symbol id="i-iced" viewBox="0 0 48 48">
          <path d="M30 3 l-3 14" {...S} strokeLinecap="round" />
          <path d="M11 12 h26 l-3 32 h-20 z" fill="#fff" {...S} />
          <path d="M12.5 22 h23 l-2 21 h-19 z" fill="#b07a52" />
          <rect x="16" y="24" width="7" height="7" rx="1.5" fill="#e7f4ff" stroke="#2a1a12" strokeWidth="1.8" />
          <rect x="25" y="28" width="7" height="7" rx="1.5" fill="#e7f4ff" stroke="#2a1a12" strokeWidth="1.8" />
          <path d="M11 12 h26 l-3 32 h-20 z" fill="none" {...S} />
        </symbol>
        <symbol id="i-choco" viewBox="0 0 48 48">
          <path d="M10 16 h26 v14 a11 11 0 0 1 -11 11 h-4 a11 11 0 0 1 -11 -11 z" fill="#e4472b" {...S} />
          <path d="M36 20 h3 a5 5 0 0 1 0 10 h-4" fill="none" {...S} />
          <path d="M12 16 q0 -6 6 -6 q2 -5 7 -3 q6 -2 8 4 q4 1 3 5 z" fill="#fff" {...S} />
          <path d="M15 24 h16" stroke="#fff" strokeWidth="2.5" />
        </symbol>
        <symbol id="i-dip" viewBox="0 0 48 48">
          <path d="M8 24 h32 a16 14 0 0 1 -32 0 z" fill="#fff" {...S} />
          <ellipse cx="24" cy="24" rx="16" ry="4" fill="#ffc233" {...S} />
          <path d="M30 8 l-8 16" stroke="#e9a65a" strokeWidth="6" strokeLinecap="round" />
          <path d="M30 8 l-8 16" stroke="#2a1a12" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
        </symbol>
        <symbol id="i-wa" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.1Z" />
        </symbol>
        <symbol id="i-pin" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
          <circle cx="12" cy="10" r="2.6" fill="currentColor" />
        </symbol>
        <symbol id="i-insta" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2.4" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2.4" />
          <circle cx="17.3" cy="6.7" r="1.3" fill="currentColor" />
        </symbol>
        <symbol id="i-phone" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
        </symbol>
      </defs>
    </svg>
  )
}

export function Icon({ name }) {
  return (
    <svg className="ico" aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  )
}
