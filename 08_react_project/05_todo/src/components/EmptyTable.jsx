import React from 'react'

const EmptyTable = () => {
    return (
        <>
            <div className="row">
                <h3 className="h3 fw-semibold text-white">Your Notes 👁️</h3>
                <table className="table table-dark table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="4" className='text-center fs-3'>Notes Are Empty</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmptyTable
