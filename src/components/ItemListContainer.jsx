import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import LoaderComponent from "./LoaderComponent";
//import Input from "../examples/Input";

const ItemListContainer = (props) => {

  const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
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
      .catch((error) => console.log(error))
      .finally(()=> setLoading(false));

  }, [categoryId])

  return (
    <>
      {
        loading ? <LoaderComponent /> //loading existe? caso contraro renderiza el siguiente div
        :     <div>
      <h1 style={{textAlign: "center", marginTop: "1.5rem"}}>{props.greetings}{categoryId}</h1>
      <ItemList data={data} />
    </div>
      }
    </>
  )
}

export default ItemListContainer;

// este es el elemento padre, encargado de hacer la peticion a la api, tratar esa promesa y guardarla en un estado.
// Luego llama a su hijo ItemList