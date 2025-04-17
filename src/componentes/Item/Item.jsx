import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="ItemCard">
      <img src={img} alt={nombre} />

      <div className="ItemCardContent">
        <h3>Articulo: {nombre}</h3>
        <p>Precio: {precio}</p>
        <Link to={"/item/${id}"}>
          <button>Ver Detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
