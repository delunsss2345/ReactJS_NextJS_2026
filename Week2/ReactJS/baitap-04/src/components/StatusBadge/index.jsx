import { useMemo } from "react";
import styles from "./StatusBadge.module.css";

const StatusBadge = ({ status }) => {
    const label = useMemo(() => {
        if (status === "online") return "Online";
        if (status === "busy") return "Busy";
        return "Offline";
    }, [status]);

    const statusClass = useMemo(() => {
        if (status === "online") return styles.online;
        if (status === "busy") return styles.busy;
        return styles.offline;
    }, [status]);

    return (
        <span className={`${styles.badge} ${statusClass}`}>
            {label}
        </span>
    );
};

export default StatusBadge;
