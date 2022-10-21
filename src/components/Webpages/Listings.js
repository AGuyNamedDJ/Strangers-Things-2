import React from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom"; 


import ListingFormat from "../Utilites/ListingFormat";

const listings = () => {
    const postsData = useOutletContext();
    console.log("This is our postsData: ", postsData);

    return (
        <div>
            <div className="posts-header">
                <h1>Posts</h1>
                <p>Search Posts</p>
                <button><Link to="/posts/add">New Post</Link></button>
            </div>

            {
                postsData.length ? postsData.map((post, idx) => {
                    return <ListingFormat key={idx} post={post}/>
                }) : <p>No posts to display</p>
            }
        </div>
    )

}

export default listings;


// Map thorugh on line 10
// make a page for listings on the webpage
