import { memo, useCallback, useState } from "react";

const TodoItem = memo(({ todo, onDelete, onToggle }) => {
    console.log("render item", todo.id);

    return (
        <li>
            <span
                onClick={() => onToggle(todo.id)}
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer"
                }}
            >
                {todo.text}
            </span>

            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    );
});

function Bai4() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (!text.trim()) return;

        setTodos(prev => [
            ...prev,
            { id: Date.now(), text, completed: false }
        ]);
        setText("");
    };

    const onDelete = useCallback((id) => {
        setTodos(prev => prev.filter(t => t.id !== id));
    }, []);

    const onToggle = useCallback((id) => {
        setTodos(prev =>
            prev.map(t =>
                t.id === id ? { ...t, completed: !t.completed } : t
            )
        );
    }, []);

    return (
        <div>
            <h2>Todo List</h2>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Bai4;