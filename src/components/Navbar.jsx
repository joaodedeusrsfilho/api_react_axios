import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const Navbar = () => {
    return(
        <nav className="navbar">
            <h2>
                <Link to={'/'}>Blog</Link>
            </h2>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>    
                </li>
                <li>
                    <Link to={'/new'} className="newbtn">New Post</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar


