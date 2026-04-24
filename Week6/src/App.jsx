import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthToken, selectAuthUser } from './features/auth/selector'
import { fetchProfile } from './features/auth/slice/authSlice'
import { selectTheme } from './features/theme/selector'
import AppRouter from './routes/AppRouter'

function App() {
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)
  const token = useSelector(selectAuthToken)
  const user = useSelector(selectAuthUser)
  const hasBootstrappedSession = useRef(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('week6_theme', theme)
  }, [theme])

  useEffect(() => {
    if (!token) {
      hasBootstrappedSession.current = false
      return
    }

    if (!user && !hasBootstrappedSession.current) {
      hasBootstrappedSession.current = true
      dispatch(fetchProfile(token))
    }
  }, [dispatch, token, user])

  return <AppRouter />
}

export default App
