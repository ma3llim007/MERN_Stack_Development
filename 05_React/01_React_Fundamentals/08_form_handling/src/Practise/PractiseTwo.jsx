import React, { useState } from 'react'

const PractiseTwo = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        occupation: '',
        gender: '',
        languages: [],
    })
    const onChangeHandler = (e) => {
        if (e.target.name === "languages") {
            let copy = { ...formData }
            if (e.target.checked) {
                copy.languages.push(e.target.value);
            }
            else {
                copy.languages = copy.languages.filter(el => el !== e.target.value);

            }
            setFormData(copy);
        } else {
            setFormData(() => ({
                ...formData,
                [e.target.name]: e.target.value,
            }));
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.table(formData);
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center align-content-center">
                    {/* <div className="col-md-12">
                        <h1 className="h1 fw-bold text-center text-white mt-5">{name}</h1>
                    </div> */}
                    <div className="col-md-6">
                        <form method="post" onSubmit={onSubmitHandler}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label text-white">Name</label>
                                <input onChange={onChangeHandler} value={formData.name} required type="text" className="form-control" id="name" name='name' placeholder="Enter The Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-white">Email address</label>
                                <input onChange={onChangeHandler} value={formData.email} type="email" required className="form-control" id="email" name='email' placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Occupation</label>
                                <select onChange={onChangeHandler} value={formData.occupation} required className="form-select" id='occupation' name='occupation'>
                                    <option>--- Select The Menu ---</option>
                                    <option value="student">Student</option>
                                    <option value="employee">Employee</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <h5 className="form-check-label text-white" htmlFor="gender">Gender</h5>
                                <div className="form-check">
                                    <input onChange={onChangeHandler} className="form-check-input" type="radio" value="Male" name="gender" id="gender" />
                                    <label className="form-check-label text-white" htmlFor="gender">Male</label>
                                </div>
                                <div className="form-check">
                                    <input onChange={onChangeHandler} className="form-check-input" type="radio" value="Female" name="gender" id="gender" />
                                    <label className="form-check-label text-white" htmlFor="gender">Female</label>
                                </div>
                                <div className="form-check">
                                    <input onChange={onChangeHandler} className="form-check-input" type="radio" value="Other" name="gender" id="gender" />
                                    <label className="form-check-label text-white" htmlFor="gender">Other</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <h5 className="form-check-label text-white" htmlFor="gender">Languages</h5>
                                <div className="form-check">
                                    <input onChange={onChangeHandler} className="form-check-input" type="checkbox" id="checkBox" value="Html" name='languages' />
                                    <label className="form-check-label text-white" htmlFor="checkBox">Html</label>
                                </div>
                                <div className="form-check">
                                    <input onChange={onChangeHandler} className="form-check-input" type="checkbox" value="Css" id="checkBox" name='languages' />
                                    <label className="form-check-label text-white" htmlFor="checkBox">Css</label>
                                </div>
                                <div className="form-check">
                                    <input onChange={onChangeHandler} className="form-check-input" type="checkbox" value="JavaScript" id="checkBox" name='languages' />
                                    <label className="form-check-label text-white" htmlFor="checkBox">JavaScript</label>
                                </div>
                                <div className="form-check">
                                    <input onChange={onChangeHandler} className="form-check-input" type="checkbox" value="Bootstrap" id="checkBox" name='languages' />
                                    <label className="form-check-label text-white" htmlFor="checkBox">Bootstrap</label>
                                </div>
                            </div>
                            <button className='btn btn-primary' type='submit'>Save</button>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}
export default PractiseTwo;