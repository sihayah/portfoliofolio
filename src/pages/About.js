import React from 'react';
import smiley from '../assets/smiley.png'


const About = () => {
    return (
        <section id="about" className="d-flex flex-column">
            <h3>
                Hello, there!
            </h3>
            <p id="intro">
            I'm Sihaya Harris, a dynamic full-stack web developer with a background in art & design. I am based out of Brooklyn, and I'm currently seeking out my next endeavor.
            </p>
            <img alt="smiley" className="smiley" src={smiley}/>
        </section>
    )
};

export default About;