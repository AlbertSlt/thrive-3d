import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'


const IntemDetailContainer = () => {
  const [detail, setDetail] = useState({})
  const [loading, setLoading] = useState(false)
  const [invalid, setInvalid] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    const productCollection = collection(db, "products")
    const docRef = doc(productCollection, id)
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetail({ id: res.id, ...res.data() })
        } else {
          setInvalid(true)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  if (invalid) {
    return <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1 >El producto no existe :/</h1>
      <Link to='/' className='btn btn-outline-dark'>Volver al Home</Link>
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