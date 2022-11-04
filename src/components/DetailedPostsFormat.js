import { useEffect, useState } from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import EditPosts from "./EditPosts";
import Message from "./Message";
import MessageForm from "./MessageForm";

// URL to make template literal
    // I could just save this in an API folder & import it everytime, i'll get to it eventually
const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

const DetailedPostsFormat = () => {
    const [posts,, profileData, setProfileData, loggedIn] = useOutletContext();
    const [detailedPost, setDetailedPost] = useState({});
    const [toggleEditForm, setToggleEditForm] = useState(false);
    const [toggleMessageForm, setToggleMessageForm] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    function handleToggleEditForm() {
        setToggleEditForm(!toggleEditForm);
    }

    function handleToggleMessageForm() {
        setToggleMessageForm(!toggleMessageForm);
    }

    async function deletePost(event) {
        event.preventDefault();

        try {
            const response = await fetch(
                `${apiBaseURL}/posts/${detailedPost._id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                }
            )
            const data = await response.json();

            const userData = await fetch(
                `${apiBaseURL}/users/me`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                })

            const translatedUserData = await userData.json();
            setProfileData(translatedUserData.data);
            navigate("/profile");

        } catch(error) {
            console.log(error);
        }
    }

    async function findSpecificPost() {
        try {

            const [specificPost] = await posts.filter((element) => element._id == id);
            setDetailedPost(specificPost);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        findSpecificPost();
    }, []);

    return (
        <div>
            { toggleEditForm ? <EditPosts indivPost={detailedPost} setProfileData={setProfileData} handleToggleEditForm={handleToggleEditForm}/> : null }

            <div>
                {
                    detailedPost.title ?
                    <div>
                        <div id="detailed-post">
                            <h2>{detailedPost.title}</h2>
                            <p>{detailedPost.description}</p>
                            <h4>Location: {detailedPost.location}</h4>
                            <h5>Price: {detailedPost.price}</h5>
                            <h5>Willing to Deliver: {detailedPost.willDeliver ? ("Yes") : ("No")}</h5>
                            
                            { loggedIn ?
                                ( detailedPost.author._id == profileData._id ? 
                                    <div id="button-container">
                                        <button id="edit-button" onClick={handleToggleEditForm}>EDIT</button>
                                        <button id="delete-button" onClick={deletePost}>DELETE</button>
                                    </div>
                                :
                                    <div id="button-container">
                                        <button id="send-msg-btn" onClick={handleToggleMessageForm}>Message</button>
                                    </div>
                                )
                            : 
                            <div id="button-container">
                                <button id="send-msg-btn" onClick={() => navigate("/profile")}>Login to message</button>
                            </div>
                            }
                        </div>

                        { toggleMessageForm ? <MessageForm indivPost={detailedPost} handleToggleMessageForm={handleToggleMessageForm} setDetailedPost={setDetailedPost} findSpecificPost={findSpecificPost}/> : null }
                        
                        <div>
                            <h3>Messages: </h3>
                            {
                                profileData.messages.length ? profileData.messages.map((msg, idx) => {
                                    return (msg.post._id == detailedPost._id ? <Message key={idx} msg={msg}/> : null)
                                }) : <p>No essages Available</p>
                            }
                        </div>

                    </div>
                    : <p>Untitled Post</p>
                            // If Not
                }

            </div>
        </div>
    )

}

export default DetailedPostsFormat;