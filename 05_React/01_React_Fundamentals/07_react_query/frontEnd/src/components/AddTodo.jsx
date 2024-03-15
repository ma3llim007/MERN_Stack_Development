

import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ handleAddTodo }) => {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const handleOnSumit = (e) => {
        e.preventDefault();
        const Id = uuidv4();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const DateTime = new Date().toLocaleString();
        const NewTodo = {
            "id": Id,
            "title": title,
            "description": description,
            "datetime": DateTime,
        }
        handleAddTodo(NewTodo);
        titleRef.current.value='';
        descriptionRef.current.value='';
    }
    return (
        <form onSubmit={handleOnSumit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" ref={titleRef} required className="form-control" id="title" placeholder="Enter The Todo Title" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" ref={descriptionRef} required id="description" rows="3" placeholder='Enter The Todo Description'></textarea>
            </div>
            <button className='btn btn-primary'>Add</button>
        </form>
    )
}

export default AddTodo;
