import React, { useState, useContext} from "react";
import "./ItemCount.css";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ stock, inicial = 1, item  }) => {
  const [contador, setContador] = useState(inicial);
  const {addItem} = useContext(CartContext)

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

 

  const agregarAlCarrito = () => {
    if (stock > 0) {
      addItem(item , contador);
    }
  };

  return (
    <div className="ItemCountContainer">
      <button onClick={decrementar}> - </button>
      <p>{contador}</p>
      <button onClick={incrementar}> + </button>
      <button onClick={agregarAlCarrito}>Agregar al carrito</button>

    </div>
  );
};

export default ItemCount;
