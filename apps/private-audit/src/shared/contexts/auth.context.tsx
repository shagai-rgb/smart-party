import {
  PropsWithChildren,
  createContext,
  use,
  useCallback,
  useEffect,
  useState
} from 'react'

import { type User } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { sign_out, userStateListener } from '../constants/firebase'
import { api } from '../utils/fetch'

type TAuthContext = {
  isLoading: boolean
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  signOut: () => Promise<void>
}

const IState: TAuthContext = {
  isLoading: true,
  user: null,
  setUser: () => {},
  signOut: async () => {}
}

const AuthContext = createContext<TAuthContext>(IState)

export function AuthProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(IState.isLoading)
  const [user, setUser] = useState<User | null>(IState.user)

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      if (user) {
        setUser(user)
      }

      setIsLoading(false)
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    const reqInterceptor = api.interceptors.request.use(
      async (config) => {
        if (user) {
          config.headers.Authorization = `Bearer ${await user.getIdToken()}`
        }
        return config
      },
      (err) => Promise.reject(err)
    )

    return () => {
      api.interceptors.request.eject(reqInterceptor)
    }
  }, [user])

  const signOut = useCallback(async () => {
    setIsLoading(true)
    try {
      await sign_out()
      setUser(null)
    } finally {
      setIsLoading(false)
      navigate('/login')
    }
  }, [navigate])

  const value: TAuthContext = {
    isLoading,
    user,
    setUser,
    signOut
  }

  return <AuthContext value={value}>{children}</AuthContext>
}

export const useAuth = () => {
  const context = use(AuthContext)

  if (context === undefined)
    throw new Error('useAuth must be used within a AuthProvider')

  return context
}
