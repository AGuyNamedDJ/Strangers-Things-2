import React from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom"; 

import ListingFormat from "../Unauthorized/ListingFormat";

const Listings = () => {
    const postsData = useOutletContext();
    console.log("This is our postsData: ", postsData);

    return (
        <div>
            <div id="posts-header">
                <h1>Posts</h1>
                <p>Search Posts</p>
                <button><Link to="/posts/add">New Post</Link></button>
            </div>

            {
                postsData.length ? postsData.map((post, idx) => {
                    return <ListingFormat key={idx} post={post}/>
                }) : <p>No Listings Available</p>
            }
        </div>
    )

;}

export default Listings;

// Page Completed