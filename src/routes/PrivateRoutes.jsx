import { useContext } from 'react'
import { Context } from '../context/Context'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = (props) => {
  const { session } = useContext(Context)

  return session ? props.children : <Navigate to="/login" />
}

export default PrivateRoutes
