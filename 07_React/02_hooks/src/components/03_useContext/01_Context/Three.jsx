import { useContext } from "react";
import { Context, Context2 } from "../../../context/context2";

const Three = () => {
    const Messages = useContext(Context);
    return (
        <>
            <h1>Context First:- {Messages.Message}</h1>
            <h1>Context Second:- {Messages.Message2}</h1>
        </>
    )

}
export default Three;