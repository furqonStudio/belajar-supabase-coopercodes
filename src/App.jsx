import AddItem from './components/AddItem'
import ItemList from './components/ItemList'

function App() {
  return (
    <div className="container m-auto mt-24">
      <h1>CRUD Supabase</h1>
      <AddItem />
      <hr className="my-6 border-slate-600" />
      <ItemList />
    </div>
  )
}

export default App
