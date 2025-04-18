import React, { useEffect, useState } from "react";
import { getUnArticulo } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [articulo, setArticulo] = useState(null)
  console.log(useParams())
  const { idItem } = useParams();

  useEffect(() => {
    getUnArticulo(idItem)
    .then((respuesta) => setArticulo(respuesta))
  }, [idItem]);

  return (
    <div>
       <ItemDetail {...articulo} /> 
    </div>
  );
};

export default ItemDetailContainer;
