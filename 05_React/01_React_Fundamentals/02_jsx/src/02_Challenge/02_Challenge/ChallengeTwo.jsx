import { recipes } from "./data"
const ChallengeTwo = () => {
    const result = recipes.map((recipe) => {
        return <ul key={recipe.id}><strong>{recipe.name}</strong>
                {
                    recipe.ingredients.map((ingredient) => (<li key={ingredient}>{ingredient}</li>))
                }
                </ul>
    })

    return (

        <div>
            <h1>Recipes</h1>
            {result}

        </div>
    )
}

export default ChallengeTwo