import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Nav/style.css';
import { scroller } from 'react-scroll';


const Nav = () => {

    const tabs = [
        {
            title: "Portfolio",
            name: "portfolio",
            location: "/portfolio"
        },
        {
            title: "About",
            name: "about",
            location: "/about "
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

    const scrollToTop = () => {
        scroller.scrollToTop({
            duration: 100,
            smooth: 'easeInOutQuint'
        });
    };

    const currentLocation = useLocation().pathname;  

    return(
        <>
            <nav id='' className="top-nav">
            
            {tabs.map((tab) => (
                <Link to={tab.location}
                    className=
                        {`link ${currentLocation === tab.location && 'nav-active'}`}
                    key={tab.name}
                    onClick={scrollToTop}
                    >
                    {tab.title}
                </Link>                      
            ))}
            </nav>        
        </>

    )
}

export default Nav;