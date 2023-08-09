import React from 'react';
import pdfIcon from '../../assets/pdf-icon.png'
import { Link } from 'react-router-dom';
import pdf from '../../assets/files/resume.pdf';
import '../Resume/style.css';

const Resume = () => {
    return (
        <article id="resume-wrapper">
            <div id="download-here">
                <img src={pdfIcon} alt="pdf icon" id="pdf-icon" />                
                <Link to ={pdf} target="_blank" download>
                    download my resume here
                </Link>
            </div>
                <div className="full-resume"> 
                    <h3>Sihaya Harris</h3>
                    <h5>sihayaharris@gmail.com | (618) 623-9302 | Brooklyn, NY</h5>
                    <h5>Github: https://github.com/sihayah </h5>
                    <h5>LinkedIn: www.linkedin.com/in/sihaya-harris/ </h5>
                    <h5>Portfolio: https://sihayaharris.netlify.app</h5>
                    <section className="summary">
                        <h4>SUMMARY</h4>
                        <p>Highly motivated ux designer and full stack web developer distinguished by penchant for innovation, communication, and collaboration. Background in art and design as well as customer service.
                        </p>
                    </section>
                    <section className="skills">
                        <h4>Skills</h4>
                        <p>
                        HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handlebars, ReactJS, Restful APIs, Jest, Git
                        </p>
                    </section>  
                    <section className='projects'>
                        <h4>Projects</h4>
                        <h6>
                            QRad | Concept Originator and Lead Developer
                        </h6>
                        <p>
                            Repo: https://bit.ly/3MGGuo5 | Live: https://bit.ly/3MU3OyT
                        </p>
                        <p>
                            Digital business card with QR codes that allows users to make networking exchanges
                        </p>
                        <p>
                            React, MongoDB, GraphQL, Node.js, Bootstrap, HTML5, CSS
                        </p>
                        <h6>
                            Forum Follows Functions | Sole Developer
                            </h6>
                        <p>
                            Repo: https://bit.ly/3L4KtKY | Live: https://bit.ly/3ohu9g8
                        </p>
                        <p>
                            Tech blog with user login and MySQL database
                        </p>
                        <p>
                            JavaScript, Node.js, MySQL, Express, Rest APIs, HTML5, CSS
                        </p>
                        <h6>
                            Pet Project | Concept Originator and Lead Developer    
                        </h6>
                        <p>
                            Repo: https://bit.ly/3Ht5mgY | Live: https://bit.ly/3up7yCt
                        </p>
                        <p>
                            A networking community for pet-owners to share information about pet care.
                        </p>
                        <p>
                            JavaScript, Node.js, MySQL, Express, Rest APIs, HTML5, CSS
                        </p> 
                    </section>
                {/* <section className='experience'>
                    <h4>
                        Experience
                    </h4>
                    <h6>Technical Consultant, 2021 - present
                    </h6>
                    <h6>
                    Insa, Brooklyn, NY
                    </h6>
                    <p>
                        - Provided high level of technical skills to thriving a team in fast-paced and high intensity environment contributing 10% revenue increase for winter quarter
                    </p>
                    <p>
                        - Aided in the rapid implementation of new POS and staff training
                    </p>
                    <p>
                        - Work collaboratively with general managers on inventory systems to track profits based on cost of goods sold and implemented procedures to increase profit to consumption ratios
                    </p>
                    <p>
                        - Awarded creative grant and spotlight from Bombay Sapphire Canvas Project
                    </p>

                </section> */}
                <section className='education'>
                    <h4>
                        Education
                    </h4>
                    <h6>
                        Certificate in Full Stack Web Development 
                    </h6>
                    <p>
                        2021 - 2022 | Columbia School of Engineering, New York, NY 
                    </p>
                    <p>
                        Program focusing on technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handlebars.js, and ReactJS.
                    </p>
                    <h6>
                        Bachelor of Fine Arts, Summa cum laude
                    </h6>
                    <p>
                        2008 - 2012 | Savannah College of Art & Design, Savannah, Ga
                    </p>
                </section>
            </div>
        </article>


    )
};

export default Resume;