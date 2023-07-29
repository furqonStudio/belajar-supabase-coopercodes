import { useState } from 'react'
import { supabase } from '../supabaseClient'

const AddItem = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const addProduct = async () => {
    const { data, error } = await supabase
      .from('products')
      .insert([{ name, description }])
      .select()
    window.location.reload()
  }

  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Input name"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setName(e.target.value)}
        />
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          type="text"
          placeholder="Input description"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary mt-4" onClick={() => addProduct()}>
          Add
        </button>
      </div>
    </div>
  )
}

export default AddItem
