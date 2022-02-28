import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
        <header className="d-flex flex-column justify-content-between">
            <span className="top-header d-flex flex-row align-items-baseline p-2">
                <h1>
                Sihaya Harris
                </h1>
                <h2>web developer</h2>
                    
            </span>
            <nav className="top-nav p-0 d-flex flex-row justify-content-sm-around flex-wrap">
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