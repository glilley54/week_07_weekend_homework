import React from 'react';
import FavRecipe from './FavRecipe'

const FavouriteRecipes = ({favourites, onButtonClick}) => {

    const favRecipeNodes = favourites.map((recipe, index) => {
        return <FavRecipe
        recipe = {recipe} 
        key = {index} 
        index = {index} 
        onButtonClick = {onButtonClick}/>

    })

    return (
        <ul>
            <h1>Favourite Recipes</h1>
            {favRecipeNodes}
        </ul>
    )

}

export default FavouriteRecipes;