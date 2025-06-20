import React from "react";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter.js";
import getPropId from "../../utils/getPropId.js";
import "../../styles/RecipeBox/Bar.css"


function Bar(props){
    const segments = Array.from({ length: 5 }, (_, index) => (
    <div  id={props.id} key={index}
      className={`${props.class} color ${index < props.progress ? 'filled' : ''}`}
    ></div>
    ));

    return <div>
        <h3>{capitalizeFirstLetter(props.id)}: {getPropId(props.id, props.progress, props.value)}</h3>
        <div className="segmentProgress" >{segments}</div>
    </div>  
}

export default Bar;