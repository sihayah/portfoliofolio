import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="d-flex flex-row justify-content-between">
            <span className="top-header d-flex flex-row align-items-baseline p-2">
                <h1>
                Sihaya Harris
                </h1>
                <h2>web developer</h2>
                    
            </span>
            <nav className="p-1 d-flex flex-row justify-content-sm-around">
                <Link to="/portfolio" className="">Portfolio</Link>    
                
                <Link to="/">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </nav>
        </header>
    )    
}

export default Header;