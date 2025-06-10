import React from "react";
import "../../styles/RecipeBox/ProgressBar.css";
import foodImage from "../../assets/images/spaghetti.webp";

function ProgressBar(){
    return <div className="container">
                <div className="experience">
                    <div className="rank">
                        <img src={foodImage} alt="food image"/>
                    </div>
                </div>
            </div>
}

export default ProgressBar;