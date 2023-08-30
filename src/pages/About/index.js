import React, { useState } from 'react';
import avatar from '../../assets/avatar.png';
import clickem from '../../assets/click-icon.webp';
import placeholder from '../../assets/placeholder_img.png';
import '../About/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown, faX, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Element, animateScroll as scroll, scroller } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';


const About = () => {

    const [visible, setVisible] = useState(false);

    function toggleVisible() {
        if (visible === false) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToArticle = () => {
        scroll.scrollTo('300', {
            duration: 100,
            delay: 100,
            smooth: true,
        })
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const toggleButton = () => {
        if (visible === false) {
            return(
                <>
                   {/* <FontAwesomeIcon onClick={scrollToArticle} className='hidden-click' id='down' icon= { faArrowDown } />  */}
                    <img alt="clickem" className="clickem"  onClick={scrollToArticle} src={clickem}/>
                </>
            )
        } else {
                return( 
                    <FontAwesomeIcon onClick={scrollToTop} icon={ faX } className='arrow x-icon' />
                )    
            }
    }

    return (
        <section className="about">
            <div className="intro-menu">
                <Link to="/design">
                    <button>
                        <span className='intro-menu-arrow'>{'\u2190'}</span>
                        browse my UX case studies
                    </button>
                                            
                </Link>  
            </div> 
                <img alt="placeholder" className="placeholder" src={placeholder}/>
                <button className="arrow-btn">
                    </button>
            <div className='intro-menu'>
                <Link to="/develop">
                    <button>
                        
                        checkout my full stack dev projects
                        <span className='intro-menu-arrow'>{'\u2192'}</span>
                        
                    </button>                                  
                </Link>
                </div>
            
            <div className="intro">
                <span className='hello-there-btn' onClick={toggleVisible}>
                    <h3>
                    learn about my background...
                    </h3> 
                    <button className="arrow-btn" onClick={toggleVisible}>
                        {toggleButton()}
                    </button>
                </span>  
                <span id='aboutContainer'>
                    <article id='about-text' name='aboutText' style={{display: visible ? 'inline-block' : 'none'}}>
                        <p>
                            I'm Sihaya Harris a dynamic UX designer and full-stack web developer with a background in art & design. I began my web development journey in elementary school. Back then, I was writing my first HTML, CSS, and JavaScript (with an egregious number of marquees and Lisa Frank color palettes) in a word processor, and hosting my webpages on GeoCities.     
                        </p>
                        <p>
                            I have managed to hone those nascent skills since. I still relish in the creative process of app building— pulling a new idea out of the air and seeing it through to completion, not to mention, handling the many side quests of debugging, testing, and iteration along the way.    
                        </p>
                        <p>
                            I am also a visual artists and I find many satisfying parallels in creating patterns in algorithms and data structures. I delight in channeling my sense of aesthetics into creating beautiful web designs!
                        </p>
                        <p>
                            I am based out of Brooklyn, NY, and I am currently seeking new endeavors.
                        </p>

                    </article>   
                                     
                </span> 
            </div>              
        </section>
    )
};

export default About;