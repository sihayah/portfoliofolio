import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import Nav from '../Nav';
import '../Header/style.css';


const Header = () => {

    return(
        <div id='header-container'>
            <header id="header">
                <Link to="/">
                    
                    <span className="top d-flex flex-column align-items-baseline">
                        <h1>
                        <FontAwesomeIcon id='astronaut' icon={ faUserAstronaut } />
                        Sihaya Harris
                        </h1>
                        <h2>web developer</h2>
                    </span>
                </Link>
                <Nav />
            </header>            
        </div>

    )    
}

export default Header;