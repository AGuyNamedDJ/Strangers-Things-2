import React, { useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

// URL to make template literal
const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

const MessageForm = (props) => {
    const [content, setContent] = useState("");
    const [posts, setPosts, , setProfileData] = useOutletContext();
    const navigate = useNavigate();


    async function messageFormSubmitHandler(event) {
        event.preventDefault();
            // The parameter will not refresh the page, but run the code

        try {
            const response = await fetch(`${apiBaseURL}/posts/${props.indivPost._id}/messages`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify({
                        message: {
                            content: content
                        }
                    })
                }
            )
            const data = await response.json();

            const updatedPosts = await fetch(`${apiBaseURL}/posts`)
            const translatedUpdatedPosts = await updatedPosts.json();

            setPosts([...translatedUpdatedPosts.data.posts]);
            props.findSpecificPost();
            props.handleToggleMessageForm();
            navigate(`/posts/${props.indivPost._id}`);
            
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div id='new-post'>

            <form onSubmit={messageFormSubmitHandler} id="new-post-form">

                <label>Message: </label>
                <textarea type="text" value={content} onChange={(event) => setContent(event.target.value)}></textarea>

                <br/>

                <button type="submit">SEND</button>
            </form>

        </div>
    )
};

export default MessageForm; 

// Complete