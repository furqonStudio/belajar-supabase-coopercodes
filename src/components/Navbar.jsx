import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="navbar bg-base-100 p-4 lg:px-12">
      <div className="navbar-start">
        <a className="normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-sm btn-primary"
          onClick={() => navigate('/login')}
        >
          Login
        </a>
      </div>
    </div>
  )
}

export default Navbar
