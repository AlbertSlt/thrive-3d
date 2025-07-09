import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ detail }) => {
    const { addItem } = useContext(CartContext)
    const [compra, setCompra] = useState(false)

    const onAdd = (cantidad) => {
        addItem(detail, cantidad)
        setCompra(true)
    }

    return (
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2> Detalle del producto: {detail.name}</h2>
            <img src={detail.img} alt={detail.name} style={{ maxWidth: '100%', height: 'auto', maxHeight: '35rem' }} />
            <p>{detail.description}</p>
            <p>{detail.price},00</p>
            <p>Stock disponible: {detail.stock} </p>

            {compra ? <Link className='btn btn-outline-dark' to='/cart'> Ir al carrito</Link> : <ItemCount stock={detail.stock} onAdd={onAdd} />}

        </div>
    )
}

export default ItemDetail