import React from "react";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

function Header(props){
    return  <h1 className="text-5xl">{capitalizeFirstLetter(props.heading)}</h1>
}

export default Header;