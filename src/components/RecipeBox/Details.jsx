import {React, useState} from "react";
import rightArrow from "../../assets/images/icons/rightArrow.svg";
import spatula from "../../assets/images/icons/spatula.svg";
import "../../styles//RecipeBox/Details.css";
import {motion, AnimatePresence } from "framer-motion";


function Details(props){

    function stateChange(event){
        if(event.type == "mouseover"){
            setState(true);
        } else{
            setState(false);
        }
        console.log(event.type);
        
    }

    const [isHover, setState] = useState(false);

    return <div className="detailsContainer">
                <h2>{props.food}</h2>
                <p className="mastery">{props.rank}</p>
                <a href={props.url} className="btn">View Details<img src={rightArrow} width="10px" height="10px"/> </a>
                <button onMouseOver={stateChange} onMouseOut={stateChange}>
                    <AnimatePresence mode="wait">
                        {isHover ? <motion.span 
                        key="text"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        >Mark As Cooked?</motion.span> : <motion.img 
                        key="img"
                        src={spatula} 
                        width="15px" 
                        height="15px"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}} 
                        />
                        }
                    </AnimatePresence>
                </button>
            </div>
}

export default Details;