const ErrorAlert = ({ message }) => {
    return (
        <div className="container mt-4">
            <div className="alert alert-danger" role="alert"><strong>{message}</strong></div>
        </div>
    )
}
export default ErrorAlert;