import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/slice/cartSlice'
import { pushNotification } from '../../features/notification/slice/notificationSlice'
import { formatCurrency } from '../../services/format'
import Spinner from '../common/Spinner'

function MiniProductGrid({ products, loading, error }) {
  const dispatch = useDispatch()

  const handleAdd = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
      }),
    )
    dispatch(
      pushNotification({
        title: 'Mini app thêm giỏ',
        message: `${product.title} đã được thêm vào cart global.`,
        type: 'success',
      }),
    )
  }

  if (loading) {
    return <Spinner label="Đang tải danh sách sản phẩm..." />
  }

  if (error) {
    return <p className="error-text">{error}</p>
  }

  return (
    <div className="card-grid">
      {products.map((product) => (
        <article key={product.id} className="product-card">
          <img className="product-image" src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p className="muted-text">{product.description}</p>
          <strong className="price-text">
            {formatCurrency(product.price, { locale: 'en-US', currency: 'USD' })}
          </strong>
          <button type="button" className="btn btn-primary" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </article>
      ))}
    </div>
  )
}

export default MiniProductGrid
