import { useSelector } from 'react-redux'
import { selectNotifications } from '../../features/notification/selector'

function ToastViewport() {
  const notifications = useSelector(selectNotifications)

  if (notifications.length === 0) {
    return null
  }

  return (
    <div className="toast-viewport" aria-live="polite" aria-atomic="true">
      {notifications.map((notification) => (
        <article
          key={notification.id}
          className={`toast toast-${notification.type}`}
        >
          <p className="toast-title">{notification.title}</p>
          <p>{notification.message}</p>
        </article>
      ))}
    </div>
  )
}

export default ToastViewport
