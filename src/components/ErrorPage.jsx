import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
     <div
      style={{
        margin: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        height: '80vh'
      }}
    >
      <img src="404.png" alt="" style={{maxHeight: '22rem'}}/>
      <h2>Guer ar ui gouin? 🤔</h2>
      <p style={{textAlign:'center'}}>Lo siento, lo que buscas no está aqui...  Y el amor tampoco, sigue buscando, o vuelve al Home.</p>
      <Link to='/' className='btn btn-outline-dark'> Volver a casa... Solo para ver al perro</Link>
    </div>
  )
}

export default ErrorPage