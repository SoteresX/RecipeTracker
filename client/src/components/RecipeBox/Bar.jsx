import React from "react";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter.js";
import getPropId from "../../utils/getPropId.js";


function Bar(props){

    const bgColors = {
      difficulty: "bg-difficultyColor",
      time: "bg-timeColor",
      cost: "bg-costColor"
    }

    const segments = Array.from({ length: 5 }, (_, index) => (
    <div
      id={props.id}
      key={index}
      className={`
        w-[25px] 
        ${props.page === 'recipe' ? 'h-[7px] mt-[5px]' : 'h-[15px]'}
        border-2 
        rounded-[4px] 
        border-black/30
        transition-colors 
        duration-300 
        ease-in-out
        ${index < props.progress ? bgColors[props.id] : 'bg-barBg'}
      `}
    />
    ));

    return <div>
        <h3>{capitalizeFirstLetter(props.id)}: {getPropId(props.id, props.progress, props.value)}</h3>
        <div className="flex gap-1" >{segments}</div>
    </div>  
}

export default Bar;