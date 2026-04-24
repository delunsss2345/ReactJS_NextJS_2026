import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pushNotification } from '../../features/notification/slice/notificationSlice'
import { selectMockUser } from '../../features/mock-auth/selector'
import {
  loginMockAuth,
  logoutMockAuth,
} from '../../features/mock-auth/slice/mockAuthSlice'

function MockLoginForm() {
  const dispatch = useDispatch()
  const mockUser = useSelector(selectMockUser)
  const [username, setUsername] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()

    if (!username.trim()) {
      return
    }

    dispatch(loginMockAuth(username))
    dispatch(
      pushNotification({
        title: 'Mock login thành công',
        message: `Xin chào ${username.trim()}! User đã được lưu trong store.`,
        type: 'success',
      }),
    )
    setUsername('')
  }

  const handleLogout = () => {
    dispatch(logoutMockAuth())
    dispatch(
      pushNotification({
        title: 'Đã logout',
        message: 'Mock user đã được xoá khỏi global state.',
        type: 'info',
      }),
    )
  }

  return (
    <div className="stack-gap">
      <form className="form-grid" onSubmit={handleLogin}>
        <label className="field">
          <span>Username giả lập</span>
          <input
            type="text"
            className="input"
            placeholder="Nhập username bất kỳ"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Login giả lập
        </button>
      </form>

      <div className="inline-banner">
        <span>Trạng thái:</span>
        <strong>{mockUser ? `Đang đăng nhập với ${mockUser.username}` : 'Chưa đăng nhập'}</strong>
      </div>

      <button
        type="button"
        className="btn btn-danger"
        onClick={handleLogout}
        disabled={!mockUser}
      >
        Logout
      </button>
    </div>
  )
}

export default MockLoginForm
