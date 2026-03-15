import { useRef, useState } from "react";

const Bai5 = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [lapName, setLapName] = useState("");

    const refIntervalId = useRef(null);
    const refFocusInput = useRef(null);

    const handleStart = () => {
        // tranh click nhieu lan 
        if (running) return;
        setRunning(true);
        const interId = setInterval(() => {
            console.log('ok')
            setTime(prev => prev + 100);
        }, 100);
        refIntervalId.current = interId
    }

    const handlePause = () => {
        if (!running) return;
        clearInterval(refIntervalId.current);
        setRunning(false);
    }


    const handleReset = () => {
        clearInterval(refIntervalId.current);
        setRunning(false);
        setTime(0);
    }


    return <>
        <h2>{time} ms</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => refFocusInput.current.focus()}>Add Lap</button>
        <input
            ref={refFocusInput}
            placeholder="Lap name"
            value={lapName}
            onChange={(e) => setLapName(e.target.value)}
        />
    </>
}

export default Bai5;