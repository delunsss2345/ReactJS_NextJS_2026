import { useSelector } from 'react-redux'
import Panel from '../../components/common/Panel'
import TodoInput from '../../components/todo/TodoInput'
import TodoList from '../../components/todo/TodoList'
import { selectTodoCount } from '../../features/todo/selector'

function TodoGlobalPage() {
  const todoCount = useSelector(selectTodoCount)

  return (
    <div className="page">
      <section className="page-hero">
        <p className="eyebrow">Bài 4</p>
        <h2>Todo List Global</h2>
        <p className="hero-copy">State chứa mảng todos và UI được tách thành TodoInput, TodoList, TodoItem.</p>
      </section>

      <div className="two-column wide-right">
        <Panel title="TodoInput" subtitle="Component nhập dữ liệu và dispatch action thêm todo.">
          <TodoInput />
        </Panel>
        <Panel
          title="TodoList"
          subtitle={`Hiện có ${todoCount} todo trong Redux store.`}
        >
          <TodoList />
        </Panel>
      </div>
    </div>
  )
}

export default TodoGlobalPage
