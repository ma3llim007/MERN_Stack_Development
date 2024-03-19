import React, { useRef } from 'react'
const UnControlled_Component = () => {
    console.log("Component Is Panied");
    const nameElement = useRef(null);
    const emailElement = useRef(null);
    const descriptionElement = useRef(null);
    const passwordElement = useRef(null);
    const fileElement = useRef(null);
    const colorPcikerElement = useRef(null);
    const selectElement = useRef(null);
    const checkBoxElement = useRef(null);
    const option1Element = useRef(null);
    const option2Element = useRef(null);
    const ToggoleElement = useRef(null);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const name = nameElement.current.value;
        const email = emailElement.current.value;
        const description = descriptionElement.current.value;
        const password = passwordElement.current.value;
        const file = fileElement.current.value;
        const color = colorPcikerElement.current.value;
        const checkbox = checkBoxElement.current.value;
        const optionOne = option1Element.current.checked;
        let flexRadioDefault = null;
        if (optionOne) {
            flexRadioDefault = "JavaScript";
        }
        const optionTwo = option2Element.current.checked;
        if (optionTwo) {
            flexRadioDefault = "Java";
        }
        const Toggle = ToggoleElement.current.value;
        const formData = {
            name,email,description,password,file,color,checkbox,flexRadioDefault,Toggle
        }
        alert(JSON.stringify(formData));
    }

    return (
        <>
            <div className="container mt-5">
                <h1 className="h1 fw-bold text-center text-decoration-underline text-primary mt-5">UnControlled Component</h1>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center align-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleOnSubmit} method="post">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label text-white">Name</label>
                                <input ref={nameElement} required type="text" className="form-control" id="name" name='name' placeholder="Enter The Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-white">Email address</label>
                                <input ref={emailElement} type="email" required className="form-control" id="email" name='email' placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label text-white">Description</label>
                                <textarea ref={descriptionElement} required className="form-control" id="description" name='description' rows="3" placeholder="Description"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label text-white">Password</label>
                                <input ref={passwordElement} type="password" required id="password" name='password' placeholder='Enter The Password' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="file" className="form-label text-white">Select The File</label>
                                <input ref={fileElement} className="form-control" required type="file" id="file" name='file' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="colorPciker" className="form-label text-white">Color picker</label>
                                <input ref={colorPcikerElement} type="color" required className="form-control form-control-color" id="colorPciker" name='colorPciker' title="Choose your color" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Select</label>
                                <select ref={selectElement} required className="form-select" id='select' name='select'>
                                    <option>--- Select The Menu ---</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <label className="form-check-label text-white" htmlFor="checkBox">Learn React</label>
                                    <input ref={checkBoxElement} value="React" required className="form-check-input" type="checkbox" id="checkBox" name='checkBox' />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <input ref={option1Element} required className="form-check-input" type="radio" value="JavaScript" name="flexRadioDefault" id="flexRadioDefault" />
                                    <label className="form-check-label text-white" htmlFor="flexRadioDefault">JavaScript</label>
                                </div>
                                <div className="form-check">
                                    <input ref={option2Element} required className="form-check-input" type="radio" value="Java" name="flexRadioDefault" id="flexRadioDefault" />
                                    <label className="form-check-label text-white" htmlFor="flexRadioDefault">Java</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-switch">
                                    <input ref={ToggoleElement} className="form-check-input" type="checkbox" role="switch" id="Toggole" name='Toggole' />
                                    <label required className="form-check-label text-white" htmlFor="Toggole">Completed JavaScript</label>
                                </div>
                            </div>
                            <button className='btn btn-primary'>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnControlled_Component;