import React from "react"
import useFetchData from "../../hooks/useFetchData";
import DataStatus from "../DataStatus";

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
            <li key={index}><i>{recipe.ingredient_name}</i> <i>{recipe.quantity}</i></li>
        ))}
        </ul>
    </>
}

export default Ingredients;