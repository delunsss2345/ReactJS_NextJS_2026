import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/slice/cartSlice'
import { pushNotification } from '../../features/notification/slice/notificationSlice'
import { formatCurrency } from '../../services/format'

function ProductCatalog({ products }) {
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    dispatch(
      pushNotification({
        title: 'Đã thêm vào giỏ',
        message: `${product.title} vừa được thêm vào cart toàn cục.`,
        type: 'success',
      }),
    )
  }

  return (
    <div className="card-grid">
      {products.map((product) => (
        <article key={product.id} className="product-card">
          <span className="tag">{product.category}</span>
          <h3>{product.title}</h3>
          <p className="muted-text">{product.description}</p>
          <strong className="price-text">
            {formatCurrency(product.price, { locale: 'en-US', currency: 'USD' })}
          </strong>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleAddToCart(product)}
          >
            Thêm vào giỏ
          </button>
        </article>
      ))}
    </div>
  )
}

export default ProductCatalog
