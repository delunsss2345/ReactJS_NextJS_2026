import { useSelector } from 'react-redux'
import { selectTodos } from '../../features/todo/selector'
import TodoItem from './TodoItem'

function TodoList() {
  const todos = useSelector(selectTodos)

  if (todos.length === 0) {
    return <p className="muted-text">Danh sách todo đang trống.</p>
  }

  return (
    <div className="stack-gap">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
