import React, { useEffect, useRef, useState } from 'react';

function SignInForm() {
    const username = useRef('');
    const password = useRef('');
    const [user, setUser] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        let userObj = {
            username: username.current.value,
            password: password.current.value,
        }
        setUser(userObj);
        username.current.value = '';
        password.current.value= '';
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    ref={username}
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    type="password"
                    ref={password}
                    className="form-control mt-2"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit" className='btn btn-primary mt-3'>Sign In</button>
            </form>
            <br /> <br />
            <div className="container">
                <h2>User Details</h2>
                <h3>{user.username}</h3>
                <p>{ user.password }</p>
            </div>

        </>
    );
}

export default SignInForm;