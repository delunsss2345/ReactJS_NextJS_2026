import { useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  resetCounter,
} from '../../features/counter/slice/counterSlice'

function CounterActions() {
  const dispatch = useDispatch()

  return (
    <div className="action-stack">
      <p className="eyebrow">Component B</p>
      <div className="button-row">
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(decrement())}>
          Giảm
        </button>
        <button type="button" className="btn btn-primary" onClick={() => dispatch(increment())}>
          Tăng
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => dispatch(resetCounter())}>
          Reset
        </button>
      </div>
      <p className="muted-text">Mọi thao tác đều cập nhật vào một state toàn cục duy nhất.</p>
    </div>
  )
}

export default CounterActions
