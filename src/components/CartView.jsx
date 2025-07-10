import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
  const { cart, clear, removeItem, cartTotal } = useContext(CartContext)

  const preConfirm = () => {
    Swal.fire({
      title: '¿Estás seguro de borrar todo el carrito?',
      showDenyButton: true,
      denyButtonText: 'No',
      confirmButtonText: 'Sí',
    }).then((result) => {
      if (result.isConfirmed) {
        clear()
        Swal.fire('Carrito vaciado', '', 'success')
      }
    })
  }

  const confirmRemove = (id, name) => {
    Swal.fire({
      title: `¿Eliminar "${name}" del carrito?`,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(id)
        Swal.fire('Producto eliminado', '', 'success')
      }
    })
  }

  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2 className="fs-1 mb-4">Tu carrito está vacío 🛒</h2>
        <Link to="/" className="btn btn-primary">
          Volver a la tienda
        </Link>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <h2 className="text-center fs-1 mb-4">Tu carrito 🛒</h2>

      <div className="d-flex flex-column gap-4">
        {cart.map((compra) => (
          <div key={compra.id} className="card p-3 shadow-sm">
            <div className="row align-items-center">
              <div className="col-md-2 text-center">
                <img
                  src={compra.img}
                  alt={compra.name}
                  className="img-fluid"
                  style={{ maxHeight: '100px', objectFit: 'contain' }}
                />
              </div>
              <div className="col-md-6">
                <h5 className="mb-1">{compra.name}</h5>
                <p className="mb-0">Cantidad: {compra.quantity}</p>
                <p className="mb-0">Precio unitario: ${compra.price},00</p>
              </div>
              <div className="col-md-3 text-end">
                <p className="fw-bold fs-5 mb-2">Total: ${compra.price * compra.quantity},00</p>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => confirmRemove(compra.id, compra.name)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-end mt-4">
        <h4>Total a pagar: <span className="text-success">${cartTotal()},00</span></h4>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-danger" onClick={preConfirm}>
          Vaciar carrito
        </button>
        <Link className="btn btn-success" to="/checkout">
          Terminar Compra
        </Link>
      </div>
    </div>
  )
}

export default CartView