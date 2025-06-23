import React from "react";
import { useParams } from "react-router-dom";
import foodImage from "../assets/images/spaghetti.webp";
import CookedButton from "../components/RecipeBox/CookedButton";
import Bar from "../components/RecipeBox/Bar";
import Ingredients from "../components/RecipePage/Ingredients";
import Instructions from "../components/RecipePage/Instructions";
import Rank from "../components/RecipeBox/Rank";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

function Recipe() {

  const {recipeName} = useParams();
  return (
    <div className="flex justify-center h-[99vh] gap-[50px]">
      <img className="fixed left-0 fixed h-full w-[600px] object-cover max-w-[500px] shadow-[1px_1px_10px_black]" src={foodImage} width="20px" height="20px"/>
      <div className="ml-[600px] flex flex-col w-[40em] gap-5">
        <div className="flex items-center h-[8rem] w-full gap-5 mb-[10px] mt-[20px]">
          <Rank/>
          <div className="flex flex-col gap-1">
            <h1 className="font-secondary">{capitalizeFirstLetter(recipeName)}</h1>
             <div className="flex flex-row gap-7.5">
              <Bar id="difficulty" page="recipe" header="🔥 Difficulty" progress="1"/>
              <Bar id="time" page="recipe" header="⏲️ Time" progress="2" value="30"/>
              <Bar id="cost" page="recipe" header="💳 Cost" progress="1" value="4"/>
              </div>
          </div>
        </div>
        <hr/>
        <Ingredients/>
        <Instructions/>
        <CookedButton/>
      </div>
    </div>
  );
}

export default Recipe;