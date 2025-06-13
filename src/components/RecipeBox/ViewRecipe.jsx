import React from "react";
import rightArrow from "../../assets/images/icons/rightArrow.svg";
import "../../styles/RecipeBox/ViewRecipe.css"

function ViewRecipe(props){
    return <a href={props.url} className="btn">
            View Recipe
            <img src={rightArrow} width="10px" height="10px"/>
            </a>
}

export default ViewRecipe;