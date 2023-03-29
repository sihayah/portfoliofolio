import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../Header/style.css';
import { slide as Menu } from 'react-burger-menu';
import '../Sidebar/style.css';
import Nav from '../Nav';

const Header = () => {

    return(
        <>
            <div className='header-container'>
                <header id="header">
                    <div>
                        <span className="top d-flex flex-column align-items-baseline">
                            <h1>
                                <span className="heading-text">
                                <Link to="/">
                                    sihaya harris
                                    </Link>/ 
                                <Link to="/design">
                                    design
                                </Link>/ 
                                <Link to="/develop">
                                    develop
                                </Link>
                            </span>
                                </h1>   
                            
                        </span>
                        <Menu id= "sidebar-container" right width={ '50%'}>
                            <Nav />
                        </Menu>
                        {/* <FontAwesomeIcon id="hamburger" icon={ faBars } /> */}
                    </div>
                    <span id='fullscreen-nav'>    
                    </span>
                </header>            
            </div>        
            
        </>


    )    
}

export default Header;