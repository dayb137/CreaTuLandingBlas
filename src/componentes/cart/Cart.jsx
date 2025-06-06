import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { carrito, total, totalArticulos, resetCarrito } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="cartVacio">
        <h2> Tu carrito esta vacio!! </h2>
        <Link to="/">
          <button className="volverBtn"> Volver a la tienda</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      <h2>Tu carrito</h2>
      {carrito.map((art) => (
        <CartItem key={art.item.id} {...art} />
      ))}
      <h3>Total de tu compra: ${total}</h3>
      <h3>Total de articulos: {totalArticulos}</h3>
      <button  onClick={() => resetCarrito()}> Vaciar carrito</button>
      <Link to="/checkout"> Finalizar compra</Link>
    </div>
  );
};

export default Cart;
