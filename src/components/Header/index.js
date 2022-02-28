import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Header = () => {
    const [tabSelected, setTabSelected]  = useState("About");
    const params = useParams();
    console.log(params)
    return(
        <header className="d-flex flex-row justify-content-between">
            <span className="top-header d-flex flex-row align-items-baseline p-2">
                <h1>
                Sihaya Harris
                </h1>
                <h2>web developer</h2>
                    
            </span>
            <nav className="p-0 d-flex flex-row justify-content-sm-around">
                <Link to="/portfolio" className="">Portfolio</Link>    
                
                <Link to="/">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </nav>
        </header>
    )    
}

export default Header;