import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/images/icons/rightArrow.svg";
import "../../styles/RecipeBox/ViewRecipe.css"

function ViewRecipe(props){
    return <Link to={`/recipe/${encodeURIComponent(props.url)}`} className="btn">
            View Recipe
            <img src={rightArrow} width="10px" height="10px"/>
            </Link>
}

export default ViewRecipe;