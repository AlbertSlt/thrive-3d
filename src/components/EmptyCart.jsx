    import React from 'react'
import { Link } from 'react-router-dom'
    
    const EmptyCart = () => {
      return (
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <h2>Tu Carrito está vacio, como su corazon</h2>
              <h3>bla bla ver productos</h3>
              <Link className='btn btn-dark' to={'/'}>Ir a home</Link>
        </div>
      )
    }
    
    export default EmptyCart