import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
const TodoCard = ({ todo,handleDelete }) => {
    return (
        <div className='col-md-4 mt-2 mb-2'>
            <div className="card">
                <div className="card-body">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => handleDelete(todo.id)}>
                        <RiDeleteBin6Fill />
                    </span>
                    <h5 className="card-title"><strong>Title: </strong>{todo.title}</h5>
                    <p className="card-text"><strong>Description: </strong>{todo.description}</p>
                    <p className="card-text"><strong>DateTime: </strong>{todo.datetime}</p>
                </div>
            </div>
        </div>
    )
}

export default TodoCard;