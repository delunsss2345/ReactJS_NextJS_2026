import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Panel from '../components/common/Panel'
import { selectAuthUser, selectIsAuthenticated } from '../features/auth/selector'
import { selectCartTotalQuantity } from '../features/cart/selector'
import { selectMockUser } from '../features/mock-auth/selector'
import { selectTheme } from '../features/theme/selector'
import { exerciseLinks } from '../routes/routeConfig'

function HomePage() {
  const theme = useSelector(selectTheme)
  const cartCount = useSelector(selectCartTotalQuantity)
  const mockUser = useSelector(selectMockUser)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const authUser = useSelector(selectAuthUser)

  return (
    <div className="page">
      <section className="page-hero">
        <p className="eyebrow">Buổi 6 - State Management</p>
        <h2>10 bài Redux Toolkit, mỗi bài một route riêng</h2>
        <p className="hero-copy">
          App này gom đủ các bài từ counter, theme, auth, todo, cart cho tới async API, token và mini app tổng hợp.
        </p>
      </section>

      <div className="metric-grid">
        <article className="metric-card">
          <span>Theme</span>
          <strong>{theme}</strong>
        </article>
        <article className="metric-card">
          <span>Mock User</span>
          <strong>{mockUser?.username || 'Guest'}</strong>
        </article>
        <article className="metric-card">
          <span>API Auth</span>
          <strong>{isAuthenticated ? authUser?.username || 'Ready' : 'Guest'}</strong>
        </article>
        <article className="metric-card">
          <span>Cart Global</span>
          <strong>{cartCount} món</strong>
        </article>
      </div>

      <Panel
        title="Danh sách bài tập"
        subtitle="Mỗi card dẫn tới một page riêng để bạn mở từng bài và kiểm tra state toàn cục."
      >
        <div className="route-grid">
          {exerciseLinks.map((exercise) => (
            <Link key={exercise.path} to={exercise.path} className="route-card">
              <span className="eyebrow">{exercise.label}</span>
              <h3>{exercise.title}</h3>
              <p>{exercise.summary}</p>
            </Link>
          ))}
        </div>
      </Panel>

      <Panel title="Ghi chú nhanh" subtitle="Bài 7 đến bài 10 đang dùng DummyJSON để fetch thật từ API công khai.">
        <div className="stack-gap">
          <div className="inline-banner">
            <span>Credential mẫu cho bài 9 và bài 10</span>
            <strong>emilys / emilyspass</strong>
          </div>
          <p className="muted-text">
            Theme được lưu vào localStorage. Token auth cũng được lưu để khi reload trang vẫn có thể gọi lại profile.
          </p>
        </div>
      </Panel>
    </div>
  )
}

export default HomePage
