import { forwardRef, useImperativeHandle, useState } from "react";




const ChildComponent = (props, ref) => {
    const [count, setCount] = useState(0);
    const handleButtonIncrement = () => {
        setCount((previousValue) => previousValue + 1);
    };

    const handleButtonDescement = () => {
        setCount((previousValue) => previousValue - 1);
    };
    
    const handleButtonReset = () => {
        setCount(0)
    };

    useImperativeHandle(ref, () => {
        return {
            handleButtonReset,
        }
    });

    return (
        <>
            <div className="card">
                <h2>Counter Number: {count}</h2>
                <button onClick={handleButtonIncrement}>Increment</button>
                <button onClick={handleButtonDescement}>Descement</button>
            </div>
        </>
    )
}

export default forwardRef(ChildComponent);