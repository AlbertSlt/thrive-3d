//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import IntemDetailContainer from './components/IntemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Nosotros from './components/Nosotros'
//importo el provider y envuelvo a quienes deben recibir acceso
import { CartProvider } from './context/CartContext'
import CartContainer from './components/CartContainer'
import { useEffect } from 'react'
import { getItems } from './firebase'


function App() {

  //en App configuramos y definimos las rutas de la App
  // no poner estilos en App, llevar los estilos a los componentes
  //browserRouter debe envolver todo lo que se vera en app
  //arriba o abajo en todas las paginas va siempre arriba o abajo de <Routes></Routes>


  //ejemplo Firebase
  // useEffect(() => {
  //   getItems();
  // }, [])


  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greetings="Nuestros productos" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greetings="Categoria: " />} />
          <Route path='/item/:id' element={<IntemDetailContainer />} /> {/*acá itemDetailContainer es quien indica el id*/}
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
