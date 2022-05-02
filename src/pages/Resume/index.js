import React from 'react';
import pdfIcon from '../../assets/pdf-icon.png'
import { Link } from 'react-router-dom';
import pdf from '../../assets/files/resume.pdf';
import '../Resume/style.css';

const Resume = () => {
    return (
        <section id="resume-wrapper">
            <div id="resume">
                <div id="download-here">
                    <img src={pdfIcon} alt="pdf icon" id="pdf-icon" />                
                    <Link to ={pdf} target="_blank" download>
                        download my resume here
                    </Link>
                </div>
                <div className="skills">

                    <ul>                
                        <h4>
                            [my skills]     
                        </h4>   
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Rest APIs</li>
                        <li>Git</li>
                        <li>Node.js</li>
                        <li>MySQL</li>
                        <li>NoSQL</li>
                        <li>Express</li>
                        <li>MERN</li>
                        <li>React</li>
                        <li>GraphQL</li>
                        <li>Agile Methodologies</li>
                    </ul>    
                </div>     
            </div>
        </section>


    )
};

export default Resume;