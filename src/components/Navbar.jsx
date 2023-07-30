import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'
import { supabase } from '../supabaseClient'

const Navbar = () => {
  const navigate = useNavigate()
  const { session } = useContext(Context)

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <div className="navbar bg-base-100 p-4 lg:px-12">
      <div className="navbar-start">
        <a className="normal-case text-xl" onClick={() => navigate('/')}>
          daisyUI
        </a>
      </div>
      <div className="navbar-end">
        {session ? (
          <a className="btn btn-sm btn-primary" onClick={() => handleSignOut()}>
            Logout
          </a>
        ) : (
          <a
            className="btn btn-sm btn-primary"
            onClick={() => navigate('/login')}
          >
            Login
          </a>
        )}
      </div>
    </div>
  )
}

export default Navbar
