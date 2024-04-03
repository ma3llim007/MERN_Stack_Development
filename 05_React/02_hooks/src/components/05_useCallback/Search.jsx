import { memo } from "react";

const Search = ({onChange}) => {
    console.log("Search Is Using MEMO");
    return (
        <>
            <input type="text" onChange={(e) => onChange(e.target.value) } placeholder="Search The User" style={{ padding: "0.6rem" }} />
        </>
    )
}

export default memo(Search);