import { Context, Context2, Message, Message2 } from "../../../context/context2";
import Two from "./Two";

const One = () => {
    return (
        <Context.Provider value={{Message,Message2}}>
            <Two />
        </Context.Provider>
    )

}
export default One;