import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../Header/style.css';
import Nav from '../Nav';

const Header = () => {

    return(
        <>
            <div className='header-container'>
                <header id="header">
                    <div>
                        <Link to="/">
                            <span className="top d-flex flex-column align-items-baseline">
                                <h1>
                                 <span className="heading-text">
                                    sihaya harris / design / develop
                                </span>
                                    </h1>   
                                
                            </span>
                        </Link>
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