import React from "react";
import Layout from '../components/RecipeBox/Layout'

function Home(){
    return <>
        <h1 className="text-5xl font-secondary">Recipe Tracker</h1>
        <div className="self-start flex flex-wrap">
            <Layout food="Spaghetti" url="/spaghetti" rank="Not Yet Learned"/>
        </div>
    </>
}

export default Home;