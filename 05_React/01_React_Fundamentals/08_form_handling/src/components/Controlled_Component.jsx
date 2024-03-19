import React, { useState } from 'react'

const Controlled_Component = () => {
    console.log("Component Is Panied");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState('');
    const [colorPciker, setColorPciker] = useState('');
    const [select, setSelect] = useState('');
    const [checkBox, setCheckBox] = useState('');
    const [flexRadioDefault, setFlexRadioDefault] = useState('');
    const [Toggole, setToggole] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name, email, description, password, file, colorPciker, select, checkBox, flexRadioDefault, Toggole
        }
        alert(JSON.stringify(formData));
        setName('');
        setEmail('');
        setDescription('');
        setPassword('');
        setFile('');
        setColorPciker('');
        setSelect('');
        setCheckBox('');
        setFlexRadioDefault('');
        setToggole('');
    }

    return (
        <>
            <div className="container mt-5">
                <h1 className="h1 fw-bold text-center text-decoration-underline text-primary mt-5">Controlled Component</h1>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center align-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleOnSubmit} method="post">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label text-white">Name</label>
                                <input onChange={(e) => setName(e.target.value)} value={name} required type="text" className="form-control" id="name" name='name' placeholder="Enter The Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-white">Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" required className="form-control" id="email" name='email' placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label text-white">Description</label>
                                <textarea onChange={(e) => setDescription(e.target.value)} value={description} required className="form-control" id="description" name='description' rows="3" placeholder="Description"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label text-white">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required id="password" name='password' placeholder='Enter The Password' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="file" className="form-label text-white">Select The File</label>
                                <input onChange={(e) => setFile(e.target.value)} value={file} className="form-control" required type="file" id="file" name='file' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="colorPciker" className="form-label text-white">Color picker</label>
                                <input onChange={(e) => setColorPciker(e.target.value)} value={colorPciker} type="color" required className="form-control form-control-color" id="colorPciker" name='colorPciker' title="Choose your color" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Select</label>
                                <select onChange={(e) => setSelect(e.target.value)} required className="form-select" id='select' name='select'>
                                    <option>--- Select The Menu ---</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <label className="form-check-label text-white" htmlFor="checkBox">Learn React</label>
                                    <input onChange={(e) => setCheckBox(e.target.value)} checked={checkBox} value="React" required className="form-check-input" type="checkbox" id="checkBox" name='checkBox' />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <input onChange={(e) => setFlexRadioDefault(e.target.value)} checked={flexRadioDefault === "JavaScript"} required className="form-check-input" type="radio" value="JavaScript" name="flexRadioDefault" id="flexRadioDefault" />
                                    <label className="form-check-label text-white" htmlFor="flexRadioDefault">JavaScript</label>
                                </div>
                                <div className="form-check">
                                    <input onChange={(e) => setFlexRadioDefault(e.target.value)} checked={flexRadioDefault === "Java"} required className="form-check-input" type="radio" value="Java" name="flexRadioDefault" id="flexRadioDefault" />
                                    <label className="form-check-label text-white" htmlFor="flexRadioDefault">Java</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-switch">
                                    <input onChange={(e) => setToggole(e.target.value)} checked={Toggole} className="form-check-input" type="checkbox" role="switch" id="Toggole" name='Toggole' />
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

export default Controlled_Component;