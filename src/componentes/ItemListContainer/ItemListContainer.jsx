import React, { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";
import {db} from '../../services/config'
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [articulos, setArticulos] = useState([]);
  
  const {idCategoria} = useParams()

  useEffect(() =>{
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
  
  },[idCategoria])





  return (
    <>
      <h2 className="articulosTitulo"> Articulos </h2>
      <ItemList articulos={articulos}/>
    </>
  );
};

export default ItemListContainer;
