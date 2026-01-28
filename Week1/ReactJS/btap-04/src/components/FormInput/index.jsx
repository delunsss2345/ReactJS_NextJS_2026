import styles from "./formInput.module.css";

function FormInput({ type, label, placeholder }) {
    return (
        <div className={styles['input-group']}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    );
}

export default FormInput;
