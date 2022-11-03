import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Pages
import EditPosts from './components/EditPosts';
import LogOut from './components/LogOut';
import NewPosts from './components/NewPosts'
import Profile from './components/Profile';
import ProfilePostsFormat from './components/ProfilePostsFormat'
import PostsFormat from './components/PostsFormat'
import LogIn from './components/LogIn';
import Register from './components/Register';
import SearchPosts from './components/SearchPosts'
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import AboutUs from './components/AboutUs';
import Homepage from './components/Homepage';
import HomepageContent from './components/HomepageContent';
import Posts from './components/Posts';

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
                path: "/editposts",
                element: <EditPosts />
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
                path: "/posts",
                element: <Posts />
            },
            {
                path: "/postsformat",
                element: <PostsFormat />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/newposts",
                element: <NewPosts />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/profilepostsformat",
                element: <ProfilePostsFormat />
            },
            {
                path: "/profile/register",
                element: <Register />
            },
            {
                path: "/searchPosts",
                element: <SearchPosts />
            },
        ]

    }
]);

// Router Provider to pass the router
ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));