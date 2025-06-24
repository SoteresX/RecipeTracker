import React from "react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import CookedButton from "./CookedButton";
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