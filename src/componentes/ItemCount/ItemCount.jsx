import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, inicial = 1, onAdd }) => {
  const [contador, setContador] = useState(inicial);

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

  return (
    <div className="itemCountContainer">
      <div className="botones">
        <button onClick={decrementar}> - </button>
        <p>{contador}</p>
        <button onClick={incrementar}> + </button>
        <button
          className="botonAgregarAlCarrito"
          onClick={() => onAdd(contador)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
