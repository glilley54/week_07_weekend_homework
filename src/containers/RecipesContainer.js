import React, {useState, useEffect} from 'react';
import RecipeSelector from '../components/RecipeSelector';
import RecipeInfo from '../components/RecipeInfo';



const RecipesContainer = function () {

    const [recipes, setRecipes] = useState([])
    const [selectedRecipe, setSelectedRecipe] = useState([]);
    const [favourites, setFavourites] = useState([]);


    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = function () {
    fetch('http://www.recipepuppy.com/api/')
    .then(res => res.json())
    .then(recipes => setRecipes(recipes.results))
    
    
    }

    const onRecipeClick = function(recipe){
        setSelectedRecipe(recipe)

    }

    const onButtonClick = (recipe) => {
        const updatedFaves = [...favourites, recipe]
        setFavourites(updatedFaves)
    }

    const onRecipeSelected = (recipe) => {
        setSelectedRecipe(recipe)
    }
    
  return (
    <div className="main-container">
    <RecipeSelector id = "recipes" 
    recipes = {recipes} 
    onRecipeClick = {onRecipeClick} 
    selectedRecipe = {selectedRecipe}
    onRecipeSelected = {onRecipeSelected}/>
    <RecipeInfo selectedRecipe = {selectedRecipe} onButtonClick = {onButtonClick}/>
    {/* <FavouriteRecipes favourites = {favourites} onButtonClick = {onButtonClick}/> */}
</div>
      
  )

}



  export default RecipesContainer;