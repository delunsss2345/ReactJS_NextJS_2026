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
} from '../../features/cart/slice/cartSlice'
import { formatCurrency } from '../../services/format'

function MiniCartPanel() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotalPrice)
  const totalQuantity = useSelector(selectCartTotalQuantity)

  return (
    <div className="stack-gap">
      <div className="summary-box">
        <span>Giỏ dùng chung với Bài 5</span>
        <strong>{totalQuantity} món</strong>
      </div>

      {items.length === 0 ? (
        <p className="muted-text">Chưa có sản phẩm nào trong cart toàn cục.</p>
      ) : (
        items.map((item) => (
          <article key={item.id} className="cart-line">
            <div>
              <strong>{item.title}</strong>
              <p className="muted-text">
                {formatCurrency(item.price, { locale: 'en-US', currency: 'USD' })}
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
            </div>
          </article>
        ))
      )}

      <div className="summary-box">
        <span>Tổng mini app</span>
        <strong>{formatCurrency(totalPrice, { locale: 'en-US', currency: 'USD' })}</strong>
      </div>

      <button type="button" className="btn btn-secondary" onClick={() => dispatch(clearCart())}>
        Clear cart
      </button>
    </div>
  )
}

export default MiniCartPanel
