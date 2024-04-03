import { DashboardContext, userDataContext } from "../../context/context";
import Dashboad from "./Dashboad";




const UseContext = () => {
    return (
        <>
            <DashboardContext.Provider value={userDataContext}>
                <Dashboad />
            </DashboardContext.Provider>
        </>
    )
}

export default UseContext;