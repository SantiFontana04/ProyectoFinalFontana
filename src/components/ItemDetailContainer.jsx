import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detail, setDetail] =useState({})
    const [cargando, setCargando]= useState(false)
     const [invalid, setInvalid]= useState(false)
    const {id} = useParams()

  useEffect(()=>{
    setCargando(true)
    const productCollection = collection(db, "products")
    const docRef = doc(productCollection, id)

    getDoc(docRef)
    .then((res)=>{
      if(res.data()){
        setDetail({id:res.id, ...res.data()})
      }else{
        setInvalid(true)
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setCargando(false))
  },[])

    if(invalid){
      return <div>
        <h1>El producto no existe! 😭</h1>
        <Link to='/' className='btn btn-dark'> Ir a home</Link>
      </div>
    }
  return (
    <>
    {cargando ? <LoaderComponent/> : <ItemDetail detail={detail}/>}
    </>
  )
}

export default ItemDetailContainer