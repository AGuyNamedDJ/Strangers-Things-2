import React, { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

// URL to make template literal
const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

// Login State
const LogIn = () => {
    const [,, profileData, setProfileData, loggedIn, setLoggedIn] = useOutletContext();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function formSubmitHandler(event) {
        event.preventDefault();

        try {
            const response = await fetch(
                `${apiBaseURL}/users/logIn`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user: {
                            username: username,
                            password: password
                        }
                    })
                }
            )
            const data = await response.json();
            console.log("This is our translated data: ", data);

            if (data.success) {
                setLoggedIn(data.success);

                localStorage.setItem("token", data.data.token);
                fetchUserInfo();
            }
        } catch(error) {
            console.log(error);
        }
    }

    async function fetchUserInfo(event) {    
        try {
            const response = await fetch(
                `${apiBaseURL}/users/me`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                })
                
            const data = await response.json();
            console.log("User profile data: ", data.data);
            setProfileData(data.data);
        } catch(error) {
            console.log(error);
        }
    }


    return (
        <div id="login-form">
            <h1 id="login">Login</h1>
            <form onSubmit={formSubmitHandler} className="login-form">
                <label id="login-text">Enter Username: </label>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}></input>

                <br/>

                <label id="login-text">Enter Password: </label>
                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)}></input>

                <br/>

                <button type="submit" id="login-button">Login</button>
            </form>
            <div className="centered">
                <Link to="/profile/register">Click Here to Register for an Account!</Link>
            </div>
        </div>
    )
}

export default LogIn;

// Page complete