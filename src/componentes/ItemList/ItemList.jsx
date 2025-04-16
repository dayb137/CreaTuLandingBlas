import React from 'react'
import Item from '../Item/Item'


const ItemList = ({articulos}) => {
  return (
    <div>
      {articulos.map(item => <Item key={item.id} {...item}/>)}
    </div>
  )
}

export default ItemList