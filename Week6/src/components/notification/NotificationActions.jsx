import { useDispatch } from 'react-redux'
import { pushNotification } from '../../features/notification/slice/notificationSlice'

const notifications = [
  {
    title: 'Thông báo thành công',
    message: 'Toast màu xanh cho hành động hoàn tất.',
    type: 'success',
  },
  {
    title: 'Thông báo thông tin',
    message: 'Toast trung tính để báo cho người dùng biết điều gì đang diễn ra.',
    type: 'info',
  },
  {
    title: 'Thông báo lỗi',
    message: 'Toast đỏ để mô phỏng request thất bại.',
    type: 'error',
  },
]

function NotificationActions() {
  const dispatch = useDispatch()

  return (
    <div className="card-grid">
      {notifications.map((notification) => (
        <article key={notification.title} className="product-card">
          <span className={`tag tag-${notification.type}`}>{notification.type}</span>
          <h3>{notification.title}</h3>
          <p className="muted-text">{notification.message}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch(pushNotification(notification))}
          >
            Bắn toast
          </button>
        </article>
      ))}
    </div>
  )
}

export default NotificationActions
