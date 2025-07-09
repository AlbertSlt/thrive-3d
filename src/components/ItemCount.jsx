import React, { useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)
    const [compra, setCompra] = useState(false)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const comprar = () => {
        onAdd(count)
    }

    return (
        <div >
            <div style={{ textAlign: 'center' }}>
                <button className='btn  btn-outline-primary' onClick={restar}>-</button>
                <span className='btn'> {count}</span>
                <button className='btn btn-outline-success' onClick={sumar} disabled={count >= stock}>+</button>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button className='btn btn-outline-primary' onClick={comprar} disabled={stock === 0 || count === 0}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount