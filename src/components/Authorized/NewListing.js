import React, { useState } from "react";
import { useOutletContext } from "react-router";

// URL to make template literal
    // I could just save this in an API folder & import it everytime, i'll get to it eventually
const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

// FN
const NewListing = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");

    const [listing, setListing] = useOutletContext();

    async function listingSubmitHandler (event) {
        event.preventDefault();
            // The parameter will not refresh the page, but run the code

        try {
            const response = await fetch(`${apiBaseURL}/listing`, {
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
                        price: price,
                        location: location
                    }
                })
            })

            // Translate response into json
            const data = await response.json();
            setTitle("")
            setDescription("")
            setPrice("")
            setLocation("")
            console.log("This is the data: ", data)
    
            setListing([...posts, data.data.post])
    
            
            } catch (error) {
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
        
                    <button type="submit">Create Listing</button>
                    </div>
                </form>
            </div>
        )
    }
    
export default NewListing;