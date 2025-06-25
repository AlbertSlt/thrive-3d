import { useEffect, useState } from "react";
import { getProducts, productos } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import LoaderComponent from "./LoaderComponent";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
//import Input from "../examples/Input";

const ItemListContainer = (props) => {

  const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()


  //FIREBASE

  useEffect(() => {
    setLoading(true)
    //conectar con collection
    const productsCollection = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId ))  // propiedad de documento, condicion y valor
      : collection(db, "products") //Metodo importado de firebase, datos (const hecha en firebase.jsx, "nombre de coleccion")
    //pedir los datos
    getDocs(productsCollection) //metodo fb, devuelve una promesa
      .then((res) => {
        //limpiar los datos para poder usarlos
        //console.log(res.docs)
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setData(list)
          .catch((errpr) => console.log(error))
        .finally(()=>setLoading(false))
    })
    
  },[categoryId])




  //PROMESA MOCK LOCAL
  // useEffect(() => {
  //   setLoading(true)
  //   getProducts()
  //     .then((respuesta) => {
  //       if (categoryId) {
  //         //filtro
  //         setData(respuesta.filter((prod) => prod.category === categoryId))
  //       } else {
  //         //no filtro
  //         setData(respuesta)
  //       }
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(()=> setLoading(false));

  // }, [categoryId])

//HACER UNA SOLA VEZ SINO REPETIMOS OBJETOS
  const subirData = () => {
    console.log('click!')
    
    const collectionAgregar = collection(db, "products")
    productos.map ((prod)=>addDoc(collectionAgregar, prod))

  }


  return (
    <>
      <button onClick={subirData}>Subir productos</button> {/* ------ DESPUES BORRO ESTE BOTON AL HABER SUBIDO LOS PRODUCTOS ----------- */}
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