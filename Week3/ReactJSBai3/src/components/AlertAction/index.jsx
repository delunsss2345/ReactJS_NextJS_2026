import styles from './alterAction.module.css';

const AlertAction = ({ action }) => {
    const getActionClass = (type) => {
        switch (type) {
            case 'success':
                return styles.success;
            case 'warning':
                return styles.warning;
            case 'error':
                return styles.error;
            default:
                return '';
        }
    };

    return (
        <div className={` ${styles.alertSection} ${getActionClass(action)}`}>
            {action}
        </div>
    );
};

export default AlertAction;
