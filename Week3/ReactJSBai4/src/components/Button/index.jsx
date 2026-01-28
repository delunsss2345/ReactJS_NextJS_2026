import styles from './buttonAction.module.css';
const Button = ({ onClick, title }) => {
    return <button className={`${styles['button-styles']}`} onClick={onClick}>{title}</button>
}

export default Button;