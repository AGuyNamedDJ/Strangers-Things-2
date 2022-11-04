import React from "react";
import { useOutletContext, Link } from "react-router-dom";

import Login from "./LogIn";
import ProfilePostsFormat from "./ProfilePostsFormat";
import Message from "./Message";
import MyMessages from "./MyMessages";

const Profile = () => {
    const [,, profileData, setProfileData, loggedIn] = useOutletContext();
  
    return (
        <div>
            {
                loggedIn ? 
                <div>
                    <h2 id="centered">Welcome {profileData.username}!</h2>

                    {/* My Post */}
                    <h3>My Posts</h3>
                    {/* <div>
                        <button>Submit</button>
                    </div> */}
                    {
                        profileData.posts ? profileData.posts.map((post, idx) => {
                            if (post.active) return <ProfilePostsFormat key={idx} post={post}/>
                        }) : <p>No Posts Available! </p>
                    }
                    <div>
                        <p>No Post Available for Display! </p>
                    </div>
                    
                    {/* My Messages */}
                    <h3>My Messages</h3>
                    {/* <button id="msg-btn"><Link to={/myMessages}>Messages</Link>MyMessages</button> */}
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