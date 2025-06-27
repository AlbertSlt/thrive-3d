import React, { useEffect, useState } from 'react'
import { getProducts, getOneProduct } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'


//OPCION 1 - usando la misma promise que itemListContainer
// const IntemDetailContainer = () => {
//     const [detail, setDetail] = useState({})
//     useEffect(() => {
//         getProducts()
//             .then((res) => setDetail(res.find((item) => item.id === id)))
//             .catch((error) => console.log(error))
//     }, [])


//OPCION CON FUNCION QUE ESPERE UN ID POR PARAMETRO Y RETORNE ESE PRODUCTO
const IntemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    //const params = useParams() igual al de abajo, abajo esta desestructurado
    const [loading, setLoading] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const { id } = useParams()
    //console.log(params, 'params')

    //FIREBASE
  useEffect(()=>{
    setLoading(true)
    //conectar con nuestra coleccion
    const productCollection = collection(db, "products")
    //crear la ref
    const docRef = doc(productCollection, id)
    //pedir el doc
    //manera corta
    //const docRef= doc(db,"products", id)
    getDoc(docRef)
    .then((res)=>{
      if(res.data()){  //si el item existe
        setDetail({id:res.id, ...res.data()})
      }else{
        setInvalid(true) //si el item no existe
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[])


    //MOCK LOCAL
    // useEffect(() => {
    //     setLoader(true)
    //     getOneProduct(id) //id desestructurado
    //         .then((res) => setDetail(res))
    //         .catch((error) => console.log(error))
    //         .finally(() => setLoader(false))
    // }, [])

  
  //return anticipado
  if (invalid) {
    return <div  style={{textAlign: "center", marginTop: "2rem"}}>
      <h1 >El producto no existe :/</h1>
      <Link to ='/' className='btn btn-dark'>Volver al Home</Link>
    </div>
  }
  
    return (
        <>
            {
                loading ? <LoaderComponent /> : <ItemDetail detail={detail} />
            }
        </>
    )
}

export default IntemDetailContainer