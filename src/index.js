import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Pages
import EditListing from './components/Authorized/EditListing';
import LogOut from './components/Authorized/LogOut';
import NewListing from './components/Authorized/NewListing';
import Profile from './components/Authorized/Profile';
import ProfileListingFormat from './components/Authorized/ProfileListingFormat';

import ListingFormat from './components/Unauthorized/ListingFormat';
import LogIn from './components/Unauthorized/LogIn';
import Register from './components/Unauthorized/Register';
import SearchListings from './components/Unauthorized/SearchListings';

import ErrorPage from './components/Utilites/ErrorPage';
import Navbar from './components/Utilites/Navbar';
import Settings from './components/Utilites/Settings';

import AboutUs from './components/Webpages/AboutUs';
import Homepage from './components/Webpages/Homepage';
import HomepageContent from './components/Webpages/HomepageContent';
import Listings from './components/Webpages/Listings';

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
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/logout",
                element: <LogOut />
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
                path: "/listingformat",
                element: <ListingFormat />
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
                path: "/profilelistingformat",
                element: <ProfileListingFormat />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/searchlistings",
                element: <SearchListings />
            },
        ]

    }
]);

// Router Provider to pass the router
ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));