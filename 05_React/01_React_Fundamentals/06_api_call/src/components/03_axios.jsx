import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Axios = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('https://dummyjson.com/recipes')
            .then(response => {
                if (response.status===200) {
                    setData(response.data);                    
                }
            })
            .catch(err => console.error(err));
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

export default Axios;