import { useEffect, useState } from "react";

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [])
    return <>
        <h1> Giờ hiện tại là {time.toLocaleTimeString()} </h1>
    </>
}

export default DigitalClock;