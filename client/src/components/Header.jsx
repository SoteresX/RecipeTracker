import React from "react";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import "../styles/Header.css"

function Header(props){
    return  <h1>{capitalizeFirstLetter(props.heading)}</h1>
}

export default Header;