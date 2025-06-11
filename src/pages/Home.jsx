import React from "react";
import RecipeBox from '../components/RecipeBox/RecipeBox'
import '../styles/App.css';
import Header from "../components/Header";

function Home(){
    return <>
        <Header/>
        <RecipeBox food="Spaghetti" url="/spaghetti" rank="Not Yet Learned"/>
    </>
}

export default Home;