import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";


function NavBar() {
    return(
        <div className="navbar">
            <span className="nav-logo"><span className="span">N</span>ovellic</span>
            <div className="nav-items">
                <Link to="/" className="nav">Home</Link>
                <Link to="/about" className="nav">About</Link>
                <Link to="/reviews" className="nav">Add Book</Link>
                {/* <Link to="/books" className="nav">Reviews</Link> */}
                <Link to="/add" className="nav"> Add Reviews</Link>
                <Link to="/contact" className="nav">Contact Us</Link>
            </div>
            <div className="nav-toggle">
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default NavBar