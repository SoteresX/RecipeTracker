import React from "react";
import "../styles/ProgressBar.css";
import foodImage from "../assets/images/spaghetti.webp";

function ProgressBar(){
    return <div class="container">
                <div class="outer">
                    <div class="inner">
                        <img src={foodImage}/>
                    </div>
                </div>
            </div>
}

export default ProgressBar;