import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

// URL to make template literal
const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

// Login State
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function formSubmitHandler(event) {
        event.preventDefault();
            // The parameter will not refresh the page, but run the code

        try {
            const response = await fetch(`${apiBaseURL}/login`, {
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
                console.log("This is our token: ", data.data.token);
            }
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
        <div className="login">
            <h3>Account Log In</h3>
            {/* Now we need to attach a callback fn to the form ele - Step 4*/}
            <form onSubmit={formSubmitHandler}>
                {/* no refresh */}
            <br/>

            {/* Now lets connect text to .js - Step 5 */}
                <label> Enter Username </label>

                {/* Step 5c - event listener to attach the inputs */}
                <input type="text" value={username} onChange={updateUsernameState}></input>
                    {/* this updates the entered state (new state) to reflect - 5a */}

                <br/> 
                <br/>

                <label> Enter Password </label>
                <input type="password" value={password} onChange={updatePasswordState}></input>

                <br/>
                <br/>

                <button type="submit">Log In</button>
            </form>
        </div>
    )
};


export default Login;

// Page complete