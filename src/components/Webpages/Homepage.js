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
        async function fetchStrangersThingsData() {
            try {
                const response = await fetch(`${apiBaseURL}/posts`);
                console.log("The Response Works", response)

                // Convert promise response into JSON - 2b
                const data = await response.json();
                console.log("Here is converted json data", data);

                // Save data from response promise & update state - 2c
                setPosts(data.results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchStrangersThingsData();
    }, [])
        // This means to only fire this data once, not infinite loop

        // Step 3
    return (
        <div>
            <p>Displaying API Data</p>
            {/* <div>
                {
                    posts.map((indivPosts, idx) => {
                        console.log(indivPosts)
                        return <div key={idx}>
                            <p>Listing: {indivPosts.title}</p>
                            <p>Category: {indivPosts.category}</p>
                            <p>Price: {indivPosts.price}</p>
                        </div>
                    })
                }
            </div> */}
        </div>
    )
};

export default Homepage;

// Original
// return (
//     <div>
//         <div>
//         <h1>Stranger's Things</h1>
//         <h3>A Proper Market For All!</h3>
//         <Navbar />
//         </div>

//         {/* Create section for each path */}
//         <p>All content from the API should be showing here</p>
//         <Outlet context={posts}/>

//     </div>
// )
// };
