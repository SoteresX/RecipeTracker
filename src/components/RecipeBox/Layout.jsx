import React from "react";
import "../../styles//RecipeBox/Layout.css";
import ViewDetails from "./ViewDetails";
import foodImage from "../../assets/images/spaghetti.webp";

function Layout(props){
    return <div className="recipeSummary">
        <div className="foodContainer">
            <h2>{props.food}</h2>
                <div className="experience">
                    <div className="rank">
                        <img src={foodImage} alt="food image"/>
                    </div>
                </div>
                <p className="mastery">Not yet learned</p> 
                <ViewDetails/>
        </div>
    </div>
}

export default Layout;