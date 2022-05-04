import React from 'react';
import portrait from '../../assets/pink_portrait.png';
import '../About/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    return (
        <section className="about">
            <img alt="portrait" className="smiley" src={portrait}/>
            <div className="intro">
                <span id='hello-there'>
                    <h3>
                    Hello there 
                    </h3> 
                    <FontAwesomeIcon className='arrow' id='right' icon= { faArrowRight } />
                    <FontAwesomeIcon className='arrow' id='down' icon= { faArrowDown } />
                </span>   
                   
              
                <p>
                I'm Sihaya Harris
                a dynamic full-stack web developer with a background in art & design. I am experienced in MERN stack. I am based out of Brooklyn, and I'm currently seeking out my next endeavor.
                </p>                           
            </div>
        </section>
    )
};

export default About;