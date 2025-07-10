import { useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1)

  const sumar = () => {
    if (count < stock) setCount(count + 1)
  }

  const restar = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <div className="d-flex flex-column align-items-center gap-3 mt-3">
      <div className="btn-group" role="group">
        <button className="btn btn-outline-danger" onClick={restar}>-</button>
        <button className="btn btn-dark" disabled>{count}</button>
        <button className="btn btn-outline-success" onClick={sumar}>+</button>
      </div>
      <button
        className="btn btn-primary"
        disabled={stock === 0 || count === 0}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
