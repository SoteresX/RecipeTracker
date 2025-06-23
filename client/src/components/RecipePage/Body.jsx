import React from "react";
import Ingredients from "../RecipePage/Ingredients";
import Instructions from "../RecipePage/Instructions";
import CookedButton from "../RecipePage/CookedButton";
import Stats from "./Stats";

function Body(props){
    return <div className="ml-[600px] flex flex-col w-[40em] gap-5">
                <Stats recipeName={props.recipeName}/>
                <hr/>
                <Ingredients/>
                <Instructions/>
                <CookedButton/>
            </div>
}

export default Body;