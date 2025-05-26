import { useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";


const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {
  const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);
  const { addItem } = useContext(CartContext);

  const AgregarAlCarrito = (cantidad) => {
    const item = { id, nombre, precio, img };
    addItem(item, cantidad);
    setAgregadoAlCarrito(true);

    toast.success(`"${nombre}" agregado al carrito`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "ligth",
      className: "customToast",
      bodyClassName: "customToastBody",
    });
  };

  return (
    <div className="cardAarticulo">
      <div>
        <img className="artImage" src={img} alt={nombre} />
      </div>
      <div className="artInfo">
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: ${precio} </h3>
        <p>Descripcion: {descripcion}</p>
      </div>

      {!agregadoAlCarrito ? (
        <ItemCount stock={stock} inicial={1} onAdd={AgregarAlCarrito} />
      ) : (
        <>
          <Link to="/cart" className="linkButton">
            Finalizar carrito
          </Link>{" "}
          <Link to="/" className="linkButton">
            Seguir comprando
          </Link>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
