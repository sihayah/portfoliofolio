import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <>
        <h1>
            Sihaya Harris - Web Developer
        </h1>
        <nav className="w-100 text-white p-4 d-flex flex-row justify-content-sm-around">
            <Link to="/portfolio" className="">Portfolio</Link>    
            
            <Link to="/">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
        </nav>
        </>
    )    
}

export default Header;