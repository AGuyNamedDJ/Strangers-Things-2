import React from "react";
import { useOutletContext } from "react-router-dom";

import Login from "./LogIn";
import ProfilePostFormat from "./ProfilePostsFormat";
import Message from "./Message";

const Profile = () => {
    const [,, profileData, setProfileData, loggedIn] = useOutletContext();
    
    return (
        <div>
            {
                loggedIn ? 
                <div>
                    <h2 id="centered">Welcome {profileData.username}!</h2>
                    <h2>My Posts</h2>
                    {
                        profileData.posts ? profileData.posts.map((post, idx) => {
                            if (post.active) return <ProfilePostsFormat key={idx} post={post}/>
                        }) : <p>No Posts Available! </p>
                    }
                    <h2>My Messages</h2>
                    {
                        profileData.messages ? profileData.messages.map((msg, idx) => {
                            return <Message key={idx} msg={msg}/>
                        }) : <p>No Messages Available!</p>
                    }
                    
                </div>

                : <Login/>
            }
        </div>

    )

}

export default Profile;

// Done