/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

const Context = createContext()

const Provider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [session, setSession] = useState(null)

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
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

  return (
    <Context.Provider value={{ products, session }}>
      {children}
    </Context.Provider>
  )
}

export { Context, Provider }
