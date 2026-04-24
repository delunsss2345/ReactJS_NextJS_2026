import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ToastViewport from '../components/common/ToastViewport'
import { selectAuthUser, selectIsAuthenticated } from '../features/auth/selector'
import { selectCartTotalQuantity } from '../features/cart/selector'
import { selectTheme } from '../features/theme/selector'
import { exerciseLinks } from '../routes/routeConfig'

function MainLayout() {
  const theme = useSelector(selectTheme)
  const cartCount = useSelector(selectCartTotalQuantity)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const authUser = useSelector(selectAuthUser)

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <p className="eyebrow">Week 6</p>
          <h1>Redux Toolkit Lab</h1>
          <p className="brand-copy">
            React thuần, route riêng cho từng bài và toàn bộ state đi qua
            Redux.
          </p>
        </div>

        <nav className="sidebar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link nav-link-home${isActive ? ' active' : ''}`
            }
          >
            Tổng quan
          </NavLink>

          {exerciseLinks.map((exercise) => (
            <NavLink
              key={exercise.path}
              to={exercise.path}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
            >
              <span>{exercise.label}</span>
              <small>{exercise.title}</small>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-note">
          <p>
            Demo API login dùng tài khoản mẫu:
            <strong> emilys / emilyspass</strong>
          </p>
        </div>
      </aside>

      <div className="content-shell">
        <header className="topbar">
          <div className="status-chip">
            <span>Theme</span>
            <strong>{theme}</strong>
          </div>
          <div className="status-chip">
            <span>Cart</span>
            <strong>{cartCount} món</strong>
          </div>
          <div className="status-chip">
            <span>Auth</span>
            <strong>{isAuthenticated ? authUser?.username || 'Ready' : 'Guest'}</strong>
          </div>
        </header>

        <main className="page-content">
          <Outlet />
        </main>
      </div>

      <ToastViewport />
    </div>
  )
}

export default MainLayout
