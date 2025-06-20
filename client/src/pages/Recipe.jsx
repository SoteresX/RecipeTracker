import React from "react";
import { useParams } from "react-router-dom";
import foodImage from "../assets/images/spaghetti.webp";
import CookedButton from "../components/RecipeBox/CookedButton";
import Bar from "../components/RecipeBox/Bar";
import "../styles/Recipe.css";
import { useQuery } from "@tanstack/react-query";

function Spaghetti() {

  const {recipeName} = useParams();
  const { data, isLoading, error } = useQuery({
  queryKey: ['recipe_ingredients'],
  queryFn: async () => {
    const res = await fetch('http://localhost:5000/api/recipe_ingredients');
    const json = await res.json();
    console.log('Fetched data:', json);
    return json;
  }
});

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading data</div>;

  if (!data || data.length === 0) return <div>No ingredients found.</div>;

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
        
        <h2>Recipe Ingredients</h2>
        <ul className="recipeIngredients">  
          {data.map((recipe, index) => (
            <li key={index}><i>{recipe.ingredient_name}</i> <i>{recipe.quantity}</i></li>
          ))}
        </ul>
        <h2>Recipe Steps</h2>
        <ul>
        </ul>
        <CookedButton/>
      </div>
    </div>
  );
}

export default Spaghetti;