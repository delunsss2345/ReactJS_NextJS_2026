import { useEffect, useState } from "react";
import { createTodo, deleteTodo, getTodos } from "./api/todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function Bai5() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(setTodos).catch(console.error);
    }, []);

    const handleAdd = async (todo) => {

        try {
            const saved = await createTodo(todo);
            setTodos((prev) =>
                [...prev, saved]
            );
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id) => {
        const backup = todos;
        setTodos((prev) => prev.filter((t) => t.id !== id));

        try {
            await deleteTodo(id);
        } catch {
            setTodos(backup);
        }
    };

    return (
        <div>
            <TodoForm onAdd={handleAdd} />
            <TodoList todos={todos} onDelete={handleDelete} />
        </div>
    );
}