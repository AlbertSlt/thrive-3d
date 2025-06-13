import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import IntemDetailContainer from './components/IntemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Nosotros from './components/Nosotros'


function App() {

  //en App configuramos y definimos las rutas de la App
  // no poner estilos en App, llevar los estilos a los componentes
  //browserRouter debe envolver todo lo que se vera en app
  //arriba o abajo en todas las paginas va siempre arriba o abajo de <Routes></Routes>

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greetings="Nuestros productos" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greetings="Categoria: " />} />
        <Route path='/item/:id' element={<IntemDetailContainer />} /> {/*acá itemDetailContainer es quien indica el id*/}
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
