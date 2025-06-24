import React from "react";
import foodImage from "../../assets/images/spaghetti.webp";


function Rank(props){
    return <div className="flex flex-col items-center">
        <div className="experience p-[12px] transition-all duration-500 flex items-center justify-center hover:p-[6px]">
            <div className="rank noRank flex items-center justify-center">
                <img 
                    src={foodImage} 
                    alt="food image"
                    className="max-w-[75%] h-[60%] border-[2px] border-white rounded-full object-cover"/>
            </div>
        </div>
        {props.showXP ? <p className="mt-2">{props.exp} XP</p> : null}
    </div>
}

export default Rank;