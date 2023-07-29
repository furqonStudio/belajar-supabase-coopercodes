/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

const Context = createContext()

const Provider = ({ children }) => {
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
    } catch (error) {
      alert(error.message)
    }
  }

  return <Context.Provider value={products}>{children}</Context.Provider>
}

export { Context, Provider }
