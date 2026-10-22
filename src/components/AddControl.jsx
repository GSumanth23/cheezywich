// "Add" button that turns into a − qty + stepper once the item is in the order
export default function AddControl({ name, qty, onAdd, onRemove, label = 'Add', className = 'add' }) {
  if (qty > 0) {
    return (
      <span className="step">
        <button type="button" aria-label={`Remove one ${name}`} onClick={() => onRemove(name)}>−</button>
        <span>{qty}</span>
        <button type="button" aria-label={`Add one ${name}`} onClick={() => onAdd(name)}>+</button>
      </span>
    )
  }
  return (
    <button className={className} type="button" aria-label={`Add ${name}`} onClick={() => onAdd(name)}>
      {label}
    </button>
  )
}
