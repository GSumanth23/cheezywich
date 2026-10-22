// Pinned "View order" bar, shown on phones and tablets once something is in the order
export default function MobileBar({ label, total, onClick }) {
  return (
    <div className="bar show">
      <button type="button" onClick={onClick}>
        <span>{label}</span>
        <span>View order · {total}</span>
      </button>
    </div>
  )
}
