import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center" style={{ height: '70vh' }}>
      <h2 className="mb-3">¡Tu carrito está vacío! 😱</h2>
      <h5 className="mb-4">Te invitamos a ver nuestros productos y agregar lo que más te guste</h5>
      <Link className="btn btn-dark" to="/">
        Ir al inicio
      </Link>
    </div>
  )
}

export default EmptyCart
