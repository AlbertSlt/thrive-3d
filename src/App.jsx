import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer greetings="Acá viene lo bueno!" />
    </>
  )
}

export default App
