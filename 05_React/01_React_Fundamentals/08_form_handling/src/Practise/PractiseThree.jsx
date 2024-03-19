import React, { useState } from 'react'
import { validEmail, validPassword } from '../components/RegEx';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const PractiseThree = () => {
    const [formData, setFormData] = useState({ name: '', email: '', occupation: '', gender: '', languages: [], password: '', confirmpassword: '' })
    const [formError, setFormError] = useState({});
    const [inputtype, setInputType] = useState('password');
    const [icon, setIcons] = useState(<FaEyeSlash />)

    // Handle onChange Of Input
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

    // Validate The Form
    const Validate = () => {
        let error = {}
        if (formData.name === '') {
            error.name = "Name Is Required";
        }
        if (formData.email === '') {
            error.email = "Email Is Required";
        } else {
            if (!validEmail.test(formData.email)) {
                error.email = "Please Enter The Valid Email";
            }
        }
        if (formData.occupation === '') {
            error.occupation = "Select The Occupation";
        }
        if (formData.gender === '') {
            error.gender = "Gender Is Required";
        }
        if (formData.languages.length < 1) {
            error.languages = "Select Atleast One Language";
        }
        if (formData.password === '') {
            error.password = "Password Is Required";
        } else {
            if (!validPassword.test(formData.password)) {
                error.password = "Password Should Be Combination Of Number And Alphabet, Length Should Be 6 Character's";
            }
        }
        if (formData.confirmpassword === '') {
            error.confirmpassword = "Confirm Password Is Required";
        } else {
            if (!validPassword.test(formData.confirmpassword)) {
                error.confirmpassword = "Password Should Be Combination Of Number And Alphabet, Length Should Be 6 Character's";
            }
            else if (formData.password !== formData.confirmpassword) {
                error.confirmpassword = "Confirm Password Should Be Same";
            }
        }
        setFormError({ ...error })
        return Object.keys(error) < 1;
    }

    // Handle onSumit Of Form
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let isValidate = Validate();
        if (isValidate) {
            alert("Form Submitted")
        }
    }

    // Handle On hide/ Show
    const onClickHandler = (e) => {
        if (inputtype === "password") {
            setInputType('text');
            setIcons(<FaEye />)
        }
        else {
            setInputType('password');
            setIcons(<FaEyeSlash />)
        }
    }
    // Handle On Paste
    const onPAsteHandle = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center align-content-center">
                {/* <div className="col-md-12">
                    <h1 className="h1 fw-bold text-center text-white mt-5">{name}</h1>
                </div> */}
                <div className="col-md-6">
                    <form method="post" onSubmit={onSubmitHandler}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-white">Name</label>
                            <input onChange={onChangeHandler} value={formData.name} type="text" className="form-control" id="name" name='name' placeholder="Enter The Name" />
                            <span className="text-danger fw-bold">{formError.name}</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-white">Email address</label>
                            <input onChange={onChangeHandler} value={formData.email} type="text" className="form-control" id="email" name='email' placeholder="name@example.com" />
                            <span className="text-danger fw-bold">{formError.email}</span>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Occupation</label>
                            <select onChange={onChangeHandler} value={formData.occupation} className="form-select" id='occupation' name='occupation'>
                                <option>--- Select The Menu ---</option>
                                <option value="student">Student</option>
                                <option value="employee">Employee</option>
                                <option value="other">Other</option>
                            </select>
                            <span className="text-danger fw-bold">{formError.occupation}</span>
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
                            <span className="text-danger fw-bold">{formError.gender}</span>
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
                            <span className="text-danger fw-bold">{formError.languages}</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-white">Password</label>
                            <div className="input-group">
                                <input onChange={onChangeHandler} onCopy={onPAsteHandle} onPaste={onPAsteHandle} value={formData.password} type={inputtype} className="form-control" id="password" name='password' placeholder="Enter The Password" />
                                <span className="input-group-text" onClick={onClickHandler} >{icon} </span>
                            </div>
                            <span className="text-danger fw-bold">{formError.password}</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmpassword" className="form-label text-white">Password</label>
                            <div className="input-group">
                                <input onChange={onChangeHandler} onCopy={onPAsteHandle} onPaste={onPAsteHandle} value={formData.confirmpassword} type={inputtype} className="form-control" id="confirmpassword" name='confirmpassword' placeholder="Enter The Confirm Password" />
                                <span className="input-group-text" onClick={onClickHandler} >{icon}</span>
                            </div>
                            <span className="text-danger fw-bold">{formError.confirmpassword}</span>
                        </div>
                        <button className='btn btn-primary' type='submit'>Save</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default PractiseThree;