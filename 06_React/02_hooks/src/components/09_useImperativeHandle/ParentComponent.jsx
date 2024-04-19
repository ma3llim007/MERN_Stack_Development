import { useRef } from "react"
import ChildComponent from "./ChildComponent"





const ParentComponent = () => {
    const ResetButtonRef = useRef();
    return (
        <>
            <h1>Count App</h1>
            <ChildComponent ref={ResetButtonRef} />
            <div className="card">
                <button onClick={ResetButtonRef.current?.handleButtonReset}>Reset</button>
            </div>
        </>
    )
}

export default ParentComponent
