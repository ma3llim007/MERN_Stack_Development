import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, descrement, reset } from './counterSlice';

export function Counter() {
    const countValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <div className="card">
                <h1>{countValue}</h1>
                <button onClick={() => dispatch(increment())} style={{ margin: "0 10px" }}>Increament</button>
                <button onClick={() => dispatch(descrement())} style={{ margin: "0 10px" }}>Descreament</button>
                <button onClick={() => dispatch(reset())} style={{ margin: "0 10px" }}>Reset</button>
            </div>
        </>
    )
}