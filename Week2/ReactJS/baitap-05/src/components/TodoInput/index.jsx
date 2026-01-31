import { useState } from "react";
import styles from "./TodoInput.module.css";

const TodoInput = ({ onAdd }) => {
    const [value, setValue] = useState("");

    const submit = (e) => {
        e.preventDefault();
        onAdd(value);
        setValue("");
    };

    return (
        <form className={styles.form} onSubmit={submit}>
            <input
                className={styles.input}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Nhập todo..."
            />
            <button className={styles.btn} type="submit">Add</button>
        </form>
    );
};

export default TodoInput;
