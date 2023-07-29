import Item from './Item'
import { supabase } from '../supabaseClient'
import { useEffect, useState } from 'react'

const ItemList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      let { data: products, error } = await supabase
        .from('products')
        .select('*')
      setProducts(products)
      console.log(products)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <div className="flex gap-4">
        {products.map((product, index) => (
          <Item product={product} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ItemList
