import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../Nav/style.css';

const Nav = () => {

    const tabs = [
        {
            title: "Design",
            name: "design",
            location: "/design"
        },
        {
            title: "Develop",
            name: "develop",
            location: "/develop"
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
            
            {/* <Menu id= "sidebar-container" right width={ '30%'}> */}
            <nav>
                
                {tabs.map((tab) => (
                    <Link to={tab.location}
                        className=
                            {`link menu-item ${currentLocation === tab.location && 'nav-active'}`}
                        key={tab.name}
                        onClick={scrollToTop}
                        >
                        {tab.title}
                    </Link>                      
                ))}
                </nav> 
            {/* </Menu>           */}
        </>

    )
}

export default Nav;