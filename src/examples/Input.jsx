import React, { useState } from 'react'

const Input = () => {

    const[name, setName] = useState('')

    const inputHandler = (event) => {
        console.log(event.target.value, 'evento')
        setName(event.target.value)
    }

    const noVocales = (e) => {
        console.log(e.key, 'evento')
        if ('aeiou'.includes(e.key.toLowerCase())) {
            e.preventDefault()
            //alert('no vocales por favor')
        }
    }

  return (
      <div>          
          <input placeholder='Ingrese su nombre' type='text' name='nombre-completo' className='form-control' onChange={inputHandler} />
          <p>{name}</p>
          <h1>No aceptamos vocales</h1>
          <input placeholder='No vocales' type='text'  className='form-control'onKeyDown={noVocales} />
      </div>
  )
}

export default Input