import React, { useState } from "react";
import { useOutletCOntext, useNavigate } from "react-router-dom";

// URL to make template literal
    // I could just save this in an API folder & import it everytime, i'll get to it eventually
    const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

// FN
const EditPosts = (props) => {
    const [title, setTitle] = useState(props.indivPost.title);
    const [description, setDescription] = useState(props.indivPost.description);
    const [location, setLocation] = useState(props.indivPost.location);
    const [price, setPrice] = useState(props.indivPost.price);
    const [willDeliver, setWillDeliver] = useState(props.indivPost.willDeliver);

    const navigate = useNavigate();

    async function changePosts(event) {
        event.preventDefault();
        try {
            // console.log("form event:", event.target.value)

            // We want the post id for the specific one we are editing
            const response = await fetch(`${apiBaseURL}/posts/${props.indivPost._id}`,
            {
                method: "PATCH",
                    // patch means update (think about call of duty patches lol)
                headers: {
                    "Content-Type": "application/json",

                        // we want that same token also
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: description,
                        location: location,
                        price: price,
                        willDeliver: willDeliver
                    }
                })
            })
            const data = await response.json();

            const userData = await fetch(
                "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me",
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                })
            const translatedUserData = await userData.json();
            props.setProfileData(translatedUserData.data);
            navigate("/profile");

        } catch(error) {
            console.log(error);
        }
    }


    return (
        <div id="new-post">
            <h2>Updating Post </h2>
            <form id="new-post-form" onSubmit={changePosts}>
                <label>Edit Title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>
                <br />

                <label>Edit Description</label>
                <textarea type="text" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                <br />

                <label>Edit Location</label>
                <input type="text" value={location} onChange={(event) => setLocation(event.target.value)}></input>
                <br />

                <label>Edit Price</label>
                <input type="text" value={price} onChange={(event) => setPrice(event.target.value)}></input>
                <br />


                <label>Edit Willing to Deliver</label>
                <input type="checkbox" value={willDeliver} onChange={(event) => setWillDeliver(event.target.value)} defaultChecked={willDeliver}></input>
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default EditPosts;