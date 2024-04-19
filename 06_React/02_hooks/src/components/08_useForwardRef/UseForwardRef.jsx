import { forwardRef } from "react";

const UseForwardRefComponents = forwardRef((props, ref) => {
    return (
        <>
            <h1>{ref.current}</h1>
        </>
    )
})

export default UseForwardRefComponents;