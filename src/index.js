import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Pages
import Homepage from './components/Webpages/Homepage';
import ErrorPage from './components/Utilites/ErrorPage';
import AboutUs from './components/Webpages/AboutUs';
import Listings from './components/Webpages/Listings';
import LogIn from './components/Webpages/LogIn';
import NewListing from './components/Webpages/NewListing';
import Profile from './components/Webpages/Profile';
import Register from './components/Webpages/Register';
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
            {
                path: "/newlisting",
                element: <NewListing />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/register",
                element: <Register />
            },
        ]

    }
]);

// Router Provider to pass the router
ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));