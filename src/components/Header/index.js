import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/style.css';
import Hamburger from '../Hamburger';

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
                    </div>
                    <span id='fullscreen-nav'>    
                    </span>
                </header>  
            </div>

            <Hamburger />
            
        </>


    )    
}

export default Header;