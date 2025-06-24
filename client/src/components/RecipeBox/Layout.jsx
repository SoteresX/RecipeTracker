import React, { useState } from "react";
import ViewRecipe from "./ViewRecipe.jsx";
import foodImage from "../../assets/images/spaghetti.webp";
import Bar from "./Bar";
import Rank from "./Rank.jsx"

function Layout(props){

    const [exp, setExp] = useState(0);

    return <div className="layout ml-5 mt-5 p-6 border-2 border-borderColor rounded-[50px] bg-bgColor">
        <div className="w-[150px] flex flex-col justify-center items-center gap-2.5">
            <h2 className="text-[35px] font-secondary">{props.food}</h2>
                <Rank exp={exp} showXP="true"/>
                <p className="text-[20px]">Not yet learned</p> 
                <ViewRecipe url="spaghetti"/>
                <Bar id="difficulty" page="home" progress="1"/>
                <Bar id="time" page="home" header="Time" progress="2" value="30"/>
                <Bar id="cost" page="home" header="Cost" progress="1" value="4"/>
        </div>
    </div>
}

export default Layout;