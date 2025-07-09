import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
      <h2>Tu Carrito está vacio, como su corazon</h2>
      <h3>Por favor llena tu vacio existencial con nuestros productos para volver a ser feliz!</h3>
      <Link className='btn btn-outline-dark' to={'/'}>Ir al home</Link>
    </div>
  )
}

export default EmptyCart