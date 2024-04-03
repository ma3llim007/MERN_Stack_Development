import { useContext } from "react";
import { DashboardContext } from "../../context/context";


const Login = () => {
    const userData = useContext(DashboardContext);
    return (
        <>
            <div className="card">
                <h2>Login</h2>
                {JSON.stringify(userData)}
            </div>
        </>
    )
}

export default Login;