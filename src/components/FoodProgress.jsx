import React from "react";
import "../styles/FoodProgress.css";
import ProgressBar from "./ProgressBar";

function FoodProgress(){
    return <>
        <div class="foodContainer">
            <ProgressBar/>
            <div class="detailsContainer">
                <h2>Spaghetti</h2>
                <button>View Details</button>
            </div>
        </div>
        
    </>
}

export default FoodProgress;