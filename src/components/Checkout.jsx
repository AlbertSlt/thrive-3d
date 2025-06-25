import { addDoc, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import {cartContext} from 

const checkout = () => {

    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState('')
    const [orderId, setOrderId] = useState()
    const { cart, cartTotal } = useContext(cartContext)


    //21:07 WAAAAAAAAAAAAAAAAAAA

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }
    console.log(buyer)
    
    const finalizarCompra = (e) => {
        //al poner submit en el boton, no recargue la app
        e.preventDefault()
        //VALIDACION CHAFA, no usar
        // if (!buyer.name || !buyer.lastname || !buyer.email || !buyer.address) {
            
        // } else if{

        // }else
            





        let order = {
            comprador: buyer,
            compras: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        const ventas = collection(db, "orders") // collection si no encuentra la coleccion, la crea
        //agregar un doc
        addDoc(ventas, order) //va a retornar promesa
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
        .catch((error)=> console.log(error))
    }

  return (
      <>
          orderId
          ? <div>
              <h2>Realizaste la compra correctamente!</h2>
              <h3>el numero de compra es {orderId}</h3>
          </div>
          : 
           <div>
          <h1>
              Complete sus datos
          </h1>
          <form onSubmit={finalizarCompra}>
              <input className="form-control" type="text" name='name' placeholder='Ingrese su nombre' onChange={buyerData} />
              <input className="form-control" type="text" name='lastname' placeholder='Ingrese su apellido' onChange={buyerData} />
              <input className="form-control" type="text" name='address' placeholder='Ing direccion' onChange={buyerData} />
              <input className="form-control" type="text" name='email' placeholder='Ingrese su mail' onChange={buyerData} />
              <input className="form-control" type="text" name='email2' placeholder='Ingrese su mail de nuevoooo'  onChange={(e)=> setValidMail(e.target.value)}/>

              <button className='btn btn-success' type='submit'>Enviar</button>
          </form>
    </div>
      </>
  )
}

export default checkout