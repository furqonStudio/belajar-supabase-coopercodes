import Item from './Item'
import { useContext } from 'react'
import { Context } from '../context/Context'

const ItemList = () => {
  const { products } = useContext(Context)

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {products.map((product, index) => (
          <Item product={{ ...product }} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ItemList
