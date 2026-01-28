import MessageInput from "../MessageInput";
import styles from "./formInput.module.css";

const FormInput = ({ onChange, name, type, value }) => {

    return (
        <div className={styles['input-group']}>
            <label>{name}</label>
            <input onChange={(e) => onChange(e)} name={name} type={type} placeholder={name} value={value} />
            <MessageInput  message={value} />
        </div>
    );
}

export default FormInput;
