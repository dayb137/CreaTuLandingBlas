import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./CartItem.css";


const CartItem = ({item,cantidad}) => {
    const {eliminarArticulo} = useContext(CartContext)

  return (
    <div className="cartItem">
      <div className="cartItemLeft">
        <img src={item.img} alt={item.nombre} />
        <div className="cartItemInfo">
          <h4>{item.nombre}</h4>
          <p>Cantidad: {cantidad}</p>
          <p>Precio: ${item.precio}</p>
        </div>
      </div>
      <div className="cartItemRight">
        <span>Total: ${item.precio * cantidad}</span>
        <button onClick={() => eliminarArticulo(item.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem