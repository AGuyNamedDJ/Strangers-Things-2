import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './components/Homepage';
import ErrorPage from './components/ErrorPage';
import AboutUs from './components/AboutUs';
import LogIn from './components/LogIn';
import Settings from './components/Settings';

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
                path: "/login",
                element: <LogIn />
            },
        ]

    }
]);

// Router Provider to pass the router
ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));