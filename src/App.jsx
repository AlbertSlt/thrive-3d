import { useState } from 'react'
import NavBar from './components/NavBar'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

function App() {

  return (
    <>
      <NavBar />
      <main className="contenido-principal">
        <ItemListContainer greetings="Acá viene lo bueno!" />
        {/* <ItemCount stock={5} />
        <ItemCount stock={0} /> */}
      </main>
    </>

  )
}

export default App
