import { useSelector } from 'react-redux'
import { selectCount } from '../../features/counter/selector'

function CounterDisplay() {
  const count = useSelector(selectCount)

  return (
    <div className="counter-display">
      <p className="eyebrow">Component A</p>
      <strong className="counter-value">{count}</strong>
      <p className="muted-text">Giá trị count đang được đọc trực tiếp từ Redux store.</p>
    </div>
  )
}

export default CounterDisplay
