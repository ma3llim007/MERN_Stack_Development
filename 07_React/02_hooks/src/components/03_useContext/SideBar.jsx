import { useContext } from "react"
import { DashboardContext } from "../../context/context"

const SideBar = () => {
    const userData = useContext(DashboardContext);
    return (
        <>
            <div className="card">
                <h2>SideBar</h2>
                {JSON.stringify(userData)}
            </div>
        </>
    )
}

export default SideBar
