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

//     return (
//         <div>
//             <h1>Strangers Things</h1>
//             <p>A Proper Market For All!</p>
//             <Navbar />
//             <Outlet context={[pageReady, setPageReady]} />

//             <h2>Welcome to Our Home Page!</h2>
//             {/* Create section for each path */}
//             <p>Content Shown Below</p>
//             <Outlet context={pageReady}/>

//         </div>
//     )
// };

// export default Homepage;

//         <div>
//             <p>These are All of Our Listings; change wording later</p>

//                 {/* Mapping our Listings to the page */}
//             {
//                 listingsData[0].map((singleProduct, idx) => {
//                     return <div key={idx}>
//                         <p>Listing: {singleProduct.title}</p>
//                         <p>Category: {singleProduct.category}</p>
//                         <p>Price: {singleProduct.price}</p>
//                     </div>
//                 })
//             }
//         </div>
//     )
// }; 

    return (
        <div>
            <h1>Strangers Things</h1>
            <p>A Proper Market For All!</p>
            <Navbar />
            <Outlet context={[pageReady, setPageReady]} />
            <div>
                {
                    listingsData[0].map((singleProduct, idx) => {
                    return <div key={idx}>
                        <p id="listing">Listing: {singleProduct.title}</p>
                        <p id="category">Category: {singleProduct.category}</p>  
                        <p id="price">Price: {singleProduct.price}</p>   
                    </div>               
                })
            } 
            </div>   
        </div>
    )
};

export default Homepage;