import { useRef, useState } from "react";


const UseRef_UseState_Component = () => {
    console.log("Componetn Is Pained");
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const interValRef = useRef(null)

    const handleStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(interValRef.current);
        interValRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    const handleStop = () => {
        clearInterval(interValRef.current);
    }

    const handleClearn = () => {
        setStartTime(null);
        setNow(null)
        clearInterval(interValRef.current);
    }
    
    let secondTake = 0;
    if (startTime != null && now != null) {
        secondTake = (now - startTime) / 1000;
    }

    return (
        <>
            <div className="card">
                <h2>Time Passed: { secondTake.toFixed(3) }</h2>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleClearn}>Clearn</button>
            </div>
        </>
    )
}

export default UseRef_UseState_Component;