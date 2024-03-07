import RecipeList from "./components/RecipeList"
import { recipes } from "./data"
const ChallengeThree = () => {
    return (
        <div>
            <h1>Recipes</h1>
            {
                recipes.map((recipe) => ( <RecipeList key={recipe.id} {...recipe} /> ))
            }
        </div>
    )
}

export default ChallengeThree;