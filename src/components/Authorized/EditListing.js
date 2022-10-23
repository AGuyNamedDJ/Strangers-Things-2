import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// URL to make template literal
    // I could just save this in an API folder & import it everytime, i'll get to it eventually
const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

// FN
const EditListing = (props) => {
    const [title, setTitle] = useState("")
    console.log("Here's the edit post props", props)

    const navigate = useNavigate()
    function changeInput (event) {
        console.log(event.target.value)

        setTitle(event.target.value)
    }

    async function formSubmit (event) {
        event.preventDefault()
        try {
            console.log("form event:", event.target.value)

            // We want the post id for the specific one we are editing
            const response = await fetch(`${apiBaseURL}/posts/${props.theSpecificPost._id}`, {
                    method: "PATCH",
                        // patch means update (think about call of duty patches lol)
                    headers: {
                        "Content-Type": "application/json",

                        // we want that same token also
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify({
                        post: {
                          title: title
                        }
                      }
                    )
                }
            )
                navigate("/profile")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form id="editlisting" onSubmit={formSubmit}>
            <label>Title</label>
            <input type="text"  value={title} onChange={changeInput}></input>
            <button type="submit">Update</button>
        </form>
    )
}

 export default EditListing;