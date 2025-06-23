import React from 'react'
import { Spinner } from 'react-bootstrap'
//react spinner por ej, o gif, o algo, react bootstrap
const LoaderComponent = () => {
  return (
    <div style={{ width: '100%', height: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src="/loader.gif" alt="loader" style={{ width: '100px', height: '100px' }} />
      {/* <Spinner animation='grow' variant='warning'></Spinner> */}
      <p style={{ fontSize: '0.5 rem' }}>cargando...</p>
    </div>
  )
}

export default LoaderComponent