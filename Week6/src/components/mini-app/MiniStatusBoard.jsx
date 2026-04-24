import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../../features/auth/selector'
import { selectCartTotalQuantity } from '../../features/cart/selector'
import { selectNotifications } from '../../features/notification/selector'
import {
  selectProductsError,
  selectProductsLoading,
} from '../../features/product/selector'

function MiniStatusBoard() {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const cartQuantity = useSelector(selectCartTotalQuantity)
  const notifications = useSelector(selectNotifications)
  const productLoading = useSelector(selectProductsLoading)
  const productError = useSelector(selectProductsError)

  const cards = [
    {
      label: 'Auth',
      value: isAuthenticated ? 'Đã login' : 'Guest',
    },
    {
      label: 'Products',
      value: productLoading ? 'Loading...' : productError ? 'Error' : 'Ready',
    },
    {
      label: 'Cart',
      value: `${cartQuantity} món`,
    },
    {
      label: 'Toast',
      value: `${notifications.length} active`,
    },
  ]

  return (
    <div className="metric-grid">
      {cards.map((card) => (
        <article key={card.label} className="metric-card">
          <span>{card.label}</span>
          <strong>{card.value}</strong>
        </article>
      ))}
    </div>
  )
}

export default MiniStatusBoard
