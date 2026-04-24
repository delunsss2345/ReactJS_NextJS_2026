import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAuthStatus,
  selectIsAuthenticated,
  selectProfileLoading,
} from '../../features/auth/selector'
import {
  fetchProfile,
  loginWithApi,
  logout,
} from '../../features/auth/slice/authSlice'
import { pushNotification } from '../../features/notification/slice/notificationSlice'

function LoginApiForm() {
  const dispatch = useDispatch()
  const status = useSelector(selectAuthStatus)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const profileLoading = useSelector(selectProfileLoading)
  const [formState, setFormState] = useState({
    username: 'emilys',
    password: 'emilyspass',
  })

  const handleChange = (field) => (event) => {
    setFormState((current) => ({
      ...current,
      [field]: event.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await dispatch(loginWithApi(formState)).unwrap()
      dispatch(
        pushNotification({
          title: 'Login API thành công',
          message: 'Token đã được lưu vào global state.',
          type: 'success',
        }),
      )
    } catch {
      dispatch(
        pushNotification({
          title: 'Login thất bại',
          message: 'Kiểm tra lại username hoặc password mẫu.',
          type: 'error',
        }),
      )
    }
  }

  const handleFetchProfile = () => {
    dispatch(fetchProfile())
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(
      pushNotification({
        title: 'Đã logout',
        message: 'Token đã được xoá khỏi Redux store và localStorage.',
        type: 'info',
      }),
    )
  }

  return (
    <div className="stack-gap">
      <form className="form-grid" onSubmit={handleSubmit}>
        <label className="field">
          <span>Username</span>
          <input
            type="text"
            className="input"
            value={formState.username}
            onChange={handleChange('username')}
          />
        </label>
        <label className="field">
          <span>Password</span>
          <input
            type="password"
            className="input"
            value={formState.password}
            onChange={handleChange('password')}
          />
        </label>
        <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Đang login...' : 'Login API'}
        </button>
      </form>

      <div className="button-row">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleFetchProfile}
          disabled={!isAuthenticated || profileLoading}
        >
          {profileLoading ? 'Đang gọi /auth/me...' : 'Gọi API cần auth'}
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleLogout}
          disabled={!isAuthenticated}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default LoginApiForm
