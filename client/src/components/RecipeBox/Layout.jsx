import React, { useState } from "react";
import ViewRecipe from "./ViewRecipe.jsx";
import foodImage from "../../assets/images/spaghetti.webp";
import CookedButton from "./CookedButton.jsx";
import Bar from "./Bar";
import Rank from "./Rank.jsx"

function Layout(props){

    const [exp, setExp] = useState(0);

    return <div className="ml-5 mt-5 p-[30px] border-2 border-black rounded-[50px]">
        <div className="w-[150px] flex flex-col justify-center items-center gap-2.5">
            <h2 className="text-[35px]">{props.food}</h2>
                <Rank exp={exp} showXP="true"/>
                <p className="text-[20px]">Not yet learned</p> 
                <ViewRecipe url="spaghetti"/>
                {/* <CookedButton onCooked={() => setExp(prevExp => prevExp + 10)}/> */}
                <Bar id="difficulty" page="home" progress="1"/>
                <Bar id="time" page="home" header="Time" progress="2" value="30"/>
                <Bar id="cost" page="home" header="Cost" progress="1" value="4"/>
        </div>
    </div>
}

export default Layout;