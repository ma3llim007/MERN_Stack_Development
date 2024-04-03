import { useEffect, useState } from "react";

const CreateUseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("The Count Value Is: ", count);
        return () => {
            console.log("The useEffect is Clearing Up!");
        };
    }, [count])

    return (
        <>
            <h1>Use Effect</h1>
            <div className="card">
                <h2>Count Value Is : {count}</h2>
                <button onClick={() => setCount((prevvalue) => (prevvalue + 1))}>Increment</button>
                <button onClick={() => setCount((prevvalue) => (prevvalue - 1))}>Descrement</button>
            </div>
        </>
    )
}

export default CreateUseEffect;