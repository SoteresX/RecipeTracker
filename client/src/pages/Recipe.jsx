import React from "react";
import { useParams } from "react-router-dom";
import foodImage from "../assets/images/spaghetti.webp";
import CookedButton from "../components/RecipeBox/CookedButton";
import Bar from "../components/RecipeBox/Bar";
import "../styles/Recipe.css";
import { useQueries } from "@tanstack/react-query";
import useFetchData from "../hooks/useFetchData";
import Ingredients from "../components/RecipePage/Ingredients";
import Instructions from "../components/RecipePage/Instructions";

function Spaghetti() {

  const {recipeName} = useParams();
  return (
    <div className="recipeBody">
      <img className="recipeImage" src={foodImage} width="20px" height="20px"/>
      <div>
        <h1>Spaghetti</h1>
        <hr/>
        <div className="recipeBars">
          <Bar id="difficulty" className="segment-recipe" header="🔥 Difficulty" progress="1"/>
          <Bar id="time" className="segment-recipe" header="⏲️ Time" progress="2" value="30"/>
          <Bar id="cost" className="segment-recipe" header="💳 Cost" progress="1" value="4"/>
        </div>
        
        <Ingredients/>
        <Instructions/>
        <CookedButton/>
      </div>
    </div>
  );
}

export default Spaghetti;