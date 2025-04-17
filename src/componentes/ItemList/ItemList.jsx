import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'


const ItemList = ({articulos}) => {
  return (
    <div className='ItemsGrid'>
      {articulos.map(item => <Item key={item.id} {...item}/>)}
    </div>
  )
}

export default ItemList