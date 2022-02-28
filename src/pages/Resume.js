import React from 'react';
import pdfIcon from '../assets/pdf-icon.png'

const Resume = () => {
    return (
        <section>
            <div id="download-here">
                <img src={pdfIcon} alt="pdf icon" id="pdf-icon" />                
                <a href="../../Resume.pdf">
                    download my resume here
                </a>
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
        </section>

    )
};

export default Resume;