import React from "react";
import { useParams } from "react-router-dom";
import foodImage from "../assets/images/spaghetti.webp";
import CookedButton from "../components/RecipeBox/CookedButton";
import Bar from "../components/RecipeBox/Bar";
import "../styles/Recipe.css";

function Spaghetti() {

  const {recipeName} = useParams();

  return (
    <div className="recipeBody">
      <img className="recipeImage" src={foodImage} width="20px" height="20px"/>
      <div>
        <h1>Spaghetti</h1>
        <hr/>
        <div className="recipeBars">
          <Bar id="difficulty" class="segment-recipe" header="🔥 Difficulty" progress="1"/>
          <Bar id="time" class="segment-recipe" header="⏲️ Time" progress="2" value="30"/>
          <Bar id="cost" class="segment-recipe" header="💳 Cost" progress="1" value="4"/>
        </div>
        
        <ul>
          <h2>Recipe Ingredients</h2>
        </ul>
        <ul>
          <h2>Recipe Steps</h2>
        </ul>
        <CookedButton/>
      </div>
    </div>
  );
}

export default Spaghetti;