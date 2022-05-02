import React from 'react';
import portrait from '../../assets/pink_portrait.png';
import '../About/style.css';


const About = () => {
    return (
        <section className="about">
            <img alt="portrait" className="smiley" src={portrait}/>
            <div className="intro">   
                <p>
                Hello, there. I'm Sihaya Harris
                a dynamic full-stack web developer with a background in art & design. I am experienced in MERN stack. I am based out of Brooklyn, and I'm currently seeking out my next endeavor.
                </p>                           
            </div>
        </section>
    )
};

export default About;