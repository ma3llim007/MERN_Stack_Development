import React from 'react'

const Delete = () => {
    fetch('https://dummyjson.com/posts/1', {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(console.log);
    return (
        <div>
            Delete
        </div>
    )
}

export default Delete
