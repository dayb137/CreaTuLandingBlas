import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ nombre, precio, img, descripcion, stock}) => {
  const AgregarAlCarrito = (cantidad) => {
    
  }
    
  return (
    <div className='CardAarticulo'>
        <div>
        <img className='ArtImage'src={img} alt={nombre}/>
        </div>
    <div className='ArtInfo'>
      
        <h2 >Nombre: {nombre} </h2>
        <h3 >Precio: ${precio} </h3>
        <p>Descripcion: {descripcion}</p>

    </div>
        
    <ItemCount stock={stock} agregar = {AgregarAlCarrito}/>
    <div>
     <button className='Links'> <Link to="/cart"> Finalizar carrito</Link></button>
      <button className='Links'> <Link to="/"> Seguir comprando</Link></button>
    </div>
        
    </div>
  )
}

export default ItemDetail