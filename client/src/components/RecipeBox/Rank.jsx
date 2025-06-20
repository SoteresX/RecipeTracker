import React from "react";
import foodImage from "../../assets/images/spaghetti.webp";
import "../../styles/RecipeBox/Rank.css"

function Rank(props){
    return <div className="flex-col">
        <div className="experience">
            <div className="rank">
                <img src={foodImage} alt="food image"/>
            </div>
        </div>
        <h4>{props.exp} XP</h4>
    </div>
}

export default Rank;