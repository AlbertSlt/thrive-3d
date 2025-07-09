import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import LoaderComponent from "./LoaderComponent";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";


const ItemListContainer = (props) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const productsCollection = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products")
    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setData(list)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))

  }, [categoryId])

  return (
    <>
      {/* <button onClick={subirData}>Subir productos</button> */}
      {
        loading ? <LoaderComponent />
          : <div>
            <h1 style={{ textAlign: "center", marginTop: "1.5rem" }}>{props.greetings}{categoryId}</h1>
            <ItemList data={data} />
          </div>
      }
    </>
  )
}

export default ItemListContainer;