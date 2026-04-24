import { useDispatch, useSelector } from 'react-redux'
import { selectTheme } from '../../features/theme/selector'
import { toggleTheme } from '../../features/theme/slice/themeSlice'

function ThemeShowcase() {
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  return (
    <div className="theme-preview">
      <div className="theme-summary">
        <p className="eyebrow">Theme hiện tại</p>
        <h3>{theme === 'light' ? 'Light mode' : 'Dark mode'}</h3>
        <p className="muted-text">
          Theme được lưu trong global state và đồng bộ vào localStorage để giữ lại sau khi tải lại trang.
        </p>
        <button type="button" className="btn btn-primary" onClick={() => dispatch(toggleTheme())}>
          Toggle Theme
        </button>
      </div>

      <div className="theme-sample-grid">
        <div className="theme-sample-card">
          <span className="sample-dot sample-dot-warm"></span>
          <strong>Nền ứng dụng</strong>
          <p className="muted-text">Màu nền, card, text và button đổi đồng loạt.</p>
        </div>
        <div className="theme-sample-card">
          <span className="sample-dot sample-dot-cool"></span>
          <strong>Accent màu</strong>
          <p className="muted-text">Sidebar, panel, badge và toast đều bám theo theme.</p>
        </div>
      </div>
    </div>
  )
}

export default ThemeShowcase
