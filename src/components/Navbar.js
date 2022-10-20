import React from "react";
import { Link } from "react-router-dom";
    // Link only changes URL bar, doesn't hard refresh

const Navbar = () => {
    return (
        <nav>
            <Link to="about">About</Link>
            <Link to="login">LogIn</Link>
            <Link to="settings">Settings</Link>

        </nav>
    )
};

export default Navbar;