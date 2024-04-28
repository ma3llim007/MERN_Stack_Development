import { useEffect, useId } from "react";

const UseId = () => {
    const id = useId();

    return (
        <>
            <div className="card">
                <h2>Use Id: {id}</h2>
            </div>
        </>
    )
}

export default UseId;