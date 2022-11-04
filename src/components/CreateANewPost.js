import React, { useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

// URL to make template literal
    // I could just save this in an API folder & import it everytime, i'll get to it eventually
const apiBaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft";

// State
export default function CreateANewPost({ token, postList, setPostList }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState(null);
    const [willDeliver, setWillDeliver] = useState(null);
  
    return (
      <div>
        <form
          onSubmit={async (e) => {
                    // Event
            e.preventDefault();
  
            const result = await createPost(token, {
              title,
              description,
              price,
              location,
              willDeliver,
            });
  
            if (result.success) alert("Your New Post Was Created! ");
            else console.log(token);
            if (!token) alert("Log In to Create A Post! ");
  
            const newPost = [result.data.post];
            const newList = postList.concat(newPost);
  
            setPostList(newList);
          }}
        >
            {/* Head */}
          <h4>
            <p>Create A New Post</p>
          </h4>

          <br></br>

            {/* Title & Desci */}
          <input placeholder="Title" value={title} required={true} onChange={(e) => setTitle(e.target.value)}/>
          <input placeholder="Description" value={description} required={true} onChange={(e) => setDescription(e.target.value)}/>

          <br></br>

          {/* Price & Location */}
          <input placeholder="Price" value={price} required={true} onChange={(e) => setPrice(e.target.value)}/>
          <input placeholder="Location" value={location} required={false} onChange={(e) => setLocation(e.target.value)}/>

          <br></br>
            
            {/* Will Deliver */}
          <input placeholder="Will Deliver" value={willDeliver} required={false} onChange={(e) => setWillDeliver(e.target.value)}/>
          <button type="submit" disabled={token === null ? true : false}>Submit Post</button>
        </form>
      </div>
    );
  }

  // Done