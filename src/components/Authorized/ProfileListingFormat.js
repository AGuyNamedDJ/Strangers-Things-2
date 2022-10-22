import React from "react";
import { useOutletContext } from "react-router-dom"; 

// Copied from listing format doc
const ProfileListingFormat = (props) => {
    const postData = props;
    // console.log("Here is each Listing: ", postData);

    return (
        <div className="listing-format">
            <h2>{postData.post.title}</h2>
            <p>{postData.post.description}</p>
            <p><strong>Price: </strong>{postData.post.price}</p>
            <p><strong>Location: </strong>{postData.post.location}</p>
            <button>Delete</button>
        </div>
    )
};

export default ProfileListingFormat; 

// Page complete