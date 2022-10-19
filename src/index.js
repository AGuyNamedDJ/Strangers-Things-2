import React from "react";
import ReactDOM from "react-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    }
]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));