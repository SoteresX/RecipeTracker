import React from "react"
import useFetchData from "../../hooks/useFetchData";
import DataStatus from "../DataStatus";

function Instructions(){

    const {data, isLoading, error} = useFetchData({
        queryKey: 'instructions', 
        endpoint: '/api/recipe_instructions', 
        params: {recipeId: 1} }
    );

    console.log(data);
    return <>
        <h2>Recipe Instructions</h2>
        <DataStatus 
            isLoading={isLoading} 
            error={error} 
            data={data} 
            emptyMessage="No ingredients found." 
        />
        <ol className="instructionList">  
            {data?.map((recipe, index) => (
            <li key={index}><i>{recipe.instructions}</i></li>
        ))}
        </ol>
    </>
}

export default Instructions;