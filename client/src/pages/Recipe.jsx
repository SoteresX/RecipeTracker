import React from "react";
import { useParams } from "react-router-dom";
import foodImage from "../assets/images/spaghetti.webp";
import Body from "../components/RecipePage/Body";

function Recipe() {

  const {recipeName} = useParams();
  return (
    <div className="flex justify-center h-[99vh] gap-[50px]">
      <img className="fixed left-0 fixed h-full w-[600px] object-cover max-w-[500px] shadow-[1px_1px_10px_black]" src={foodImage} width="20px" height="20px"/>
      <Body recipeName={recipeName}/>
    </div>
  );
}

export default Recipe;