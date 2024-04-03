import { useRef } from "react"
import UseForwardRefComponents from "./UseForwardRef";



const ParentForwardRef = () => {
    const TitleRef = useRef("This Message Passed By The Parent Element!");

    return (
        <>
            <UseForwardRefComponents ref={TitleRef} />
        </>
    )
}

export default ParentForwardRef;
