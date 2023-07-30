import { useContext, useEffect } from 'react'
import AddItem from './AddItem'
import ItemList from './ItemList'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { session } = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    if (!session) {
      navigate('/login')
    }
  }, [session, navigate])

  return (
    <div className="container m-auto mt-8">
      <h1>CRUD Supabase</h1>
      <AddItem />
      <hr className="my-6 border-slate-600" />
      <ItemList />
    </div>
  )
}

export default Home
