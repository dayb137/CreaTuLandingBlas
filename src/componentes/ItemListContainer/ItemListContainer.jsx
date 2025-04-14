import React, { useEffect, useState } from "react";
import { getArticulos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    getArticulos()
      .then(respuesta => setArticulos(respuesta))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h2 className="articulosTitulo"> Articulos </h2>
      <ItemList articulos={articulos}/>
    </>
  );
};

export default ItemListContainer;
