import React from "react";
import foodImage from "../../assets/images/spaghetti.webp"

function Rank(props){
    return <>
        <div className="experience">
            <div className="rank">
                <img src={foodImage} alt="food image"/>
            </div>
        </div>
        <h4>{props.exp} XP</h4>
           </>
}

export default Rank;