import React, { useContext } from 'react'
import { IoCartOutline } from 'react-icons/io5' // ¡Asegúrate de importar IoCartOutline aquí!
import Badge from 'react-bootstrap/Badge' // ¡Asegúrate de importar Badge aquí!
import { CartContext } from '../context/CartContext'
import CartView from './CartView'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { totalItems } = useContext(CartContext)
  console.log

  return (
    <div className="carrito-container">
      <Link to="cart">
        <IoCartOutline />
      </Link>
      <Badge bg="success">{totalItems()}</Badge>
    </div>
  )
}

export default CartWidget
