import React from 'react'

const Put = () => {
    fetch('https://dummyjson.com/posts/1', {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'I think I should shift to the moon',
        })
    })
    .then(res => res.json())
    .then(console.log);
    return (
        <div>
            Put
        </div>
    )
}

export default Put
