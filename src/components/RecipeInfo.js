import React from 'react'

const RecipeInfo = ({selectedRecipe, onButtonClick}) => {

    const handleClick = function() {
        onButtonClick(selectedRecipe)
    }
    
    return (
        <div >
            <h1> </h1> 
            <
            <button onClick={handleClick}>Add to Favourites</button>

        </div>
    );

};

export default RecipeInfo;