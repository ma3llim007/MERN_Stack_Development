import { useReducer } from "react"

// Function For Reducer
const ReducerFunc = (state, action) => {
    if (action.type === 'Increment') {
        return { count: state.count + 1 };
    }
    if (action.type === 'Descrement') {
        return { count: state.count - 1 };
    }
}


const UserReducer = () => {
    const [state, dispatch] = useReducer(ReducerFunc, { count: 0 })
    const handleIncrement = () => {
        dispatch({ type: 'Increment' })
    }
    const handleDescrememt = () => {
        dispatch({ type: 'Descrement' })
    }
    console.log("components Pained");
    return (
        <>
            <h1>Use Reducer</h1>
            <div className="card">
                <h2>Count Value Is : {state.count}</h2>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDescrememt}>Descrement</button>
            </div>
        </>
    )
}

export default UserReducer;