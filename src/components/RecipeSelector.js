import React from 'react';

const RecipeSelector = ({recipes, onRecipeSelected}) => {

    const handleChange = function(event) {
        const chosenRecipe = recipes[event.target.value];
        onRecipeSelected(chosenRecipe);
    }
    
    const recipeOptions = recipes.map((recipe, index) => {
      return <option value={index} key={index}>{recipe.name}</option>
    })

    return (
        <div id = "select-container">
            <select id = "select-box" defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Recipe</option>
            {recipeOptions}
            </select>
        </div>
    )
}

export default RecipeSelector;