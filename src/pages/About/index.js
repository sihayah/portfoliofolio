import React, { useState } from 'react';
import clickem from '../../assets/click-icon.webp';
import silhouette from '../../assets/silhouette.jpg';
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
                    <FontAwesomeIcon onClick={scrollToTop} icon={ faX } className='x-icon' />
                )    
            }
    }

    return (
        <section className="about">
            <div className="intro-menu">
                <Link to="/design">
                    <button>
                        
                        recent work
                        <span className='intro-menu-arrow'>{'\u2192'}</span>
                    </button>
                                            
                </Link>  
                <a href='https://docs.google.com/document/d/1GIfZjPmqrDaK3gKBSS7m8bbbKSDsBA4i/edit?usp=sharing&ouid=110368676910301222653&rtpof=true&sd=true'  target='_blank' rel='noreferrer'>
                    <button>
                        resume 
                        <span className='intro-menu-arrow'>{'\u2192'}</span>
                       
                    </button>               
                </a>  
            </div> 
            <div className='hero'>
                <img alt="silhouette" className="silhouette" src={silhouette}/>
                <h2>
                    I am a UX designer with a Google UX Certification and Full-stack coding certification from Columbia University. I am also an award-winning artist with a bachelor's in painting with a customer service background. I am currently looking for work in the UX field.
                </h2>
            </div>

            <div className="intro">
                <span className='bio-btn' onClick={toggleVisible}>
                    <h3>
                    learn more about my background...
                    </h3> 
                    <button className="arrow-btn" onClick={toggleVisible}>
                        {toggleButton()}
                    </button>
                </span>  
                <span id='aboutContainer'>
                    <article id='about-text' name='aboutText' style={{display: visible ? 'inline-block' : 'none'}}>
                        <p>
                        I'm Sihaya Harris, a Brooklyn-based user experience and product designer. With accessibility foremost in mind, I create user interfaces that are approachable, intuitive, and engaging. My design strategy has been shaped by previous customer service experience, web development endeavors, and my work as a visual artist. 
                        </p>
                        <p>
                        Living and working in New York, the value of time and the scarcity of it burns at the tip of every tongue. In the service industry, it is necessary to systematize every process from collaboration to invention. I reflect on these attitudes, embodying users' needs and frustrations in my research insights, the generation of personas, and storyboarding.     
                        </p>
                        <p>
                        My design process involves exploring and analyzing a broad spectrum of solutions from the classic to the abstract. I approach design in a painterly fashion by applying layers of narrative, color theory, and gestalt composition. I seek to create products that feel natural, thrilling, and hopeful.   
                        </p>

                    </article>   
                                     
                </span> 
            </div>              
        </section>
    )
};

export default About;