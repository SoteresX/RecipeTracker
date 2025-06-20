import React from "react";
import Layout from '../components/RecipeBox/Layout'
import '../styles/App.css';
import Header from "../components/Header";
import UserBox from "../components/UserBox";

function Home(){
    return <>
        <Header heading="Recipe Tracker"/>
        <UserBox/>
        <div className="recipes">
            <Layout food="Spaghetti" url="/spaghetti" rank="Not Yet Learned"/>
        </div>
    </>
}

export default Home;