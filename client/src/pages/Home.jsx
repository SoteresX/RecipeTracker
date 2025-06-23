import React from "react";
import Layout from '../components/RecipeBox/Layout'
import Header from "../components/Header";

function Home(){
    return <>
        <Header heading="Recipe Tracker"/>
        <div className="self-start flex flex-wrap">
            <Layout food="Spaghetti" url="/spaghetti" rank="Not Yet Learned"/>
        </div>
    </>
}

export default Home;