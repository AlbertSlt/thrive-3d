import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import { db } from '../service/firebase'

const Checkout = () => {

    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, valorTotal, clear } = useContext(CartContext)


    const buyerData = (e) => {
        setBuyer({
            ...buyer, //spread operator para que a medida que se vayan agregando cada propiedad no se pisen
            [e.target.name]: e.target.value //[] <-- propiedad dinamica para capturar cada name de cada input
        })
    }
    console.log(buyer)

    const finalizarCompra = (e) => {
        //prevent para que al poner submit en el boton, no recargue la app y pierda todos los estados, input value, contexto, etc
        e.preventDefault()
        //validacion NO APTA PARA ENTREGA-------------------
        if (!buyer.name || !buyer.lastname || !buyer.email || !buyer.address) {
            //TAMPOCO USAR ALERTS--------------
            alert('Por favor completa todos los campos')
        } else if (buyer.email !== validMail) {
            alert('Los mails no son iguales!')
        } else {
            let order = {
                comprador: buyer,
                compras: cart,
                total: valorTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders") //colección "orders" (p/ej) si el metodo collection no la encuentra, la creará
            //agregar un doc
            addDoc(ventas, order) //parametros, DONDE (const ventas), y QUE agregar (objeto order), retorna una promesa
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        //render condicional
        <>
            {orderId
                ? <div style={{textAlign: "center", marginTop: "1.5rem"}}>
                    <h2>Realizaste la compra correctamente!</h2>
                    <h3>el numero de compra es {orderId}</h3>
                </div>
                :
                <div style={{textAlign: "center", marginTop: "1.5rem"}}>
                    <h1>
                        Complete sus datos
                    </h1>
                    <form onSubmit={finalizarCompra}>
                        <input className="form-control" type="text" name='name' placeholder='Ingrese su nombre' onChange={buyerData} />
                        <input className="form-control" type="text" name='lastname' placeholder='Ingrese su apellido' onChange={buyerData} />
                        <input className="form-control" type="text" name='address' placeholder='Ingrese su dirección' onChange={buyerData} />
                        <input className="form-control" type="email" name='email' placeholder='Ingrese su mail' onChange={buyerData} />
                        <input className="form-control" type="email" name='email2' placeholder='Ingrese su mail nuevamente' onChange={(e) => setValidMail(e.target.value)} />
                        <input className="form-control" type="text" name='comments' placeholder='Comentarios especiales para su compra' onChange={buyerData} />
                        <button className='btn btn-success' type='submit'>Finalizar compra</button>
                    </form>
                </div>
            }
        </>
    )
}

export default Checkout