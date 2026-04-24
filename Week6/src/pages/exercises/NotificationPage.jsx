import Panel from '../../components/common/Panel'
import NotificationActions from '../../components/notification/NotificationActions'

function NotificationPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <p className="eyebrow">Bài 6</p>
        <h2>Notification System</h2>
        <p className="hero-copy">Toast được hiển thị ở góc phải toàn app, gọi được từ bất kỳ component nào và tự tắt sau 3 giây.</p>
      </section>

      <Panel
        title="Playground"
        subtitle="Bắn thử nhiều loại toast. Bạn cũng sẽ thấy notification được gọi lại ở Bài 3, Bài 5, Bài 9 và Bài 10."
      >
        <NotificationActions />
      </Panel>
    </div>
  )
}

export default NotificationPage
