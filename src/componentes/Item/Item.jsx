import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id,nombre, precio, img}) => {
  return (
    <div >
        <img src= {img} alt= {nombre}/>
        <div></div>
        <h3>Articulo: {nombre}</h3>
        <p>Precio: {precio}</p>
        <Link to={'/item/${id}'}>
        <button>Ver Detalle</button>
        </Link>
    </div>
  )
}

export default Item