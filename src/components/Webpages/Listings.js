import React from "react";
import { useOutletContext } from "react-router-dom";

const listings = () => {
    const listingsData = useOutletContext();

    return (
        <div>
            <p>These are All of Our Listings; change wording later</p>

                {/* Mapping our Listings to the page */}
            {
                listingsData.length ? listingsData[0].map((singleProduct, idx) => {
                    return <div key={idx}>
                        <p>Listing: {singleProduct.title}</p>
                        <p>Category: {singleProduct.category}</p>
                        <p>Price: {singleProduct.price}</p>
                    </div>
                }) : <div>No Listings Avaliable </div>
            }
        </div>
    )
}; 

export default listings;


// Map thorugh on line 10
// make a page for listings on the webpage
