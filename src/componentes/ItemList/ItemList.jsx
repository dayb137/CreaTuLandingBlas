import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({articulos}) => {
  return (
    <div>
      {articulos.map(item => <Item key={item.ID} {...item}/>)}
    </div>
  )
}

export default ItemList