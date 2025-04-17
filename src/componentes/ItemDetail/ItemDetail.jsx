import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, precio, img, descripcion, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const manejadorCantidad= (cantidad) => {
    setAgregarCantidad(cantidad)
    console.log("productos agregados:" + cantidad)
  }
    
  return (
    <div>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: ${precio} </h3>
        <img src={img} alt={nombre}/>
        <p>Descripcion:{descripcion}</p>
        

        {
          agregarCantidad > 0 ?( <Link to="/cart"> Terminar Compra</Link> ) : ( <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/> )
        }
        
    </div>
  )
}

export default ItemDetail