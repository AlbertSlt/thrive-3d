import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

  const [data, setData] = useState([])
  useEffect(() => {
    getProducts()
      .then((respuesta) => setData(respuesta))
      .catch((error) => console.log(error))
  }, [])

  // console.log(data)
  return (
    <div>
      <h1>{props.greetings}</h1>
     <ItemList data={data}/>
    </div>
  )
}

export default ItemListContainer;

// este es el elemento padre, encargado de hacer la peticion a la api, tratar esa promesa y guardarla en un estado.
// Luego llama a su hijo ItemList