import { useState, useEffect } from "react"
import { getProductos,} from "../../../Asyncronico"
import ItemList from "../ItemList/ItemList"
// import { useParams } from "react-router-dom"


const ItemListContainer = () => {
  const [productos, setProductos] = useState ([])

  useEffect (() => {
    getProductos ()
    .then((res) =>{
      setProductos(res)
  })
  .catch((error) => {
        console.error("Error cargando productos:", error)
      })
  }, [])



  return (
 <>
    <h1>Mis  productos</h1>
    <ItemList productos={productos}/>

    </>
  )
}

export default ItemListContainer