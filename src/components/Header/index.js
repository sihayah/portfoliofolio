import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faBars } from '@fortawesome/free-solid-svg-icons';
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
                                <FontAwesomeIcon id='astronaut' icon={ faUserAstronaut } />
                                 <span className="heading-text">
                                    Sihaya Harris
                                </span>
                                    </h1>
                                <h2>web developer</h2>    
                                
                            </span>
                        </Link>
                        {/* <FontAwesomeIcon id="hamburger" icon={ faBars } /> */}
                    </div>
                    <span id='fullscreen-nav'>
                        <Nav />       
                    </span>
                </header>            
            </div>        
            
        </>


    )    
}

export default Header;