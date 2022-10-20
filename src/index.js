import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './components/Homepage';
import ErrorPage from './components/ErrorPage';
import LogIn from './components/LogIn';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,

    }
]);

// Router Provider to pass the router
ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));