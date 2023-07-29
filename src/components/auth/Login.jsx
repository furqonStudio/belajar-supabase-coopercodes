import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabaseClient'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect, useState } from 'react'

const Login = () => {
  const navigate = useNavigate()

  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error)
    } else {
      navigate('/login')
    }
  }

  console.log(session)

  if (!session) {
    return (
      <div className="container m-auto mt-24 w-96">
        <Auth
          supabaseClient={supabase}
          providers={['google']}
          theme="dark"
          appearance={{ theme: ThemeSupa }}
        />
      </div>
    )
  } else {
    return (
      <div>
        Logged in!
        <button className="btn btn-primary" onClick={() => handleSignOut()}>
          Sing out
        </button>
      </div>
    )
  }
}

export default Login
