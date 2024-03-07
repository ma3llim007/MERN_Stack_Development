const RecipeList = ({id,name,ingredients}) => {
    return (
        <ul><strong>{name}</strong>
            {ingredients.map((ingredient) => (<li key={ingredient}>{ingredient}</li>))}
        </ul>
    )
}
export default RecipeList;