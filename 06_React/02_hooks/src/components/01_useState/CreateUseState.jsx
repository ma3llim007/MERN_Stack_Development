import { useState } from "react"

const CreateUseState = () => {
    const [count, setCount] = useState(0);
    console.log("components Pained");
    return (
        <>
            <h1>Use State</h1>
            <div className="card">
                <h2>Count Value Is : {count}</h2>
                <button onClick={() => setCount((prevvalue) => (prevvalue + 1))}>Increment</button>
                <button onClick={() => setCount((prevvalue) => (prevvalue - 1))}>Descrement</button>
            </div>
        </>
    )
}

export default CreateUseState
