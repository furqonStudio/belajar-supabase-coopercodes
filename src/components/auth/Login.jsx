import { supabase } from '../../supabaseClient'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'

const Login = () => {
  const [user, setUser] = useState('none')
  const { session } = useContext(Context)

  useEffect(() => {
    handleGetUser()
  }, [])

  const handleGetUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    setUser(user.email)
  }

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
      <div className="text-center text-xl">
        Selamat Datang <br />
        {user}
      </div>
    )
  }
}

export default Login
