import React from "react";
import { Link } from "react-router-dom";
    // Link only changes URL bar, doesn't hard refresh

const Navbar = (props) => {

    return (
        <nav id="navbar">
            <Link to="/" id="navbar-text">Home </Link>

            <Link to="posts" id="navbar-text">Posts </Link>

            <Link to="profile" id="navbar-text">Profile </Link>

            {
                props.loggedIn ? <Link to="profile/logout">Logout</Link> : <Link to="profile">Login</Link>
            }
        </nav>
    )
};

export default Navbar; 

// Done