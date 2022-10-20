import React, {useState, useEffect } from 'react';
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';

const Homepage = () => {
    const [pageReady, setPageReady] = useState([])

    useEffect(() => {
        async function fetchStrangersThingsData() {
            // Fetching Strangers Things Data
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts");
                const data = await response.json();
                // Test Example
                console.log("translated data", data);
                console.log("real translated data", data.results);
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

            <div>
                {
                    pageReady.length ? pageReady.map((singleProduct,idx) => {
                        return <div key={idx}>
                            <p>Product: {singleProduct.title}</p>
                            <p>Category: {singleProduct.category}</p>
                            <p>Price: {singleProduct.price}</p>
                        </div>
                    }) : <div>No products Available! </div>
                }
            </div>

            {/* Create section for each path */}
            <p>Content Shown Below</p>
            <Outlet />

        </div>
    )
};

export default Homepage;