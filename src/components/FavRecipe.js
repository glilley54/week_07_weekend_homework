import React from 'react';


const FavRecipe = ({recipe, onButtonClick}) => {
  
    return (
        <ul>
        <li>
            <p class = "fav-recipes">{recipe.title}</p>
        </li>
        </ul>
    )
}

export default FavRecipe;