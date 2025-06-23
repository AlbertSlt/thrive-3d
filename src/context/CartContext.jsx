import { createContext, useState } from "react";
import { SiQuantcast } from "react-icons/si";



// crear contexto, se hace => creando y exportando una constante para usarla en otros componentes
export const CartContext = createContext()

// crear proveedor - encargado de dar acceso y tener la funcion - como si fuer un componente



//-----ACA EMPIEZA EL PROVEEDOR - Se lo vincula/conecta con el "Context" con la etiqueta dentro del return <CartContext.provider></CartContext.provider>

export const CartProvider = ({ children }) => {

    //pasa la info a todo lo que tenga como hijo
    const [cart, setCart] = useState([])

    //--datos y logica del carrito van aca, entre la declaracion del provider y el return--

    //funciones que modifiquen cart
    //agregar item al carrito 
    const addItem = (item, cantidad) => {
        // console.log("item", item, 'cantidad:', cantidad)
        // console.log({...item, quatity:cantidad})
        if (isInCart(item.id)) {
            //console.log('esta en el carrito')
            //sumar cantidades
            const carritoActualizado = cart.map((prod) => {
                if (item.id === prod.id) {
                    //sumar las cantidades
                    return { ...prod, quantity: prod.quantity + cantidad }

                } else {
                    //retornar el objeto sin modificar
                    return prod
                }
            })
            setCart(carritoActualizado)

            //version corta
            // setCart(
            //     art.map((prod) => {
            //     if (item.id === prod.id) {
            //         return {...prod, quantity: prod.quantity + cantidad}

            //     } else {
            //         return prod
            //     }
            // })
            // )


        } else {
            //agrego el item nuevo
            setCart([...cart, { ...item, quantity: cantidad }])
        }

    }

    //Eliminar un item completamente del array
    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id)) // mantiene todos los id diferentes al indicado
    }

    //borrar carrito completo
    const clear = () => {
        setCart([])
    }

    //verificar si existe o no en el carrito, debe retornar boolean
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }


    //FALTAN ESTAS FUINCIONES
    //cantidad de items (sumar cantidades) 

    
    const valorTotal = () => {
        return cart.reduce((acumulador, item) => 
            acumulador + (item.price * item.quantity), 0);
    };

        const totalItems = () => {
        return cart.reduce((acumulador, item) => 
            acumulador + item.quantity, 0);
    };

console.log(totalItems())

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, valorTotal, totalItems }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;