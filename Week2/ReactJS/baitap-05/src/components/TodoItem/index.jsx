import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, onDelete, onToggle }) => {
    return (
        <li className={styles.item}>
            <label className={styles.left}>
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => onToggle(todo.id)}
                />
                <span className={`${styles.text} ${todo.done ? styles.done : ""}`}>
                    {todo.text}
                </span>
            </label>

            <button className={styles.del} onClick={() => onDelete(todo.id)}>
                Xóa
            </button>
        </li>
    );
};

export default TodoItem;
