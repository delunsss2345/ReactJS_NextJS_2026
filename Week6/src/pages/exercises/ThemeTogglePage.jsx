import Panel from '../../components/common/Panel'
import ThemeShowcase from '../../components/theme/ThemeShowcase'

function ThemeTogglePage() {
  return (
    <div className="page">
      <section className="page-hero">
        <p className="eyebrow">Bài 2</p>
        <h2>Theme Toggle</h2>
        <p className="hero-copy">Theme light hoặc dark được quản lý bằng global state và áp dụng lên toàn bộ app.</p>
      </section>

      <Panel
        title="UI state toàn cục"
        subtitle="Bấm nút dưới đây rồi chuyển route, bạn sẽ thấy màu sắc toàn app vẫn giữ nguyên."
      >
        <ThemeShowcase />
      </Panel>
    </div>
  )
}

export default ThemeTogglePage
