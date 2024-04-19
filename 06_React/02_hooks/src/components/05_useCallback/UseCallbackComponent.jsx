import { useCallback, useState } from "react";
import Search from "./Search";






const UseCallBackComponent = () => {
    const AllUser = [
        'john',
        'alex',
        'jaan',
        'simon',
        'james',
        'mohd',
        'sameer',
        'salman',
    ]

    const [users, setUsers] = useState(AllUser);

    const shuffleArray = (userarray) => {
        let length = userarray.length, currentInex;
        for (currentInex = length - 1; currentInex > 0; currentInex--) {
            let RandomIndex = Math.floor(Math.random() * (currentInex + 1));
            var temp = userarray[currentInex];
            userarray[currentInex] = userarray[RandomIndex];
            userarray[RandomIndex] = temp;
        }
        return userarray;
    };

    const handleSearch = useCallback((name) => {
        console.log(users[0]);
        const filterUser = AllUser.filter((users) => (users.includes(name)));
        setUsers(filterUser)
    },[users])

    return (
        <>
            <div className="card">
                <Search onChange={handleSearch} />
                <button onClick={() => setUsers(shuffleArray(AllUser))}>Shuffle</button>
            </div>
            <div className="card">
                <ul>
                    {
                        // users.map(user =>  <li>{ user }</li>)
                        users.map((user) => (<p key={user}>{user}</p>))
                    }
                </ul>
            </div>
        </>
    )
}

export default UseCallBackComponent;
