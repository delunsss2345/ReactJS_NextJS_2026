import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../features/todo/slice/todoSlice'

function TodoInput() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!text.trim()) {
      return
    }

    dispatch(addTodo(text))
    setText('')
  }

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Thêm todo mới..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Thêm todo
      </button>
    </form>
  )
}

export default TodoInput
