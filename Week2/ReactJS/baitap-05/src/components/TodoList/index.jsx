import TodoItem from "../TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, onDelete, onToggle }) => {
    if (todos.length === 0) return <p className={styles.empty}>Chưa có todo nào.</p>;

    return (
        <ul className={styles.list}>
            {todos.map((t) => (
                <TodoItem
                    key={t.id}
                    todo={t}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    );
};

export default TodoList;
