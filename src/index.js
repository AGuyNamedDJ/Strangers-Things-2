import React from "react";
import ReactDom from "react-dom";
import { createBrowerRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import ErrorPage from "./components/ErrorPage";

const router = createBrowerRouter([
    {
        path: "/",
        element: <Homepage />
        errorElement: <ErrorPage />
    },
    {
        path: "/",
        element: 
    }
])

const Homepage = () => {
    return (
        <div>
            <p>Bonjou!</p>
        </div>
    )
};

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));