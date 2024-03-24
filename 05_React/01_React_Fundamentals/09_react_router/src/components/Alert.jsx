import React from 'react'

const Alert = ({ message }) => {
    return (
        <div className="container m-4">
            <div className="alert alert-danger" role="alert">
                <strong>{message}</strong>
            </div>
        </div>
    )
}

export default Alert
