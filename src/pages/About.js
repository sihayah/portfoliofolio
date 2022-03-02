import React from 'react';
import smiley from '../assets/smiley.png'


const About = () => {
    return (
        <section className="about d-flex flex-column">
            <h3>
                Hello, there, I'm Sihaya Harris
            </h3>
            <p className="intro">
            a dynamic <span className="highlight">full-stack web developer</span> with a background in art & design. I am <span className="highlight">experienced in MERN stack</span>. I am based out of Brooklyn, and I'm <span className="highlight">currently seeking out my next endeavor</span>.
            </p>
            <img alt="smiley" className="smiley" src={smiley}/>
        </section>
    )
};

export default About;