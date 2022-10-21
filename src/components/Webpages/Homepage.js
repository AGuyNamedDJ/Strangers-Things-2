import React, {useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

import Navbar from "../Utilites/Navbar";

// Step 1
const Homepage = () => {
    const [posts, setPosts] = useState([])

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

    return (
        <div>
            <div id="header">
                <h1 id="title">Stranger's Things</h1>
                <Navbar />
            </div>

            {/* Page Content */}
            <Outlet context={posts}/>

        </div>

    )
}

export default Homepage;

// Page Complete