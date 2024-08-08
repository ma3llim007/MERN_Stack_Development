import React from 'react'

const Table = ({ todo, deleteTodo, updateTodo }) => {
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
                        {
                            todo.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <button className='btn btn-primary mx-1' onClick={() => updateTodo(item.id, item.title, item.description)}>Update</button>
                                        <button className='btn btn-danger mx-1' onClick={() => deleteTodo(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table
