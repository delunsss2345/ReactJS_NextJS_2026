import FormInput from "../FormInput";
import styles from "./login.module.css";

function LoginForm() {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <FormInput
                    type="text"
                    label="Username"
                    placeholder="Nhập username"
                />

                <FormInput
                    type="password"
                    label="Password"
                    placeholder="Nhập password"
                />
                <button className={styles['login-btn']}>Login</button>
            </div>
        </div>
    );
}

export default LoginForm;
