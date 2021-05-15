import React from 'react'

const RecipeInfo = ({selectedRecipe, onButtonClick}) => {

    const handleClick = function() {
        onButtonClick(selectedRecipe)

    }
    
    return (
        <>
            <h2>{selectedRecipe.title}</h2>
            <img id = "image" src={selectedRecipe.thumbnail}></img>
            <h2>Ingredients:</h2>
            <p>{selectedRecipe.ingredients}</p>

          

            
            <button class="button" onClick={handleClick}>Add to Favourites</button>

        </>
    );

};

export default RecipeInfo;