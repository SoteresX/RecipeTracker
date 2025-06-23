import React from "react";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import Rank from "../RecipeBox/Rank";
import Bar from "../RecipeBox/Bar";

function Stats(props){
    return <div className="flex items-center h-[8rem] w-full gap-5 mb-[10px] mt-[20px]">
                <Rank/>
                <div className="flex flex-col gap-1">
                    <h1 className="font-secondary">{capitalizeFirstLetter(props.recipeName)}</h1>
                    <div className="flex flex-row gap-7.5">
                        <Bar id="difficulty" page="recipe" header="🔥 Difficulty" progress="1"/>
                        <Bar id="time" page="recipe" header="⏲️ Time" progress="2" value="30"/>
                        <Bar id="cost" page="recipe" header="💳 Cost" progress="1" value="4"/>
                    </div>
                </div>
            </div>
}

export default Stats;