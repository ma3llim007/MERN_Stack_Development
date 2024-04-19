import { useReducer } from "react";
import { ACTION_TYPE, INITAL_STATE, ReducerFunction } from "./GetReducer";

const UseReducerTwo = () => {
    const [state, reducer] = useReducer(ReducerFunction, INITAL_STATE)
    const handleOnClick = () => {
        reducer({ type: ACTION_TYPE.FETCH_START })
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                return res.json()
            })
            .then((data) => reducer({ type: ACTION_TYPE.FETCH_SUCCESS, payload: data }))
            .catch((err) => {
                reducer({ type: ACTION_TYPE.FETCH_ERROR,payload: err })
            });
    }
    return (
        <>
            <div className="card" onClick={handleOnClick}>
                <button>
                    {state.loading ? 'Wait...' : 'Fetch The Data'}
                </button>
                <p>{state.post?.title}</p>
                <span className="text-danger">{state.error_message}</span>
            </div>
        </>
    )
}

export default UseReducerTwo
