import React from "react";
import getDifficultyText from "../../utils/getDifficultyText.js";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter.js";
import formatTime from "../../utils/formatTime.js";
import "../../styles/RecipeBox/Bar.css"
import getCurrency from "../../utils/getCurrency.js";

function Bar(props){
    const segments = Array.from({ length: 5 }, (_, index) => (
    <div  id={props.id} key={index}
      className={`${props.class} color ${index < props.progress ? 'filled' : ''}`}
    ></div>
    ));

    function getPropId(id, progress, value){
      switch(id){
        case "difficulty":
          return getDifficultyText(progress);
        case "time":
          return formatTime(parseInt(value));
        case "cost":
          return getCurrency(value);
      }
    }

    console.log(props.value);

    return <div>
        <h3>{capitalizeFirstLetter(props.id)}: {getPropId(props.id, props.progress, props.value)}</h3>
        <div className="segmentProgress" >{segments}</div>
    </div>  
}

export default Bar;