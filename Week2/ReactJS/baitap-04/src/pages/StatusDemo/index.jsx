import { useState } from "react";
import StatusBadge from "../../components/StatusBadge";
import styles from "./StatusDemo.module.css";

const StatusDemo = () => {
    const [status, setStatus] = useState("offline");


    return (
        <div className={styles.container}>
            <h2>Status người dùng: <StatusBadge status={status} /></h2>

            <div className={styles['d-flex']}>
                <button onClick={() => setStatus("online")}>Online</button>
                <button onClick={() => setStatus("busy")}>Busy</button>
                <button onClick={() => setStatus("offline")}>Offline</button>
            </div>
        </div>
    );
};

export default StatusDemo;
