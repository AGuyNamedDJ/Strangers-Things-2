import React from "react";
import { useOutletContext } from "react-router-dom"; 

const ListingFormat = (props) => {
    const postData = props;

    // Are we grabbing the post?
    console.log("Here is each Listing: ", postData);

    return (
        <div className="listing-format">

            {/* Details for Each Listing */}
            <h2>{postData.post.title}</h2>
            <p>{postData.post.description}</p>
            <p><strong>Price: </strong>{postData.post.price}</p>
            <p><strong>Location: </strong>{postData.post.location}</p>
            <p><strong>Seller: </strong>{postData.post.author.username}</p>

            {/* Button to message Listing Author */}
            <button id="reply-btn">Reply</button>
        </div>
    )
};

export default ListingFormat;

// Page Complete