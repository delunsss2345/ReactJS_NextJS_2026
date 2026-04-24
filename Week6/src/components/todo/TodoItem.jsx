import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  deleteTodo,
  toggleTodo,
  updateTodo,
} from '../../features/todo/slice/todoSlice'

function TodoItem({ todo }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.text)

  const handleSave = () => {
    if (!draft.trim()) {
      return
    }

    dispatch(
      updateTodo({
        id: todo.id,
        text: draft,
      }),
    )
    setIsEditing(false)
  }

  const handleCancel = () => {
    setDraft(todo.text)
    setIsEditing(false)
  }

  return (
    <article className={`todo-item${todo.done ? ' done' : ''}`}>
      <div className="todo-main">
        {isEditing ? (
          <input
            type="text"
            className="input"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
          />
        ) : (
          <strong>{todo.text}</strong>
        )}
        <p className="muted-text">{todo.done ? 'Đã hoàn thành' : 'Đang thực hiện'}</p>
      </div>

      <div className="button-row">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          {todo.done ? 'Bỏ done' : 'Done'}
        </button>

        {isEditing ? (
          <>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Lưu
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Huỷ
            </button>
          </>
        ) : (
          <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(true)}>
            Sửa
          </button>
        )}

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Xoá
        </button>
      </div>
    </article>
  )
}

export default TodoItem
