/* eslint-disable react/prop-types */
import { useState } from 'react'
import { supabase } from '../supabaseClient'

const Item = ({ product }) => {
  const [name, setName] = useState(product.name)
  const [description, setDescription] = useState(product.description)
  const [isEditing, setIsEditing] = useState(false)

  const updateProduct = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .update({ name, description })
        .eq('id', product.id)
        .select()
      window.location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

  const deleteProduct = async () => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', product.id)
      window.location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="card bg-slate-800 w-80 h-64 shadow-xl" key={product.id}>
      {!isEditing ? (
        <div className="card-body pt-6 ">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <div className="card-actions mt-2">
            <button
              className="btn btn-primary btn-sm w-[7.5rem]"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-secondary btn-sm w-[7.5rem]"
              onClick={() => deleteProduct()}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="form-control w-full p-6 pt-3">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Input name"
            className="input input-bordered w-full max-w-xs"
            defaultValue={product.name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Input description"
            className="input input-bordered w-full max-w-xs"
            defaultValue={product.description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="card-actions mt-4">
            <button
              className="btn btn-secondary btn-sm w-[8.2rem]"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary btn-sm w-[8.2rem]"
              onClick={() => updateProduct() && setIsEditing(false)}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Item
