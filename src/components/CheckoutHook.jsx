import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { useForm } from 'react-hook-form'

const CheckoutHook = () => {
  const [orderId, setOrderId] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()

  const { cart, cartTotal, clear } = useContext(CartContext)

  const finalizarCompra = (dataDelForm) => {
    let order = {
      comprador: {
        name: dataDelForm.name,
        lastname: dataDelForm.lastname,
        address: dataDelForm.address,
        email: dataDelForm.email,
      },
      compras: cart,
      total: cartTotal(),
      date: serverTimestamp(),
    }

    const ventas = collection(db, 'orders')
    addDoc(ventas, order)
      .then((res) => {
        setOrderId(res.id)
        clear()
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      {orderId ? (
        <div className="container text-center mt-5">
          <h2 className="mb-3">¡Compra realizada con éxito! 🥳</h2>
          <h4>Tu número de orden es: <span className="text-success">{orderId}</span></h4>
          <p className="mt-3">Te enviaremos un correo con los detalles.</p>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="card p-4 shadow mx-auto" style={{ maxWidth: '600px' }}>
            <h2 className="text-center mb-4">Finalizar compra</h2>
            <form onSubmit={handleSubmit(finalizarCompra)}>
              {/* Nombre */}
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nombre"
                  {...register('name', { required: true, minLength: 3 })}
                />
                {errors?.name?.type === 'required' && (
                  <small className="text-danger">Por favor complete este campo</small>
                )}
                {errors?.name?.type === 'minLength' && (
                  <small className="text-danger">Mínimo 3 caracteres</small>
                )}
              </div>

              {/* Apellido */}
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Apellido"
                  {...register('lastname', { required: true, minLength: 2 })}
                />
                {errors?.lastname?.type === 'required' && (
                  <small className="text-danger">Por favor complete este campo</small>
                )}
                {errors?.lastname?.type === 'minLength' && (
                  <small className="text-danger">Mínimo 2 caracteres</small>
                )}
              </div>

              {/* Dirección */}
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Dirección"
                  {...register('address', { required: true, minLength: 10, maxLength: 35 })}
                />
                {errors?.address?.type === 'required' && (
                  <small className="text-danger">Por favor complete este campo</small>
                )}
                {errors?.address?.type === 'minLength' && (
                  <small className="text-danger">Mínimo 10 caracteres</small>
                )}
                {errors?.address?.type === 'maxLength' && (
                  <small className="text-danger">Máximo 35 caracteres</small>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Correo electrónico"
                  {...register('email', { required: true })}
                />
                {errors?.email?.type === 'required' && (
                  <small className="text-danger">Por favor complete este campo</small>
                )}
              </div>

              {/* Confirmar Email */}
              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Repetir correo"
                  {...register('secondemail', {
                    required: true,
                    validate: {
                      equalsMails: (mail2) => mail2 === getValues().email,
                    },
                  })}
                />
                {errors?.secondemail?.type === 'required' && (
                  <small className="text-danger">Por favor complete este campo</small>
                )}
                {errors?.secondemail?.type === 'equalsMails' && (
                  <small className="text-danger">Los correos no coinciden</small>
                )}
              </div>

              {/* Botón */}
              <div className="d-grid">
                <button
                  className="btn btn-success"
                  type="submit"
                  disabled={!cart.length}
                >
                  Enviar orden
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default CheckoutHook