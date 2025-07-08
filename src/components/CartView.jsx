import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const { cart, clear, removeItem, valorTotal } = useContext(CartContext)
    const preCofirm = () => {
        Swal.fire({
            icon: "warning",
            title: 'Seguro que queres vaciar el carrito?',
            showDenyButton: true,
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.isConfirmed) {
                clear()
                Swal.fire({
                    title: "Listo!",
                    text: "Vaciaste tu carrito.",
                    icon: "success"
                })
            }
        })
    }

    //puedo hacer un componente cartItem o hacer todo acá
    return (
        <div>
            <h2 style={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'center', fontWeight: 'bold', marginTop: '2.5rem', textDecoration: 'underline' }}>Mi Carrito</h2>

            <div>
                {
                    cart.map((compra) => (
                        <div key={compra.id} style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', padding: '1rem' }} >
                            <img src={compra.img} alt={compra.name} style={{ maxHeight:'7 rem' }} />
                            <span><strong> Item:</strong> {compra.name}</span>
                            <span><strong> Precio unitario:</strong> ${compra.price},00</span>
                            <span><strong> Cantidad:</strong> {compra.quantity}</span>
                            <span><strong> Subtotal:</strong>  ${compra.price * compra.quantity},00</span>
                            <button className='btn btn-outline-danger' onClick={() => removeItem(compra.id)}>X</button>
                        </div>
                    ))
                }
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '1.5rem 0' }}>
                <span style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold', border: '2px solid black', padding: '0.8rem 1.5rem' }}>
                    Total a pagar: ${valorTotal()},00
                </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', marginTop: '2rem' }}>
                <button className='btn btn-outline-danger' onClick={preCofirm}>Vaciar carrito</button>
                <Link className='btn btn-outline-success' to='/checkout'>Terminar Compra</Link>
            </div>
        </div>
    )
}
export default CartView