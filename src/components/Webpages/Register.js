import React from "react";
import { ReactDOM } from "react";

// URL to make template literal
    // I could just save this in an API folder & import it everytime, i'll get to it eventually
const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

const Register = () => {
    // Lets make state for the submission
    const [username, setUsername] = userState("");
    const [password, setPassword] = userState("");

    async function formSubmitHandeler () {
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

    return (
        <div>
            {/* Now we need to attach a callback fn to the form ele */}
            <form>
            <br/>
                <label> Enter New Username </label>
                <input type="text"></input>

                <br/>
                <br/>

                <label> Enter New Password </label>
                <input type="text"></input>

                <br/>
                <br/>

                <button type="submit">Create Account</button>
            </form>
        </div>
    )
};

export default Register;