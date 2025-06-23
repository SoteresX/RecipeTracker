import React, { useState } from "react";
import "../../styles//RecipeBox/Layout.css";
import ViewRecipe from "./ViewRecipe.jsx";
import foodImage from "../../assets/images/spaghetti.webp";
import CookedButton from "./CookedButton.jsx";
import Bar from "./Bar";
import Rank from "./Rank.jsx"

function Layout(props){

    const [exp, setExp] = useState(0);

    return <div className="recipeSummary">
        <div className="foodContainer">
            <h2>{props.food}</h2>
                <Rank exp={exp} showXP="true"/>
                <p className="mastery">Not yet learned</p> 
                <ViewRecipe url="spaghetti"/>
                {/* <CookedButton onCooked={() => setExp(prevExp => prevExp + 10)}/> */}
                <Bar id="difficulty" className="segment-home" progress="1"/>
                <Bar id="time" className="segment-home" header="Time" progress="2" value="30"/>
                <Bar id="cost" className="segment-home" header="Cost" progress="1" value="4"/>
        </div>
    </div>
}

export default Layout;