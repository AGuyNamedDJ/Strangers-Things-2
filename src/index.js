import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Pages
import EditListing from './components/EditListing';
import LogOut from './components/LogOut';
import NewListing from './components/NewListing';
import Profile from './components/Profile';
import ProfileListingFormat from './components/ProfileListingFormat';
import ListingFormat from './components/ListingFormat';
import LogIn from './components/LogIn';
import Register from './components/Register';
import SearchListings from './components/SearchListings';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import AboutUs from './components/AboutUs';
import Homepage from './components/Homepage';
import HomepageContent from './components/HomepageContent';
import Listings from './components/Listings';

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