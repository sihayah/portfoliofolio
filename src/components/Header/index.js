import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import '../Header/style.css';

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
                                    </Link>
                            </span>
                                </h1>   
                            
                        </span>
                    </div>
                    <span id='fullscreen-nav'>    
                    </span>
                </header>  
            </div>
            <Menu />
            
        </>


    )    
}

export default Header;