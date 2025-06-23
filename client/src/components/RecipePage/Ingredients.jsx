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
        <ul className="list-disc list-inside pl-4">  
            {data?.map((recipe, index) => (
            <li className="mb-2 last:mb-0 list-outside list-item" key={index}>
                <div className="flex justify-between border-b border-black w-full text-xl ml-2">
                    <i>{recipe.ingredient_name}</i>
                    <i>{recipe.quantity}</i>
                </div>
            </li>
        ))}
        </ul>
    </>
}

export default Ingredients;