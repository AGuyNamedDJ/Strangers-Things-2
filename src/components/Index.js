import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const Index = () => {
    const [,, profileData, , loggedIn] = useOutletContext();
    const navigate = useNavigate();
    
    
    return (
        <div id="centered">
            <h1>Welcome Back</h1>
            <h1 className="big title">Login Below</h1>

            {
                loggedIn ? 
                <div>
                    <h2>Logging as {profileData.username}</h2>
                    <button onClick={() => navigate("/profile")} className="edit-button">View Profile</button>
                </div>
                : 
                <div>
                    <button onClick={() => navigate("/profile")} className="edit-button">Login</button>
                </div>
            }
        </div>
    )

}

export default Index;
// Complete