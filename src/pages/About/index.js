import React, { useState } from 'react';
import portrait from '../../assets/pink_portrait.png';
import '../About/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown, faX, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Element, animateScroll as scroll, scroller } from 'react-scroll';


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
                    <FontAwesomeIcon className='arrow' id='right' icon= { faArrowRight } />
                    <FontAwesomeIcon onClick={scrollToArticle} className='arrow' id='down' icon= { faArrowDown } />                 
                </>

            )
        } else {
                return( 
                    <FontAwesomeIcon onClick={scrollToTop} icon={ faX } className='arrow' />
                )    
            }
    }

    return (
        <section className="about">
            <div id="intro-menu">
                <button>
                     {'\u2190'}
                     <br/>
                     browse my UX case studies
                   
                </button>
                <img alt="portrait" className="smiley" src={portrait}/>
                <button>
                {'\u2192'}
                     <br/>
                    checkout my full stack dev projects
                    </button>
                </div>
            
            <div className="intro">
                <span id='hello-there'>
                    <h3>
                    my background...
                    </h3> 
                    <button onClick={toggleVisible}>
                        {toggleButton()}
                    </button>
                </span>  
                <span id='aboutContainer'>
                    <article id='about-text' name='aboutText' style={{display: visible ? 'inline-block' : 'none'}}>
                        <p>
                            I'm Sihaya Harris a dynamic full-stack web developer with a background in art & design. I began my web development journey in elementary school. Back then, I was writing my first HTML, CSS, and JavaScript (with an egregious number of marquees and Lisa Frank color palettes) in a word processor, and hosting my webpages on GeoCities.     
                        </p>
                        <p>
                            I have managed to hone those nascent skills into full-stack MERN development. I still relish in the creative process of app building— pulling a new idea out of the air and seeing it through to completion, not to mention, handling the many side quests of debugging along the way.    
                        </p>
                        <p>
                            I am also a visual artists and I find many satisfying parallels in creating patterns in algorithms and data. I delight in beautiful code!
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