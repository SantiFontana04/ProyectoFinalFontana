import { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ detail }) => {
  const { addItem } = useContext(CartContext)
  const [purchase, setPurchase] = useState(false)

  const onAdd = (cantidad) => {
    addItem(detail, cantidad)
    setPurchase(true)
  }

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center mb-4">{detail.name}</h2>
        <img
          src={detail.img}
          alt={detail.name}
          className="card-img-top mb-3"
          style={{ objectFit: 'contain', maxHeight: '300px' }}
        />
        <div className="card-body text-center">
          <p className="card-text">{detail.description}</p>
          <p className="fs-4 fw-bold text-success">${detail.price},00</p>
          <p >Stock disponible: {detail.stock}</p>

          {purchase ? (
            <Link className="btn btn-dark mt-3" to="/cart">
              Ir al carrito
            </Link>
          ) : (
            <ItemCount stock={detail.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
