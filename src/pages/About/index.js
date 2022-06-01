import React, { useState } from 'react';
import portrait from '../../assets/pink_portrait.png';
import '../About/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown, faX } from '@fortawesome/free-solid-svg-icons';


const About = () => {

    const [visible, setVisible] = useState(false);

    function toggleVisible() {
        if (visible === false) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const toggleButton = () => {
        if (visible === false) {
            return(
                <>
                    <FontAwesomeIcon className='arrow' id='right' icon= { faArrowRight } />
                    <FontAwesomeIcon className='arrow' id='down' icon= { faArrowDown } />                 
                </>

            )
        } else {
                return( 
                    <FontAwesomeIcon icon={ faX } className='arrow' />
                )    
            }
    }

    return (
        <section className="about">
            <img alt="portrait" className="smiley" src={portrait}/>
            <div className="intro">
                <span id='hello-there'>
                    <h3>
                    Hello there 
                    </h3> 
                    <button onClick={toggleVisible}>
                        {toggleButton()}
                    </button>
                </span>  
                <span>
                    <p id='about-text' style={{display: visible ? 'inline-block' : 'none'}}>
                        I'm Sihaya Harris
                        a dynamic full-stack web developer with a background in art & design. I am experienced in MERN stack. I am based out of Brooklyn, and I'm currently seeking out my next endeavor.
                    </p>   
                                     
                </span> 
            </div>              
        </section>
    )
};

export default About;