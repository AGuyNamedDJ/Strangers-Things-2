import React from “react”;
import ReactDom from "react-dom";
import { createBrowerRouter } from "react-router";

const router = createBrowerRouter([
    {
        
    }
])

const Homepage = () => {
    return (
        <div>
            <p>Bonjou!</p>
        </div>
    )
};

ReactDOM.render(<Homepage />, document.getElementById("app"));