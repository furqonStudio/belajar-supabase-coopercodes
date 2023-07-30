import AddItem from './AddItem'
import ItemList from './ItemList'

const Home = () => {
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
