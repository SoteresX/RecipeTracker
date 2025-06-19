import React from "react";
import profilePicture from "../assets/images/profilePicture.jpg";
import "../styles/UserBox.css";

function UserBox(){
    return <div className="flex-col">
        <img src={profilePicture} width="70px" height="70px"/>
        <div>
            <p>Soteres</p>
            <p>Level: 0</p>
        </div>
    </div>
}

export default UserBox;