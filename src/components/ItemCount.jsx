import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

const ItemCount = ({ stock, onAdd }) => {
    // console.log(props)
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


    // const comprarItem = () => {
    //     setCompra(!compra)
    // }
    // const comprar = () => {
    // onAdd()
//}

    // useEffect(() => {
    //     console.log('sin array de dependencias me ejecuto SIEMPRE')
    // })
    // useEffect(() => {
    //     console.log('con array de dependencia vacio me ejecuto una sola vez')
    // }, [])
    // useEffect(() => {
    //     console.log('con array de dependencias con datos, se ejecuta cuando se monta el componente y cada vez que lo que esta escuchando se actualiza ')
    // }, [compra])

    // console.log('soy item count')

    const comprar = () => {
        onAdd(count)
    }

    return (
        <div >
            <div style={{textAlign: 'center'}}>
                <button className='btn  btn-outline-primary' onClick={restar}>-</button>
                <span className='btn'> {count}</span>
                <button className='btn btn-outline-success' onClick={sumar}  disabled={count >= stock}>+</button>
            </div>
            <div style={{textAlign: 'center', marginTop: '1rem' }}>
                <button className='btn btn-outline-primary' onClick={comprar} disabled={stock === 0 || count === 0}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount