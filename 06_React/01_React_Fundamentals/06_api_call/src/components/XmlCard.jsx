import React from 'react'

const XmlCard = ({ data }) => {
    return (
        data.recipes.map((item) => {
            return <div key={item.id} className="card m-2" style={{ width: "22rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    {
                        item.ingredients.map((ingredient) => (
                             <span className="badge text-bg-primary m-1">{ingredient}</span>
                        ))
                    }

                </div>
            </div>
        })

    )
}

export default XmlCard
