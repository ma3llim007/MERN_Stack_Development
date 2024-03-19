import React, { useEffect, useState } from 'react'

const Using_Hook = () => {
    console.log("Component Is Panied");
    const [formData, setformData] = useState({
        name:'',
        email:'',
        description:'',
        file:'',
        colorPciker:'',
    });
    const handleOnChange = (e)=>{
        const { name,value } = e.target;
        setformData({
            ...formData,
            [name]: value,
        })
    }
    useEffect(() => {
        console.log(formData);
    },[formData])

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="container mt-5">
                <h1 className="h1 fw-bold text-center text-decoration-underline text-primary mt-5">Controlled Component</h1>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center align-content-center">
                    <div className="col-md-6">
                        <form method="post" onSubmit={handleOnSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label text-white">Name</label>
                                <input onChange={handleOnChange} required type="text" value={formData.name} className="form-control" id="name" name='name' placeholder="Enter The Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-white">Email address</label>
                                <input onChange={handleOnChange} value={formData.email} type="email" required className="form-control" id="email" name='email' placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label text-white">Description</label>
                                <textarea onChange={handleOnChange} value={formData.description} required className="form-control" id="description" name='description' rows="3" placeholder="Description"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label text-white">Password</label>
                                <input onChange={handleOnChange} value={formData.password} type="password" required id="password" name='password' placeholder='Enter The Password' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="file" className="form-label text-white">Select The File</label>
                                <input onChange={handleOnChange} value={formData.file} className="form-control" required type="file" id="file" name='file' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="colorPciker" className="form-label text-white">Color picker</label>
                                <input onChange={handleOnChange} value={formData.colorPciker} type="color" required className="form-control form-control-color" id="colorPciker" name='colorPciker' title="Choose your color" />
                            </div>
                            <button className='btn btn-primary'>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Using_Hook
