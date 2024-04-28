import { Link } from "react-router-dom";

const FourNotFour = () => {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main className="px-3">
                <h1 className="h1 fw-bold text-center text-decoration-underline text-danger mt-5">404 Page Not Found!</h1>
                <p className="d-flex justify-content-center">
                    <Link to={'/'} className="btn btn-lg btn-light fw-bold border-white bg-white"> 🏠 Home</Link>
                </p>
            </main>
        </div>
    )
}

export default FourNotFour;