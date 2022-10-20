import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './components/Webpages/Homepage';
import ErrorPage from './components/Utilites/ErrorPage';
import AboutUs from './components/Webpages/AboutUs';
import Listings from './components/Webpages/Listings';
import LogIn from './components/Webpages/LogIn';
import Settings from './components/Utilites/Settings';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/settings",
                element: <Settings />
            },
            {
                path: "/aboutus",
                element: <AboutUs />
            },
            {
                path: "/listings",
                element: <Listings />
            },
            {
                path: "/login",
                element: <LogIn />
            },
        ]

    }
]);

// Router Provider to pass the router
ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));