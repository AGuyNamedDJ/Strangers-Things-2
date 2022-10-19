import React from “react”;
import ReactDom from "react-dom";
import { createBrowerRouter } from "react-router";
import Homepage from "./components/Homepage";

const router = createBrowerRouter([
    {
        path: "/",
        element: <Homepage />
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