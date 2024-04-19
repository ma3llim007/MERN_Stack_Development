import React from 'react'

const Get = () => {
    fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => console.log(data));

    return (
        <div>
            <h1>Get</h1>
        </div>
    )
}

export default Get;
