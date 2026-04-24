import { useDispatch, useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotalPrice,
  selectCartTotalQuantity,
} from '../../features/cart/selector'
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../../features/cart/slice/cartSlice'
import { formatCurrency } from '../../services/format'

function CartSummary() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotalPrice)
  const totalQuantity = useSelector(selectCartTotalQuantity)

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <strong>Giỏ hàng đang trống</strong>
        <p className="muted-text">Thử thêm một sản phẩm ở panel bên trái để thấy state thay đổi.</p>
      </div>
    )
  }

  return (
    <div className="stack-gap">
      <div className="inline-banner">
        <span>Tổng số lượng</span>
        <strong>{totalQuantity}</strong>
      </div>

      {items.map((item) => (
        <article key={item.id} className="cart-line">
          <div>
            <strong>{item.title}</strong>
            <p className="muted-text">
              {formatCurrency(item.price, { locale: 'en-US', currency: 'USD' })} / sản phẩm
            </p>
          </div>

          <div className="button-row">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => dispatch(decreaseQuantity(item.id))}
            >
              -
            </button>
            <strong>{item.quantity}</strong>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => dispatch(increaseQuantity(item.id))}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Xoá
            </button>
          </div>
        </article>
      ))}

      <div className="summary-box">
        <span>Tổng tiền</span>
        <strong>{formatCurrency(totalPrice, { locale: 'en-US', currency: 'USD' })}</strong>
      </div>

      <button type="button" className="btn btn-secondary" onClick={() => dispatch(clearCart())}>
        Xoá toàn bộ giỏ
      </button>
    </div>
  )
}

export default CartSummary
