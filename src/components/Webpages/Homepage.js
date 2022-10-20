import React, {useState, useEffect } from 'react';
import Navbar from "../Utilites/Navbar";
import { Outlet } from 'react-router-dom';

const Homepage = () => {
    const [pageReady, setPageReady] = useState([])

// Use Effects
    // URL to make template literal
    const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

    // Grabbing Post
    useEffect(() => {
        async function fetchStrangersThingsData() {
            // Fetching Strangers Things Data
            try {
                const response = await fetch(`${apiBaseURL}/posts`);

                // Convert promise response into JSON
                const strangData = await response.json();

                // Save data from response promise & update state
                setPageReady(strangData.data.results)
            } catch (error) {
                console.log(error);
            }
        };
        fetchStrangersThingsData();
    }, [])

    return (
        <div>
            <h1>Strangers Things</h1>
            <p>A Proper Market For All!</p>
            <Navbar />

            <h2>Welcome to Our Home Page!</h2>
            {/* Create section for each path */}
            <p>Content Shown Below</p>
            <Outlet context={pageReady}/>

        </div>
    )
};

export default Homepage;