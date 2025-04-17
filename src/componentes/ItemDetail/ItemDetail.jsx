import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({nombre, precio, img, descripcion}) => {
    
  return (
    <div className='CardAarticulo'>
        <div className='ArtImage'>
        <img src={img} alt={nombre}/>
        </div>
    <div className='ArtInfo'>
      
        <h2 >Nombre: {nombre} </h2>
        <h3 >Precio: ${precio} </h3>
        <p>Descripcion:{descripcion}</p>

    </div>
        
        
    </div>
  )
}

export default ItemDetail