import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({item,cantidad}) => {
    const {eliminarArticulo} = useContext(CartContext)

  return (
    <div>
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: {item.precio}</p>
        <button onClick={()=> eliminarArticulo(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem