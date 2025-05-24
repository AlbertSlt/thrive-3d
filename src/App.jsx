import { useState } from 'react'
import NavBar from './components/NavBar'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <main className="contenido-principal">
        <ItemListContainer greetings="Acá viene lo bueno!" />
      </main>
    </>

  )
}

export default App
