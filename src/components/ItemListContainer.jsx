import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import Input from "../examples/Input";

const ItemListContainer = (props) => {

  const [data, setData] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        if (categoryId) {
          //filtro
          setData(respuesta.filter((prod) => prod.category === categoryId))
        } else {
          //no filtro
          setData(respuesta)
        }
      })
      .catch((error) => console.log(error));

  }, [categoryId])

  // console.log(data)
  return (
    <div>
      <h1 style={{textAlign: "center", marginTop: "1.5rem"}}>{props.greetings}{categoryId}</h1>
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer;

// este es el elemento padre, encargado de hacer la peticion a la api, tratar esa promesa y guardarla en un estado.
// Luego llama a su hijo ItemList