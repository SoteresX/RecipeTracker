import React from "react"
import useFetchData from "../../hooks/useFetchData";
import DataStatus from "../DataStatus";
import "../../styles/RecipePage/Ingredients.css"

function Ingredients(){

    const {data, isLoading, error} = useFetchData({
        queryKey: 'ingredients', 
        endpoint: '/api/recipe_ingredients', 
        params: {recipeId: 1} }
    );

    console.log(data);
    return <>
        <h2>Recipe Ingredients</h2>
        <DataStatus 
            isLoading={isLoading} 
            error={error} 
            data={data} 
            emptyMessage="No ingredients found." 
        />
        <ul className="ingredientList">  
            {data?.map((recipe, index) => (
            <li className="item" key={index}>
                <div className="item-row">
                    <i>{recipe.ingredient_name}</i>
                    <i>{recipe.quantity}</i>
                </div>
            </li>
        ))}
        </ul>
    </>
}

export default Ingredients;