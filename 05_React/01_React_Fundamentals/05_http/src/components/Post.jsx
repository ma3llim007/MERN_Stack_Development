import React from 'react'

const Post = () => {
    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'I am in love with someone.',
            userId: 5,
            /* other post data */
        })
    })
        .then(res => res.json())
        .then(console.log);
    return (
        <div>
            Post
        </div>
    )
}

export default Post
