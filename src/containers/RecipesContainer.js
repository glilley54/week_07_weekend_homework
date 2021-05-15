import RecipeSelector from '../components/RecipeSelector';
import RecipeInfo from '../components/RecipeInfo';
import {useState, useEffect} from 'react';


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
  return (
      <>
        <h1>Recipe Container</h1>
        </>
        
      
  )

}



  export default RecipesContainer;