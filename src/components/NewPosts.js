import React, { useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

// URL to make template literal
    // I could just save this in an API folder & import it everytime, i'll get to it eventually
const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

// FN
const NewPosts = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("[On Request]");
    const [price, setPrice] = useState("");
    const [willDeliver, setWillDeliver] = useState(false);

    const [, setPosts, , setProfileData] = useOutletContext();
    const navigate = useNavigate();

    async function formSubmitHandler(event) {
        event.preventDefault();
            // The parameter will not refresh the page, but run the code

        try {
            const response = await fetch(`${apiBaseURL}/posts`,{
                    method: "POST",
                    // All request (POST request) are made in all caps - 3b
                    headers: {
                    // Getting Token
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                        // must have Bearer 
                    },
                    body: JSON.stringify({
                        post: {
                            // Pass in variables from the state
                            title: title,
                            description: description,
                            location: location,
                            price: price,
                            willDeliver: willDeliver
                        }
                    })
                })

            // Translate response into json
            const data = await response.json();

            const updatedPosts = await fetch(`${apiBaseURL}/posts`)
            const translatedUpdatedPosts = await updatedPosts.json();
            setPosts([...translatedUpdatedPosts.data.posts]);

            const updatedUser = await fetch(`${apiBaseURL}/users/me`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                }
            )
                
            const translatedUpdatedUser = await updatedUser.json();

            setProfileData(translatedUpdatedUser.data);
            navigate("/posts");

        } catch(error) {
            console.log(error);
        }
    }


    // User States
        // Title
        function updateTitleState(event) {
            setTitle(event.target.value)
        }
        // Description
        function updateDescriptionState(event) {
            setDescription(event.target.value)
        }
        // Price
        function updatePriceState(event) {
            setPrice(event.target.value)
        }
        // Location
        function updateLocationState(event) {
            setLocation(event.target.value)
        }
    
        return (
            <div>
                <form onSubmit={listingSubmitHandler}>
                    <div id="form-content">
                    <label>Post</label>
                    <input type="text" value={title} onChange={updateTitleState}></input>
    
                    <label>Description</label>
                    <input type="text" value={description} onChange={updateDescriptionState}></input>
    
                    <label>Price</label>
                    <input type="text" value={price} onChange={updatePriceState}></input>

                    <label>Location</label>
                    <input type="text" value={location} onChange={updateLocationState}></input>
        
                    <label>Willing to Deliver? {"("}Check for yes{")"}</label>
                    <input type="checkbox" value={willDeliver} onChange={(event) => setWillDeliver(event.target.checked)}></input>


                    <button type="submit">POST</button>
                    </div>
                </form>
            </div>
        )
    }
    
export default NewPosts; 