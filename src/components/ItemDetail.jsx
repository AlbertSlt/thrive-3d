//importamos el hook useContext para usar el contexto
import React, { useContext, useState } from 'react'
//tambien tengo que importar el contexto que quiero usar 
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ detail }) => {
    const { addItem } = useContext(CartContext)
    //para consumir el contexto uso el hook useContext, debo pasar el dato de CUAL contexto quiero usar
    //  const contexto = useContext(CartContext)
    //puedo hace un descontructuring porque el contexto devuelve un objeto, entonces puedo desc {cart}
    //const { cart } = useContext(CartContext)


    //recomendacion de la profe <3
    const [compra, setCompra] = useState(false)



    const onAdd = (cantidad) => {
        addItem(detail, cantidad)
        setCompra(true)
    }

    return (
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2> Detalle del producto: {detail.name}</h2>
            <img src={detail.img} alt={detail.name} style={{ height: '35rem' }}/>
            <p>{detail.description}</p>
            <p>{detail.price},00</p>
            <p>Stock disponible: {detail.stock} </p>
            {/* <ItemCount stock={detail.stock} onAdd={onAdd} /> */}


            {compra ? <Link className='btn btn-outline-dark' to='/cart'> Ir al carrito</Link> : <ItemCount stock={detail.stock} onAdd={onAdd} />}

        </div>
    )
}

export default ItemDetail