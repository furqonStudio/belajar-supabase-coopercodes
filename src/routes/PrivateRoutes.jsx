import { useContext } from 'react'
import { Context } from '../context/Context'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const { session } = useContext(Context)

  return session ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
