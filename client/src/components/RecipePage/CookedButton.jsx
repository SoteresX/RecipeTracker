import {React, useState} from "react";
import {motion, AnimatePresence } from "framer-motion";
import spatula from "../../assets/images/icons/spatula.svg";

function CookedButton(props){
    
    function stateChange(event){
        if(event.type == "mouseenter"){
            setIsHover(true);
        } else{
            setIsHover(false);
            setIsClicked(false);
        }
        console.log(event.type);
    }

    function handleClick(){
        setIsClicked(true);
        props.onCooked();
    }

    const [isHover, setIsHover] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return <>

            <button className="
            flex justify-center items-center 
            rounded-[var(--borderRadius)] border border-solid border-current
            p-[5px] w-[120px] h-[40px]
            transition-all duration-500
            hover:w-[130px]"
            onClick={handleClick} onMouseEnter={stateChange} onMouseLeave={stateChange}>

                <AnimatePresence mode="popLayout">
                    {isClicked ? (
                    <motion.span 
                        key="check"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0}}
                        className="text-[13px]"
                    >
                    ✅
                    </motion.span>) :
                    isHover ? 
                    <motion.span 
                        key="text"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="text-[15px]"
                    >
                    Mark As Cooked?
                    </motion.span> :
                    <motion.img 
                        key="img"
                        src={spatula} 
                        width="30px" 
                        height="30px"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}} 
                        className="relative left-[3px]"
                    />
                    }
                </AnimatePresence>

            </button>
    </>
}

export default CookedButton;