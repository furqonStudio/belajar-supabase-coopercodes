const AddItem = () => {
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
        />
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          type="text"
          placeholder="Input description"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary mt-4">Add</button>
      </div>
    </div>
  )
}

export default AddItem
