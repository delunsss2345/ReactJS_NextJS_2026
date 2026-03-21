import { useReducer, useRef, useState } from "react";

const Cach1 = () => {
    const [count, setCount] = useState(0);
    return <>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(0)}>reset</button>
    </>
}

const Cach2 = () => {
    const [count, setCount] = useState(0);

    const incs = () => setCount(prev => prev + 1);
    const decs = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    return <>
        <button onClick={decs}>-</button>
        <button onClick={incs}>+</button>
        <span>{count}</span>
        <button onClick={reset}>reset</button>
    </>
}

const ac = (state, action) => {
    switch (action) {
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
}

const Cach3 = () => {
    const [count, dispatch] = useReducer(ac, 0);

    const incs = () => dispatch("inc");
    const decs = () => dispatch("dec");
    const reset = () => dispatch("reset");

    return <>
        <button onClick={decs}>-</button>
        <span>{count}</span>
        <button onClick={incs}>+</button>
        <button onClick={reset}>reset</button>
    </>
}

const Cach4 = () => {
    const countRef = useRef(0);
    const [, setTick] = useState(0);

    const inc = () => {
        countRef.current += 1;
        setTick(p => p + 1);
    };

    const dec = () => {
        countRef.current -= 1;
        setTick(p => p + 1);
    };

    const reset = () => {
        countRef.current = 0;
        setTick(p => p + 1);
    };

    return (
        <>
            <button onClick={dec}>-</button>
            <span>{countRef.current}</span>
            <button onClick={inc}>+</button>
            <button onClick={reset}>reset</button>
        </>
    );
}

const useCounter = (initial = 0) => {
    const [count, setCount] = useState(initial);

    return {
        count,
        inc: () => setCount(p => p + 1),
        dec: () => setCount(p => p - 1),
        reset: () => setCount(initial),
    };
}

const Cach5 = () => {
    const { count, inc, dec, reset } = useCounter();

    return <>
        <button onClick={dec}>-</button>
        <span>{count}</span>
        <button onClick={inc}>+</button>
        <button onClick={reset}>reset</button>
    </>
}

const SauCach = () => {
    return <Cach5 />
}

export default SauCach;