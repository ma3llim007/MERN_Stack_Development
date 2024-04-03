import { useRef, useState } from "react"




const UseRefComponent = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleOnClick = () => {
        setCount((prev) => prev + 1);
        countRef.current++;

        console.log("State", count);
        console.log("Ref", countRef.current);
    }

    return (
        <>
            <div className="card">
                <h1>Count: { countRef.current }</h1>
                <button onClick={handleOnClick}>Increment</button>
            </div>
        </>
    )
}

export default UseRefComponent
