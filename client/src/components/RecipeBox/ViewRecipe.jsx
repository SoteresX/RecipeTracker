import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/images/icons/rightArrow.svg";

function ViewRecipe(props){
    return <Link to={`/recipe/${encodeURIComponent(props.url)}`} 
            className="
            flex items-center justify-center
            w-fit gap-[3px]
            py-[5px] px-2
            rounded-[var(--borderRadius)]
            bg-primaryColor border border-borderColor
            text-[15px] no-underline text-textSecondary
            transition-all duration-100
            hover:shadow-[1px_1px_2px_rgb(150,141,120),_-1px_-1px_2px_rgb(247,239,220)]
            hover:bg-infoColor">
            View Recipe
            <img src={rightArrow} width="13px" height="13px" className="mt-[1.6px]"/>
            </Link>
}

export default ViewRecipe;