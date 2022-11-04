import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Pages
import AboutUs from './components/AboutUs';
import EditPosts from './components/EditPosts';
import LogOut from './components/LogOut';
import NewPosts from './components/NewPosts';
import index from './components/Index';
import Profile from './components/Profile';
import ProfilePostsFormat from './components/ProfilePostsFormat'
import PostsFormat from './components/PostsFormat'
import LogIn from './components/LogIn';
import DetailedPostsFormat from './components/DetailedPostsFormat';
import Register from './components/Register';
import SearchPosts from './components/SearchPosts'
import ErrorPage from './components/ErrorPage';
import Message from './components/Message';
import MessageForm from './components/MessageForm';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import Homepage from './components/Homepage';
import HomepageContent from './components/HomepageContent';
import Posts from './components/Posts';
import Index from './components/Index';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomepageContent />
            },
            {
                path: "/aboutus",
                element: <AboutUs />
            },
            {
                path: "/posts/:id",
                element: <DetailedPostsFormat />
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
                path: "/profile/logout",
                element: <LogOut />
            },
            {
                path: "/message",
                element: <Message />
            },
            {
                path: "/message",
                element: <Message />
            },
            {
                path: "messageform",
                element: <MessageForm />
            },
            {
                path: "/newposts",
                element: <NewPosts />
            },
            {
                path: "/settings",
                element: <Settings />
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