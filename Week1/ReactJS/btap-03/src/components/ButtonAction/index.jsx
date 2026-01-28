import { useState } from "react";
import AlertAction from "../AlertAction";
import styles from './buttonAction.module.css';
const ButtonAction = () => {
    const [action, setAction] = useState('');

    const handlerAction = (action) => {
        return setAction(action);
    }
    return <div className={`${styles['d-flex']}`}>
        <button className={`${styles['button-styles']}`} onClick={() => handlerAction('success')}>Success</button>
        <button className={`${styles['button-styles']}`} onClick={() => handlerAction('warning')}>Warning</button>
        <button className={`${styles['button-styles']}`} onClick={() => handlerAction('error')}>Error </button>
        {action && <AlertAction action={action} />}
    </div>
}

export default ButtonAction;