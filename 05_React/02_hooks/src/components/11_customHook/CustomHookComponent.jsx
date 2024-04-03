import { useState } from "react"
import { useTitleCount } from "./useTitleCount";




const CustomHookComponent = () => {
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
    // Custome Hooks
    useTitleCount(count);


    return (
        <>
            <div className="card">
                <h1>Counter: {count}</h1>
                <button onClick={handleButtonIncrement}>Increment</button>
                <button onClick={handleButtonDescement}>Descrement</button>
                <button onClick={handleButtonReset}>Reset</button>
            </div>
        </>
    )
}

export default CustomHookComponent
