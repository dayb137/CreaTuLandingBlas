import React from 'react'

const Item = ({nombre, precio, img}) => {
  return (
    <div className="itemCard">
        <img src={img} alt={nombre}/>
        <div className="itemCardContent"></div>
        <h3>Articulo: {nombre}</h3>
        <p>Precio: ${precio}</p>
        <button>Ver Detalle</button>
    </div>
  )
}

export default Item