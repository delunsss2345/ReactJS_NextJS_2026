import { useState } from "react";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import styles from "./TodoApp.module.css";

const TodoApp = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Học props", done: false },
        { id: 2, text: "Học state", done: false },
    ]);

    const addTodo = (text) => {
        const value = text.trim();
        if (!value) return;

        setTodos((prev) => [
            { id: Date.now(), text: value, done: false },
            ...prev,
        ]);
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
        );
    };

    return (
        <div className={styles.container}>
            <h2>Todo App</h2>

            <TodoInput onAdd={addTodo} />
            <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
        </div>
    );
};

export default TodoApp;
