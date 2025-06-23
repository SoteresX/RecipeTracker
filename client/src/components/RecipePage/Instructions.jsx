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
        <ol className="list-decimal list-inside pl-4">  
            {data?.map((recipe, index) => (
            <li className="mb-2 last:mb-0 list-outside list-item" key={index}>
                <div className="flex justify-between border-b border-black w-full text-xl ml-2">
                    <i>{recipe.instructions}</i>
                </div>
            </li>
        ))}
        </ol>
    </>
}

export default Instructions;