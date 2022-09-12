import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";


function NavBar() {
    return(
        <div className="navbar">
            <span className="nav-logo"><span className="span">N</span>ovellic</span>
            <div className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/reviews">Add Book</Link>
                <Link to="/books">Reviews</Link>
                <Link to="/add">Add Reviews</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div className="nav-toggle">
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default NavBar