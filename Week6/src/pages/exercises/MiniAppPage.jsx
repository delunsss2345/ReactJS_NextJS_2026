import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Panel from '../../components/common/Panel'
import MiniAuthPanel from '../../components/mini-app/MiniAuthPanel'
import MiniCartPanel from '../../components/mini-app/MiniCartPanel'
import MiniProductGrid from '../../components/mini-app/MiniProductGrid'
import MiniStatusBoard from '../../components/mini-app/MiniStatusBoard'
import {
  selectProducts,
  selectProductsError,
  selectProductsLoading,
} from '../../features/product/selector'
import { fetchProducts } from '../../features/product/slice/productSlice'

function MiniAppPage() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const loading = useSelector(selectProductsLoading)
  const error = useSelector(selectProductsError)

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products.length])

  return (
    <div className="page">
      <section className="page-hero">
        <p className="eyebrow">Bài 10</p>
        <h2>Mini App tổng hợp</h2>
        <p className="hero-copy">
          Kết hợp `features/auth`, `features/cart`, `features/product`, loading, error và notification trong một app quản lý sản phẩm nhỏ.
        </p>
      </section>

      <Panel title="Global status board" subtitle="Nhìn một chỗ là biết auth, product, cart và toast đang ở trạng thái nào.">
        <MiniStatusBoard />
      </Panel>

      <div className="two-column">
        <Panel title="Auth panel" subtitle="Đây là phần tương đương vai trò `AuthContext`, nhưng được thay bằng Redux slice.">
          <MiniAuthPanel />
        </Panel>
        <Panel title="Cart panel" subtitle="Tương đương `CartContext`, đang dùng chung state với Bài 5.">
          <MiniCartPanel />
        </Panel>
      </div>

      <Panel title="Product panel" subtitle="Tương đương `ProductContext`, fetch thật từ API công khai.">
        <MiniProductGrid products={products} loading={loading} error={error} />
      </Panel>
    </div>
  )
}

export default MiniAppPage
