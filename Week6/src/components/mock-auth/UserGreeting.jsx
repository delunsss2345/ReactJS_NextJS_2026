import { useSelector } from 'react-redux'
import { selectMockUser } from '../../features/mock-auth/selector'

function UserGreeting({ title, hint }) {
  const mockUser = useSelector(selectMockUser)

  return (
    <div className="user-greeting">
      <p className="eyebrow">{title}</p>
      <strong>{mockUser ? mockUser.username : 'Guest'}</strong>
      <p className="muted-text">
        {mockUser
          ? `Đọc cùng một username từ store. ${hint}`
          : 'Chưa có user trong global state.'}
      </p>
    </div>
  )
}

export default UserGreeting
