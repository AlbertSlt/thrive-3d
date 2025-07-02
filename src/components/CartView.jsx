import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const { cart, clear, removeItem, valorTotal } = useContext(CartContext) //revisar 2022*-----------------------------------------------
    const preCofirm = () => {
        Swal.fire({
            title: 'Seguro que queres vaciar el carrito?',
                showDenyButton: true,
                confirmButtonText: 'si'
        }).then((result) => {
            if (result.isConfirmed) {
                clear()
            }
        })
    }

    //puedo hacer un componente cartItem o hacer todo acá
    return (
        <div>
            <h2 style={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'center', fontWeight: 'bold', marginTop: '2rem' }}>Mica Rito</h2>

            <div>
                {
                    cart.map((compra) => (
                        <div key={compra.id} style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', padding: '2 rem' }} >
                            <img src={compra.img} alt={compra.name} style={{ width: '10rem' }} />
                            <span>{compra.name}</span>
                            <span>${compra.price},00</span>
                            <span>{compra.quantity}</span>
                            <span>precio final: ${compra.price * compra.quantity},00</span>
                            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>X</button>
                        </div>
                    ))
                }
            </div>

            <span style={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold' }}>Total a pagar: ${valorTotal()},00 </span>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', padding: '2 rem' }}>
                <button className='btn btn-danger' onClick={preCofirm}>Vaciar carrito</button>
                <Link className='btn btn-success' to='/checkout'>Terminar Compra</Link>
            </div>
        </div>
    )
}
export default CartView