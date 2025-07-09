const LoaderComponent = () => {
  return (
    <div style={{ width: '100%', height: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src="/loader.gif" alt="loader" style={{ width: '100px', height: '100px' }} />
      <p style={{ fontSize: '0.5 rem' }}>cargando...</p>
    </div>
  )
}

export default LoaderComponent