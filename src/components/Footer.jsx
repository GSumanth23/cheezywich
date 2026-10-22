import { CAFE } from '../data/menu.js'

const LOGO = `${import.meta.env.BASE_URL}logo.svg`

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f">
          <img src={LOGO} alt="" />
          <div>
            <b>{CAFE.fullName}</b>
            <div className="small">Good food · Great coffee · Made with love</div>
          </div>
        </div>
        <div className="small">© {new Date().getFullYear()} {CAFE.name}</div>
      </div>
    </footer>
  )
}
