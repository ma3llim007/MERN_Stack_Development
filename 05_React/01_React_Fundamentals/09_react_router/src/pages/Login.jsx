import { useLocation } from "react-router-dom";
import { Alert } from "../components";

const Login = () => {
    const Location = useLocation();

    return (
        <>
            {
                Location.state ? <Alert message={Location.state.message} /> : ''
            }
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="h1 fw-bold text-center text-decoration-underline text-primary m-5">Login</h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;