import RecipeSelector from '../components/RecipeSelector';
import RecipeInfo from '../components/RecipeInfo';
import {useState, useEffect} from 'react';


const RecipesContainer = function () {

    const [recipes, setrecipes] = useState([])
    const [selectedRecipe, setSelectedRecipe] = useState([]);
    const [favourites, setFavourites] = useState([])
}

    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = function () {
    fetch('http://www.recipepuppy.com/api/')
    .then(res => res.json())
    .then(recipes => setRecipes(recipes))
    
}
  return (
      <div>
        <RecipeSelector>
        
      
  )





  export default RecipesContainer;