import React from "react";
import "../../styles/RecipeBox/Bar.css"

function Bar(props){
    const segments = Array.from({ length: 5 }, (_, index) => (
    <div  id={props.id} key={index}
      className={`segment ${index < props.progress ? 'filled' : ''}`}
    ></div>
    ));
    return <>
        <h3>{props.header}</h3>
        <div className="segmentProgress" >{segments}</div>
    </>  
}

export default Bar;