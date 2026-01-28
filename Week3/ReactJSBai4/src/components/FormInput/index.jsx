import styles from './FormInput.module.css';
const FormInput = ({ label, type }) => {
    return <div className={`${styles['section-input']}`}>
        <label>{label}</label>
        <input className={`${styles['input-item']}`} placeholder={label} type={type} />
    </div>
}

export default FormInput;