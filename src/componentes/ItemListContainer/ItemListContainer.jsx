import { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import {db} from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import "../../styles/BootstrapSpinners.scss";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(false)
  
  const {idCategoria} = useParams()

  useEffect(() =>{
    setLoading(true)
    const misArticulos = idCategoria ? query(collection(db,"articulos"), where ("idCat", "==", idCategoria)) : collection(db, "articulos")
  
    getDocs(misArticulos)
    .then(res => {
      const nuevosArticulos = res.docs.map(doc => {
        const data = doc.data()
        return {id : doc.id, ...data}
      })
      setArticulos(nuevosArticulos)
    })
    .catch(error => console.log(error))
    .finally(()=>{
      setLoading(false)
    })
  
  },[idCategoria])



  return (
    <>
      <h2 className="articulosTitulo"> Articulos </h2>
      {loading ? <Loader/> : <ItemList articulos={articulos}/>}
    </>
  );
};

export default ItemListContainer;
