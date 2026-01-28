import styles from "./button.module.css";

function Button({ type = "primary", children }) {
    return (
        <button className={`${styles.btn} ${styles[`btn-${type}`]}`}>
            {children}
        </button>
    );
}

export default Button;
