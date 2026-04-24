import { useDispatch, useSelector } from 'react-redux'
import { selectAuthUser, selectIsAuthenticated } from '../../features/auth/selector'
import { loginWithApi, logout } from '../../features/auth/slice/authSlice'
import { pushNotification } from '../../features/notification/slice/notificationSlice'

function MiniAuthPanel() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const user = useSelector(selectAuthUser)

  const handleQuickLogin = async () => {
    try {
      await dispatch(
        loginWithApi({
          username: 'emilys',
          password: 'emilyspass',
        }),
      ).unwrap()

      dispatch(
        pushNotification({
          title: 'Mini app đã login',
          message: 'Auth global đã sẵn sàng cho toàn bộ ứng dụng.',
          type: 'success',
        }),
      )
    } catch {
      dispatch(
        pushNotification({
          title: 'Không thể login mini app',
          message: 'API auth đang có lỗi hoặc thông tin đăng nhập không hợp lệ.',
          type: 'error',
        }),
      )
    }
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(
      pushNotification({
        title: 'Mini app logout',
        message: 'Auth state đã được reset.',
        type: 'info',
      }),
    )
  }

  return (
    <div className="stack-gap">
      <p className="eyebrow">Auth global</p>
      {isAuthenticated && user ? (
        <div className="profile-card compact">
          <img className="avatar" src={user.image} alt={user.username} />
          <div>
            <strong>{user.firstName} {user.lastName}</strong>
            <p className="muted-text">@{user.username}</p>
          </div>
        </div>
      ) : (
        <p className="muted-text">Chưa login. Bấm nút dưới để dùng credential mẫu từ DummyJSON.</p>
      )}

      <div className="button-row">
        <button type="button" className="btn btn-primary" onClick={handleQuickLogin}>
          Login nhanh
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

export default MiniAuthPanel
