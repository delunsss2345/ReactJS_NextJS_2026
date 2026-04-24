import Panel from '../../components/common/Panel'
import AuthProfileCard from '../../components/auth/AuthProfileCard'
import LoginApiForm from '../../components/auth/LoginApiForm'

function AuthTokenPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <p className="eyebrow">Bài 9</p>
        <h2>Auth + API + Token</h2>
        <p className="hero-copy">Login API để lấy token, lưu token global, gọi `/auth/me` và logout để xoá session.</p>
      </section>

      <div className="two-column">
        <Panel title="Flow đăng nhập" subtitle="Credential mẫu đã được điền sẵn để bạn test nhanh.">
          <LoginApiForm />
        </Panel>
        <Panel title="Kết quả auth" subtitle="Token và profile bên phải đều đọc từ Redux store.">
          <AuthProfileCard />
        </Panel>
      </div>
    </div>
  )
}

export default AuthTokenPage
