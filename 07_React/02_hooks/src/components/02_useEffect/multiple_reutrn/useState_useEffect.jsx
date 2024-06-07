import { useEffect, useState } from "react";

const UseState_UseEffect = () => {
    const [users, setUsers] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/users');
                const data = await response.json();
                setUsers(data);
                setTimeout(() => {
                    setIsloading(false);
                }, 2000);
            }
            catch (e) {
                setError(true)
            }
        }
        FetchData()
    }, [])

    if (isloading) {
        return <h1>Loading.......</h1>
    }
    else if (error) {
        return <h1>Something Went Wrong!</h1>
    }
    else {
        return (
            <>
                <ul>
                    {
                        users.map(user => {
                            return (
                                <li>{user.login}</li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

export default UseState_UseEffect;