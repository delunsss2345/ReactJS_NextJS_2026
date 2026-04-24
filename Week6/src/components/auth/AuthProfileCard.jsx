import { useSelector } from 'react-redux'
import {
  selectAuthError,
  selectAuthStatus,
  selectAuthToken,
  selectAuthUser,
  selectProfileError,
} from '../../features/auth/selector'

function AuthProfileCard() {
  const user = useSelector(selectAuthUser)
  const token = useSelector(selectAuthToken)
  const status = useSelector(selectAuthStatus)
  const authError = useSelector(selectAuthError)
  const profileError = useSelector(selectProfileError)

  return (
    <div className="stack-gap">
      <div className="summary-box">
        <span>Auth status</span>
        <strong>{status}</strong>
      </div>

      <div className="token-box">
        <span>Token global</span>
        <code>{token ? `${token.slice(0, 24)}...` : 'Chưa có token'}</code>
      </div>

      {authError ? <p className="error-text">{authError}</p> : null}
      {profileError ? <p className="error-text">{profileError}</p> : null}

      {user ? (
        <div className="profile-card">
          <img className="avatar avatar-large" src={user.image} alt={user.username} />
          <div>
            <h3>{user.firstName} {user.lastName}</h3>
            <p className="muted-text">@{user.username}</p>
            <p className="muted-text">{user.email}</p>
          </div>
        </div>
      ) : (
        <p className="muted-text">
          Sau khi login, bấm thêm nút gọi API cần auth để lấy profile chi tiết từ server.
        </p>
      )}
    </div>
  )
}

export default AuthProfileCard
