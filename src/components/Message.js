import React from "react";

const Message = (props) => {

    return (
        <div className="post-preview">
            <h3>For: {props.msg.post.title}</h3>
            <p>{props.msg.content}</p>
        </div>
    )
}

export default Message; 