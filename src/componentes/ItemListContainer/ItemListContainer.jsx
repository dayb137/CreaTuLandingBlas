import React, { useEffect, useState } from "react";
import { getArticulos, getArticulosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [articulos, setArticulos] = useState([]);
  
  const {idCategoria} = useParams()

  useEffect(() => {
    const funcionArticulos = idCategoria ? getArticulosPorCategoria : getArticulos;
    funcionArticulos(idCategoria)
      .then(respuesta => setArticulos(respuesta))
      
  }, [idCategoria]);

  return (
    <>
      <h2 className="articulosTitulo"> Articulos </h2>
      <ItemList articulos={articulos}/>
    </>
  );
};

export default ItemListContainer;
