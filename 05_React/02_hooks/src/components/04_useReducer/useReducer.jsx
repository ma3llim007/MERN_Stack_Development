import { useReducer } from 'react'

const UseReducerComponent = () => {
    const ReducerFunction = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return { count: state.count + 1 };
            case 'DESCREMENT':
                return { count: state.count - 1 };
            case 'RESET':
                return { count: 0};
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(ReducerFunction, { count: 0 });
    
    return (
        <>
            <h1>Use Reducer</h1>
            <h2>{state.count}</h2>
            <div className="card">
                <button onClick={() => dispatch({ type: 'INCREMENT' })} >Increment</button>
                <button onClick={() => dispatch({ type: 'DESCREMENT' })} >Descrement</button>
                <button onClick={() => dispatch({ type: 'RESET' })} >Reset</button>
            </div>
        </>
    )
}

export default UseReducerComponent;