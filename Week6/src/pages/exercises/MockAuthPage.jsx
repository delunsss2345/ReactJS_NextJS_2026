import Panel from '../../components/common/Panel'
import MockLoginForm from '../../components/mock-auth/MockLoginForm'
import UserGreeting from '../../components/mock-auth/UserGreeting'

function MockAuthPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <p className="eyebrow">Bài 3</p>
        <h2>Auth giả lập</h2>
        <p className="hero-copy">Login logout mô phỏng để thấy một `user` trong Redux store có thể được đọc ở nhiều nơi.</p>
      </section>

      <div className="two-column">
        <Panel title="Form đăng nhập" subtitle="Không gọi API, chỉ mô phỏng cập nhật user vào global state.">
          <MockLoginForm />
        </Panel>
        <Panel title="Username ở nhiều component" subtitle="Hai box này đọc cùng một state `mockAuth.user`.">
          <div className="stack-gap">
            <UserGreeting title="Header giả lập" hint="Dùng tốt cho thanh điều hướng." />
            <UserGreeting title="Sidebar giả lập" hint="Dùng tốt cho profile mini hoặc dashboard." />
          </div>
        </Panel>
      </div>
    </div>
  )
}

export default MockAuthPage
