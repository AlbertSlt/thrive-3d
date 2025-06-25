import React, { useContext } from 'react';
import { IoCartOutline } from "react-icons/io5"; // ¡Asegúrate de importar IoCartOutline aquí!
import Badge from 'react-bootstrap/Badge'; // ¡Asegúrate de importar Badge aquí!
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext)
  console.log
  return (
    <div className="carrito-container">
       <IoCartOutline />
      <Badge bg="success">{ totalItems  }</Badge>
    </div>
  )
}

export default CartWidget
