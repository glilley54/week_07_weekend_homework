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
    .then(recipes => setRecipes(recipes))
    
    
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
      <>
        <h1>Recipe Container</h1>
        <RecipeSelector/>
        
        <RecipeInfo/>
        </>
        
      
  )

}



  export default RecipesContainer;