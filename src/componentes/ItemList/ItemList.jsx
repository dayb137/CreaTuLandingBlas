import Item from '../Item/Item'
import './ItemList.css'


const ItemList = ({articulos}) => {
  return (
    <div className='itemsGrid'>
      {articulos.map(item => <Item key={item.id} {...item}/>)}
    </div>
  )
}

export default ItemList