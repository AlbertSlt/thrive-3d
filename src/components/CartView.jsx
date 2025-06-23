import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartView = () => {
    const { cart, clear, removeItem } = useContext(CartContext)

    //puedo hacer un componente cartItem o hacer todo acá
    return (
        <div>
            <h2>Mica Rito</h2>

            <div>
                {
                    cart.map((compra) =>(
                        <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2 rem'}} >
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
            {/* HCER mostrar el total a pagar */}
            <span>Total a pagar: $</span>
            <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '2 rem' }}>
                <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
                <button className='btn btn-success'>Terminar Compra</button>
            </div>
        </div>
    )
}
// 21.27hs TERMINAR
export default CartView