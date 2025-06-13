//funcion HOC



import React, { useEffect } from 'react'

const withLogging = (WrappedComponent) => {
    //Este es el nuevo componente que se crea
    //por las dudas preparo para que reciba props
    const ComponentWithLogging = (props) => {


        //este efecto se ejecuta cuando el componente aparece en pantalla
        useEffect(() => {
            console.log (`${WrappedComponent.name} se monto 😒`)
        },[])
        //mostrando el componente original con todas sus props
        return <WrappedComponent {...props} /> //spred de las propiedades para que se escriban

    }

    return ComponentWithLogging
}

export default withLogging