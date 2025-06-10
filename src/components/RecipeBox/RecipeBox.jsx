import React from "react";
import "../../styles//RecipeBox/RecipeBox.css";
import ProgressBar from "./ProgressBar";
import Details from "./Details";

function RecipeBox(props){
    return <>
        <div className="foodContainer">
            <ProgressBar/>
            <Details food={props.food} url={props.url} rank={props.rank}/>
        </div>
    </>
}

export default RecipeBox;