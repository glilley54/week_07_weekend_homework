import React from 'react';


const FavRecipe = ({recipe, onButtonClick}) => {
  
    return (
        <li>
            <p class = "fav-recipes">{recipe.title}</p>
        </li>
    )
}

export default FavRecipe;