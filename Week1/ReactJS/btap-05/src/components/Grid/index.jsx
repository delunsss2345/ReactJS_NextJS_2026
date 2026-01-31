import styles from "./grid.module.css";

const Grid = ({ children }) => {
    return <>
        <div className={`${styles.grid} ${styles['grid-template']}`}>
            {children}
        </div></>
}

export default Grid;