import { useDispatch, useSelector } from 'react-redux'
import { selectCount } from '../../selector'
import { increment } from '../../slice/count-slice'


export default function CountComponent() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>
                Click to change
            </button>
        </div>
    )
}