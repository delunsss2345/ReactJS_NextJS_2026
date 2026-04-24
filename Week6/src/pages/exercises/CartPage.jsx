import Panel from '../../components/common/Panel'
import CartSummary from '../../components/cart/CartSummary'
import ProductCatalog from '../../components/cart/ProductCatalog'

const demoProducts = [
  {
    id: 'react-notes',
    title: 'React Notes Kit',
    description: 'Bộ tài liệu tự học React và Redux Toolkit theo dự án nhỏ.',
    price: 24,
    category: 'study',
  },
  {
    id: 'redux-poster',
    title: 'Redux Flow Poster',
    description: 'Poster minh hoạ state, action, reducer để treo góc học tập.',
    price: 18,
    category: 'design',
  },
  {
    id: 'debug-mug',
    title: 'Debug Coffee Mug',
    description: 'Ly cà phê dành cho những buổi fix bug và đọc console.',
    price: 12,
    category: 'lifestyle',
  },
]

function CartPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <p className="eyebrow">Bài 5</p>
        <h2>Cart Global</h2>
        <p className="hero-copy">Business logic của giỏ hàng được gom vào Redux để tăng giảm số lượng và tính tổng tiền.</p>
      </section>

      <div className="two-column">
        <Panel title="Danh sách sản phẩm" subtitle="Chọn sản phẩm bất kỳ để thêm vào cart global.">
          <ProductCatalog products={demoProducts} />
        </Panel>
        <Panel title="Giỏ hàng" subtitle="State này còn được tái sử dụng lại trong Bài 10.">
          <CartSummary />
        </Panel>
      </div>
    </div>
  )
}

export default CartPage
