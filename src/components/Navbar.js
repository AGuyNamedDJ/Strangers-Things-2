import React from "react";
import { Link } from "react-router-dom";
    // Link only changes URL bar, doesn't hard refresh

const Navbar = (props) => {

    return (
        <nav id="navbar">
            <Link to="/">Home </Link>

            <Link to="posts">Posts </Link>

            <Link to="profile">Profile </Link>

            {
                props.loggedIn ? <Link to="profile/logout">Logout</Link> : <Link to="profile">Login</Link>
            }
        </nav>
    )
};

export default Navbar; 

// Done