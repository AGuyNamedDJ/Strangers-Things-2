import React, { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";


const Logout = () => {
    const [,, profileData, setProfileData, loggedIn, setLoggedIn] = useOutletContext();

    function logOut() {
        localStorage.removeItem("token");
        setProfileData({});
        setLoggedIn(false);
    }

    return (
        <div>
            {
                loggedIn ? 
                <div id="vert-flex-container">
                    <h2>Confirm Logout ? {profileData.username}?</h2>
                    <button id="delete-button" onClick={logOut}>LOGOUT</button>
                </div>

                : 
                <div id="vert-flex-container">
                    <h2>See you Next Time! {":("}</h2>
                    <Link to="/"> Home </Link>
                </div>
            }
        </div>
    )
}

export default Logout;

// Complete