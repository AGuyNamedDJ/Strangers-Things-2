import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// URL to make template literal
    // I could just save this in an API folder & import it everytime, i'll get to it eventually
const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

const Register = () => {
    // Lets make state for the submission
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function formSubmitHandeler (event) {
        event.preventDefault
            // The parameter will not refresh the page, but run the code
        try {
            // We want /users/register - 3a
            const response = await fetch(`${apiBaseURL}/users/register`, {
                method: "POST",
                    // All request (POST request) are made in all caps - 3b
                headers: {
                    'Content-Type': 'application/json',
                },
                // Data we are passing in & this will translate it to be readable -3c
                body: JSON.stringify({
                    user: {
                        // Pass in variables from the state
                        username: username,
                        password: password
                    }
                })
            })

            // Step -3d; translate promise response to json
            const data = await response.json();
            // console.log("Translated json data", data)

            // Step -3E Local storage; Saving info on the client browser
                // local.Storage.setItem() - it takes 2 arguments: 'key' & 'the value of that key'
            // Here we are saving the token
            if (data.success){
                localStorage.setItem("token", data.data.token)
                navigate('/products');
            }
        } catch (error) {
            console.log(error);
        }
    }

// Step 5b - callback fn
    // Username State
    function updateUsernameState(event) {
        // console.log("This is the event target: ", event.target.value)
        setUsername(event.target.value)
    }

    // Username Password
    function updatePasswordState(event) {
        // console.log("This is the event target: ", event.target.value)
        setPassword(event.target.value)
    }

    return (
        <div id="login-form">
            <h3>Register For Account</h3>
            {/* Now we need to attach a callback fn to the form ele - Step 4*/}
            <form onSubmit={formSubmitHandeler}>
                {/* no refresh */}
            <br/>

            {/* Now lets connect text to .js - Step 5 */}
                <label id="login-text"> Enter New Username: </label>

                {/* Step 5c - event listener to attach the inputs */}
                <input type="text" value={username} onChange={updateUsernameState}></input>
                    {/* this updates the entered state (new state) to reflect - 5a */}

                <br/> 
                <br/>

                <label id="login-text"> Enter New Password: </label>
                <input type="password" value={password} onChange={updatePasswordState}></input>

                <br/>
                <br/>

                <button type="submit" >Create Account</button>
            </form>
        </div>
    )
};

export default Register;

// Page complete