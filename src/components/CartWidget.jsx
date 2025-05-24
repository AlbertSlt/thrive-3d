import React from 'react';
import { IoCartOutline } from "react-icons/io5"; // ¡Asegúrate de importar IoCartOutline aquí!
import Badge from 'react-bootstrap/Badge'; // ¡Asegúrate de importar Badge aquí!

const CartWidget = () => {
  return (
    <div className="carrito-container">
       <IoCartOutline />
            <Badge bg="success">5</Badge>
    </div>
  )
}

export default CartWidget
