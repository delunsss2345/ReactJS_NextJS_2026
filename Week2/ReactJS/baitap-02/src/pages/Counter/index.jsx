import { useState } from "react";
import Button from "../../components/Button";

const Counter = () => {
    const [value, setValue] = useState(0);

    const handleUp = () => setValue((prev) => prev + 1);

    const handleDown = () =>
        setValue((prev) => (prev > 0 ? prev - 1 : 0));

    const handleReset = () => setValue(0);

    return <>
        <h1 style={{
            color: value > 10 ? "red" : "green"
        }}>{value}</h1>
        <Button onClick={handleUp} title='Tăng' />
        <Button onClick={handleDown} title='Gỉam' />
        <Button onClick={handleReset} title='reset' />

    </>
}

export default Counter;