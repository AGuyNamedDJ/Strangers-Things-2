import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Pages
import Homepage from './components/Webpages/Homepage';
import ErrorPage from './components/Utilites/ErrorPage';
import AboutUs from './components/Webpages/AboutUs';
import EditListing from './components/Webpages/EditListing';
// Check if i need a homepage content
import Listings from './components/Webpages/Listings';
import ListingsView from './components/Webpages/ListingsView';
import LogIn from './components/Webpages/LogIn';
import NewListing from './components/Webpages/NewListing';
import Profile from './components/Webpages/Profile';
import Register from './components/Webpages/Register';
import Settings from './components/Utilites/Settings';
import HomepageContent from './components/Webpages/HomepageContent';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            // Check & see if i need this
            // {
            //     index: true,
            //     element: <Homepage />
            // },
            {
                path: "/settings",
                element: <Settings />
            },
            {
                path: "/aboutus",
                element: <AboutUs />
            },
            {
                path: "/editlisting",
                element: <EditListing />
            },
            // check if i want this page /home for homepage content
            {
                path: "/home",
                element: <LogIn />
            },
            {
                path: "/homepage",
                element: <HomepageContent />
            },
            {
                path: "/listings",
                element: <Listings />
                    // may need children element here
                    // children: [
                    //     {
                    //         example
                    //     }
                    // ]
            },
            {
                path: "/listingsview",
                element: <ListingsView />
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
            // Check if I need profile id to log in, there a lecture on this
            // {
            //     path: "/profile/:id",
            //     element: <ListingsView />
            // },
            {
                path: "/register",
                element: <Register />
            },
        ]

    }
]);

// Router Provider to pass the router
ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));