import RecipeSelector from '../components/RecipeSelector';
import RecipeInfo from '../components/RecipeInfo';
import {useState, useEffect} from 'react';


const RecipesContainer = () {

    const [recipes, setrecipes] = useState([])
    const [selectedRecipe, setSelectedRecipe] = useState([]);
    const [favourites, setFavourites] = useState([])
}

useEffect(() => {
    getRecipeData()
  }, [])

  const getRecipes = function () {
    fetch('http://www.recipepuppy.com/api/')
    .then(res => res.json())
    .then(recipes => setRecipes(recipes))
    
  }
  return (
      <div>
        <h1>Recipes</h1>
      </div>
  )





  export default RecipesContainer;