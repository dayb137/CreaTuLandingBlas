import React from 'react'
import { useContext } from 'react'
import {CartContext} from "../../context/CartContext"
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
  const {carrito, total, totalArticulos, resetCarrito } = useContext(CartContext)

  if (carrito.length === 0) {
    return(
      <div>
        <h2> Tu carrito esta vacio!! </h2>
        <Link to="/">
        <button> Volver a la tienda</button>
        </Link>
      </div>
    )
    
  }
 

  return (
    <div>
      <h2>Tu carrito</h2>
      {
        carrito.map(art => <CartItem key={art.item.id} {...art}/>)
      }
      <h3>Total de tu compra: ${total}</h3>
      <h3>Total de articulos: {totalArticulos}</h3>
      <button onClick={() => resetCarrito()}> Vaciar carrito</button>
      <Link to="/checkout"> Finalizar compra</Link>
    </div>
  )
}

export default Cart