import React from "react";
import { useOutletContext, Link } from "react-router-dom"; 

const ProfilePostFormat = (props) => {
    const postData = props;
  
    return (
        <div id="post-preview">
            <h2>{postData.post.title}</h2>
            <p>{postData.post.description}</p>
            <p><strong>Location: </strong>{postData.post.location}</p>
            <p><strong>Price: </strong>{postData.post.price}</p>
            <div id="button-container">
                <button id="reply-btn"><Link to={`/profile/${postData.post._id}`}>More Details </Link></button>
            </div>
        </div>
    )
};

export default ProfilePostFormat; 

// Done