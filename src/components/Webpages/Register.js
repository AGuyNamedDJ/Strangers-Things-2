import React, { useState } from "react";
import ReactDOM from "react-dom";

// URL to make template literal
    // I could just save this in an API folder & import it everytime, i'll get to it eventually
const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

const Register = () => {
    // Lets make state for the submission
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function formSubmitHandeler (event) {
        event.preventDefault
            // The parameter will not refresh the page, but run the code
        try {
            // We want /users/register
            fetch(`${apiBaseURL}/users/register`, {
                method: "POST",
                    // All request (POST request) are made in all caps
                headers: {
                    'Content-Type': 'application/json'
                },
                // Data we are passing in & this will translate it to be readable
                body: JSON.stringify({
                    user: {
                        // Pass in variables from the state
                        username: username,
                        password: password
                    }
                })
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Step 5b- callback fn
    function updateUsernameState(event) {
        console.log("This is the event target", event.target.value)
    }

    return (
        <div>
            {/* Now we need to attach a callback fn to the form ele - Step 4*/}
            <form onSubmit={formSubmitHandeler}>
                {/* no refresh */}
            <br/>

            {/* Now lets connect text to .js - Step 5 */}

                <label> Enter New Username </label>
                <input type="text" value={username}></input>
                    {/* this updates the entered state (new state) to reflect - 5a */}

                <br/>
                <br/>

                <label> Enter New Password </label>
                <input type="text" value={password}></input>

                <br/>
                <br/>

                <button type="submit">Create Account</button>
            </form>
        </div>
    )
};

export default Register;