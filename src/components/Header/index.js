import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const tabs = [
        {
            title: "Portfolio",
            name: "portfolio",
            location: "/portfolio"
        },
        {
            title: "About",
            name: "about",
            location: "/"
        },
        {
            title: "Contact",
            name: "contact",
            location: "/contact"
        },
        {
            title: "Resume",
            name: "resume",
            location: "/resume"
        }
    ];
    const currentLocation = useLocation().pathname;  

    return(
        <header id="header">
            <Link to="/">
                
                <span className="top d-flex flex-column align-items-baseline">
                    <h1>
                    <FontAwesomeIcon icon={ faUserAstronaut } />
                     <span></span>Sihaya Harris
                    </h1>
                    <h2>web developer</h2>
                </span>
            </Link>
            <nav className="top-nav">
                {tabs.map((tab) => (
                    <Link to={tab.location}
                        className=
                            {`link ${currentLocation === tab.location && 'nav-active'}`}
                        key={tab.name}
                        >
                        {tab.title}
                    </Link>                      
                ))}
  

            </nav>
        </header>
    )    
}

export default Header;