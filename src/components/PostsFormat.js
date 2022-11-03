import React from "react";
import { Link } from "react-router-dom"; 

const PostsFormat = (props) => {
    const postData = props;

    // Are we grabbing the post?
    // console.log("Here is each Listing: ", postData);
    
    return (
        <div id="post-preview">

            {/* Details for Each Listing */}
            <h2>{postData.post.title}</h2>
            <p>{postData.post.description}</p>
            <p><strong>Price: </strong>{postData.post.price}</p>
            <p><strong>Location: </strong>{postData.post.location}</p>
            <p><strong>Seller: </strong>{postData.post.author.username}</p>

            <div className="button-container">
                <button id="reply-btn"><Link to={`/posts/${postData.post._id}`}>Reply</Link></button>
            </div>
        </div>
    )
};

export default PostsFormat;

// Page Complete