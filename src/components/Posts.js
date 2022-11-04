import React, { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import NewPosts from "./NewPosts";
import PostsFormat from "./PostsFormat";

const Posts = () => {
    const [postsData,,,, loggedIn] = useOutletContext();
    const [searchTerm, setSearchTerm] = useState("");

    function postMatches(post, text) {
        if (post.title.toLowerCase().includes(text.toLowerCase())) return true;
        if (post.description.toLowerCase().includes(text.toLowerCase())) return true;
        if (post.author.username.toLowerCase().includes(text.toLowerCase())) return true;
        if (post.location.toLowerCase().includes(text.toLowerCase())) return true;
        if (post.price.toLowerCase().includes(text.toLowerCase())) return true;
        else return false;
    }

    // Search Posts
    const filteredPosts = postsData.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : postsData;


    return (
        <div>
            <div id="posts-header">
                <h1>All Posts</h1>
                <form>
                    <label>Search Posts: </label>
                    <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
                </form>
                { loggedIn ? <button id="new-post-btn"><Link to="/newposts">Create Posts </Link></button> : null }
            </div>

            {
                postsToDisplay.length ? postsToDisplay.map((post, idx) => {
                    return <PostsFormat key={idx} post={post}/>
                }) : <p>No Posts Available! </p>
            }
        </div>
    )

}

export default Posts;

// Done