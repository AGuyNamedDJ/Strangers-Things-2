import React from "react";
import { ReactDOM } from "react";

const Register = () => {
    // Lets make state for the submission
    const [username, setUsername] = userState("");
    const [password, setPassword] = userState("");


    return (
        <div>
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