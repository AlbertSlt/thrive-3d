import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import { db } from '../service/firebase'
import { useForm } from 'react-hook-form'

const CheckoutHook = () => {


    const [orderId, setOrderId] = useState('')
    //destr de useform de react hok
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()
    const { cart, valorTotal, clear } = useContext(CartContext)



    console.log("errores", errors)
    const finalizarCompra = (dataDelForm) => {
        console.log('todo ok', dataDelForm)

        let order = {
            comprador: {
                name: dataDelForm.name,
                lastname: dataDelForm.lastname,
                address: dataDelForm.address,
                email: dataDelForm.email
            },
            compras: cart,
            total: valorTotal(),
            date: serverTimestamp()
        }
        // const ventas = collection(db, "orders") //colección "orders" (p/ej) si el metodo collection no la encuentra, la creará
        // //agregar un doc
        // addDoc(ventas, order) //parametros, DONDE (const ventas), y QUE agregar (objeto order), retorna una promesa
        //     .then((res) => {
        //         setOrderId(res.id)
        //         clear()
        //     })
        //     .catch((error) => console.log(error))

    }

    return (
        //render condicional
        <>
            {orderId
                ? <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                    <h2>Realizaste la compra correctamente!</h2>
                    <h3>el Id de tu compra es: {orderId}</h3>
                </div>
                :
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h1 className="text-center">Complete sus datos</h1>
                            <form onSubmit={handleSubmit(finalizarCompra)}>
                                <input className="form-control" type="text" name='name' placeholder='Ingrese su nombre' {...register("name", { required: true, minLength: 3 })} />
                                {errors?.name?.type === 'required' && <span style={{ color: "red" }}>Por favor complete este campo</span>}
                                {errors?.name?.type === 'minLength' && <span style={{ color: "red" }}>El campo nombre debe contener 3 caracteres como minimo</span>}

                                <input className="form-control" type="text" name='lastname' placeholder='Ingrese su apellido' {...register("lastname", { required: true, minLength: 2 })} />
                                {errors?.lastname?.type === 'required' && <span style={{ color: "red" }}>Por favor complete este campo</span>}
                                {errors?.lastname?.type === 'minLength' && <span style={{ color: "red" }}>El campo nombre debe contener 3 caracteres como minimo</span>}

                                <input className="form-control" type="text" name='address' placeholder='Ingrese su dirección' {...register("address", { required: true, minLength: 10, maxLength: 35 })} />
                                {/* completar validaciones 20.12 */}

                                <input className="form-control" type="email" name='email' placeholder='Ingrese su mail'  {...register("email", { required: true })} />
                                {errors?.email?.type === 'required' && <span style={{ color: "red" }}>Por favor complete este campo</span>}

                                <input className="form-control" type="email" name='email2' placeholder='Ingrese su mail nuevamente'  {...register("secondemail", { required: true, validate: { equalsMails: mail2 => mail2 === getValues().email } })} />
                                {errors?.secondemail?.type === 'required' && <span style={{ color: "red" }}>Por favor complete este campo</span>}
                                {errors?.secondemail?.type === 'equalMails' && <span style={{ color: "red" }}>Los mails deben ser iguales</span>}
                                <input className="form-control" type="text" name='comments' placeholder='Comentarios especiales para su compra' />
                                <button className='btn btn-success' type='submit' disabled>Finalizar compra</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CheckoutHook