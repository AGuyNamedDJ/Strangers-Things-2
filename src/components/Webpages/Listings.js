import React from "react";
import { useOutletContext } from "react-router-dom";

const listings = () => {
    const listingsData = useOutletContext();
    console.log("This is the useOutletContext", listingsData);

    return (
        <div>
            <p>This are ALl of Our Listings; change wording later</p>

                {/* Mapping our Listings to the page */}
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
    )
}; 

export default listings;


{/* <div>
{
    pageReady.length ? pageReady.map((singleProduct,idx) => {
        return <div key={idx}>
            <p>Product: {singleProduct.title}</p>
            <p>Category: {singleProduct.category}</p>
            <p>Price: {singleProduct.price}</p>
        </div>
    }) : <div>No products Available! </div>
}
</div> */}

// Map thorugh on line 10
// make a page for listings on the webpage
