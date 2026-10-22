import { Icon } from './Icons.jsx'
import { CAFE, HOURS } from '../data/menu.js'
import { cafeNow } from '../utils/format.js'

export default function Visit({ onCopy }) {
  const today = cafeNow().day

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(CAFE.phoneDisplay)
      onCopy('Number copied')
    } catch {
      onCopy(CAFE.phoneDisplay)
    }
  }

  return (
    <section className="visit" id="visit">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="kicker">Come hang out</div>
            <h2>Visit Cheezywich</h2>
          </div>
        </div>
        <div className="vgrid">
          <div className="vcard">
            <h3>Find us</h3>
            <p>
              {CAFE.address.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < CAFE.address.length - 1 && <br />}
                </span>
              ))}
            </p>
            <div className="vbtns">
              <a className="vbtn" href={CAFE.directions} target="_blank" rel="noopener noreferrer">
                <Icon name="pin" />Get directions
              </a>
            </div>
          </div>
          <div className="vcard">
            <h3>Opening hours</h3>
            <table className="hours">
              <tbody>
                {HOURS.map((h) => (
                  <tr key={h.day} className={h.day === today ? 'today' : ''}>
                    <td>{h.day}</td>
                    <td>{h.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="vcard">
            <h3>Say hello</h3>
            <p>
              <a href={`tel:+${CAFE.whatsapp}`} style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: '1.5rem', textDecoration: 'none' }}>
                {CAFE.phoneDisplay}
              </a>
            </p>
            <div className="vbtns">
              <button className="vbtn" type="button" onClick={copyPhone}>
                <Icon name="phone" />Copy number
              </button>
              <a className="vbtn" href={CAFE.instagram} target="_blank" rel="noopener noreferrer">
                <Icon name="insta" />{CAFE.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
