import { useMemo, useState } from "react";


const UseMemoTwo = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const CalculateFunction = (a, b) => {
        console.log("Calculating.....");
        return a + b;
    }
    const MemoizedResult = useMemo(() => CalculateFunction(a, b), [a, b]);
    return (
        <>
            <div className="card">
                <input type="text" name="a" id="a" value={a} onChange={(e) => setA(parseInt(e.target.value))} />
                <br />
                <input type="text" name="b" id="b" value={b} onChange={(e) => setB(parseInt(e.target.value))} />
            </div>
            <h2>{ MemoizedResult }</h2>
        </>
    )
}

export default UseMemoTwo;