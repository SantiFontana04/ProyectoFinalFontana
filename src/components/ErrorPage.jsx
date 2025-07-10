import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center" style={{ height: '80vh' }}>
      <h1 className="display-1 text-danger mb-3">404</h1>
      <h2 className="mb-4">¡Ups! La página que buscás no existe 😱</h2>
      <p className="mb-4">Puede que el enlace esté roto o la página haya sido movida.</p>
      <Link to='/' className='btn btn-dark'>
        Volver al inicio
      </Link>
    </div>
  )
}

export default ErrorPage
