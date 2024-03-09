import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(response => response.json())
            .then(fetchData => setData(fetchData));

    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    {data ? data.recipes.map((item) => (
                            <div key={item.id} className="card m-2" style={{ width: "22rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    {
                                        item.ingredients.map((ingredient) => (
                                            <span className="badge text-bg-primary m-1">{ingredient}</span>
                                        ))
                                    }

                                </div>
                            </div>
                        ))
                        :
                        <div>Data Is Not Available ...</div>}
                </div>
            </div >
        </>
    )
}

export default Fetch;