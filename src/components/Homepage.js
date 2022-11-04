import React, {useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

import Navbar from "./Navbar";

// Step 1
const Homepage = () => {
    const [posts, setPosts] = useState([]);
    const [profileData, setProfileData] = useState({});
    const [ loggedIn, setLoggedIn ] = useState(false);

// Use Effects
    // URL to make template literal
    const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

    // Fetching Post; Step 2a
    useEffect(() => {
        async function fetchStrangersData() {
            try {
                const response = await fetch(`${apiBaseURL}/posts`);
                console.log("The Response Works", response)

                // Convert promise response into JSON - 2b
                const results = await response.json();
                console.log("Here is the translated json", results);

                // Save data from response promise & update state - 2c
                setPosts(results.data.posts);
            } catch (error) {
                console.log(error);
            }
        }
        fetchStrangersData();

    }, [])

    // Fetching UserInfo
    useEffect(() => {
        async function fetchUserInfo(event) {    
            try {
                const response = await fetch(`${apiBaseURL}/users/me`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("token")}`
                        },
                    })
                    
                const data = await response.json();
                setProfileData(data.data);
            } catch(error) {
                console.log(error);
            }
        }
        fetchUserInfo();

    }, []);

    // Fetching Login Status
    useEffect(() => {
        async function isLoggedIn(event) {    
            try {
                const response = await fetch(`${apiBaseURL}/test/me`,
                    {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem("token")}`
                        }
                    })
                const data = await response.json();
                setLoggedIn(data.success);
            } catch(error) {
                console.log(error);
            }
        }
        isLoggedIn();

    }, []);

    
    return (
        <div>
            <div id="header">
                <h1 id="title">Stranger's Things</h1>
                <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            </div>

            {/* Page Content */}
            <Outlet context={[posts, setPosts, profileData, setProfileData, loggedIn, setLoggedIn]}/>
        </div>
    )
    
}

export default Homepage;
// Page Complete