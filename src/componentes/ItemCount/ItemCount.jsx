import React, { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, agregar }) => {
  const [contador, setContador] = useState(1);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };


  {/** queda pendiente para la proxima entrega  */}
  
  const AgregarAlCarrito = () => {
    if (stock > 0) {
      agregar(contador);
    }
  };

  return (
    <div className="ItemCountContainer">

      <button onClick={decrementar}> - </button>

      <p>{contador}</p>

      <button onClick={incrementar}> + </button>
    </div>
  );
};

export default ItemCount;
