import React from "react";
import RecipeBox from '../components/RecipeBox/RecipeBox'
import '../styles/App.css';

function Home(){
    return <>
        <RecipeBox food="Spaghetti" url="/spaghetti" rank="Not Yet Learned"/>
    </>
}

export default Home;