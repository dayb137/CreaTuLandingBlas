import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Form, useParams } from "react-router-dom";
import {db} from '../../services/config'
import {getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [articulo, setArticulo] = useState(null)
  const { idItem } = useParams();

  useEffect (() => {
    const nuevoDoc = doc(db, "articulos", idItem)

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data()
        const nuevosArticulos = {id: res.id, ...data}
        setArticulo(nuevosArticulos)
      })
      .catch(error => console.log(error))

  }, [idItem])

  return (
    <div>
       <ItemDetail {...articulo} /> 
    </div>
  );
};

export default ItemDetailContainer;
