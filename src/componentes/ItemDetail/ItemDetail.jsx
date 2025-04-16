import React from 'react'

const ItemDetail = ({nombre, precio, img, descripcion}) => {
    
  return (
    <div>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: ${precio} </h3>
        <img src={img} alt={nombre}/>
        <p>Descripcion:{descripcion}</p>
        
        
    </div>
  )
}

export default ItemDetail