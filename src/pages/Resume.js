import React from 'react';
import pdfIcon from '../assets/pdf-icon.png'

const Resume = () => {
    return (
        <div className="d-flex flex-row align-items-center">
            <span>
                
                <a href="../../Resume.pdf">
                    download my resume here:
                    <img src={pdfIcon} /></a>
            </span>
            <span className="skills p-2">

                <ul>                
                    <h4>
                        [skills]     
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
            </span>     
        </div>

    )
};

export default Resume;