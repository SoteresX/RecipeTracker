import React from "react";
import "../../styles//RecipeBox/Layout.css";
import ViewDetails from "./ViewDetails";
import foodImage from "../../assets/images/spaghetti.webp";
import Bar from "./Bar";

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
                <ViewDetails url="spaghetti"/>
                <Bar id="difficulty" header="Difficulty" progress="2"/>
                <Bar id="time" header="Time" progress="2"/>
                <Bar id="cost" header="Cost" progress="2"/>
        </div>
    </div>
}

export default Layout;