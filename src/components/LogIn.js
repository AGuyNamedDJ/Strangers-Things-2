import React, { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

// URL to make template literal
const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

// Login State
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const {profileObj: [currentProfile, setCurrentProfile]} = useOutletContext();
    
    async function formSubmitHandler(event) {
        event.preventDefault();
            // The parameter will not refresh the page, but run the code

        try {
            console.log(username)
            console.log(password)
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
            const {data} = await response.json();

            if (data.token){
              localStorage.setItem("token", data.token)
              navigate('/products');
            }

        } catch (error) {
          console.log(error);
        }
        if (localStorage.getItem('token')) {
          async function fetchUserData () {
              try {
                  const response = await fetch(`${apiBaseURL}/users/me`, 
                  {
                      headers: {
                          'Content-Type': 'application/json',
                          'Authorization': `Bearer ${localStorage.getItem('token')}`
                      },
                  })
                  const userData = await response.json();
                  setCurrentProfile(userData.data)

              } catch (error) {
                  console.log(error)
              }
          }
          fetchUserData();
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
                <input type="text" value={username} onChange={updateUsernameState} placeholder="Username"></input>
                    {/* this updates the entered state (new state) to reflect - 5a */}

                <br/>
                <br/>

                <label>Enter Password </label>
                <input type="password" value={password} onChange={updatePasswordState} placeholder="Password"></input>

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