import React from "react";
import { Link } from "react-router-dom";
    // Link only changes URL bar, doesn't hard refresh

const Navbar = () => {
    return (
        <nav>
            <Link to="homepage">Home </Link>
            <Link to="aboutus">About </Link>
            <Link to="login">Log In </Link>
            <Link to="listings">Listings </Link>
            <Link to="newlisting">New Listing </Link>
            <Link to="profile">My Profile </Link>
            <Link to="register">Register </Link>
            <Link to="settings">Settings </Link>

        </nav>
    )
};

export default Navbar;