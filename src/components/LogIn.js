import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

// URL to make template literal
const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

// Login State
const Login = () => {
    const [,, profileData, setProfileData, loggedIn, setLoggedIn] = useOutletContext();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function formSubmitHandler(event) {
        event.preventDefault();
            // The parameter will not refresh the page, but run the code

        try {
            const response = await fetch(`${apiBaseURL}/login`,
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
                console.log("successful login");
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
            const response = await fetch(`${apiBaseURL}/user/me`,
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

    function updateUsernameState(event) {
        setUsername(event.target.value);
    }

    function updatePasswordState(event) {
        setPassword(event.target.value);
    }


    // Same data from register form
    return (
        <div id="login">
            <h3>Account Log In</h3>
            {/* Now we need to attach a callback fn to the form ele - Step 4*/}
            <form onSubmit={formSubmitHandler} id="login-form">
                {/* no refresh */}

            {/* Now lets connect text to .js - Step 5 */}
                <label>Enter Username </label>


                {/* Step 5c - event listener to attach the inputs */}
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                    {/* this updates the entered state (new state) to reflect - 5a */}

                <br/>
                <br/>

                <label>Enter Password </label>
                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)}></input>

                <br/>
                <br/>

                <button type="submit">Login</button>
            </form>
            <div id="centered">
                <Link to="/profile/register">Click here to Register for an Account! </Link>
            </div>
        </div>
    )
}

export default Login;

// Page complete