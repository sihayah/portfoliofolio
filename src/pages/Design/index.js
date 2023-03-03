import React from 'react';
import { Link } from 'react-scroll';
import ScrollTop from '../../components/ScrollTop';
import './style.css';


const Design = () => {
    const caseStudies = [
        {
            title: "Planting",
            slides: "planting_empathy_map.jpg",
            gooogleSlides: "https://docs.google.com/presentation/d/1dOjgu_sHbX1tURTPiMInShJgPFo20LncTjsSOoawQow/edit?usp=sharing",
            description: "Guide to gardening, house plant care, and forum for online community of gardeners of all knowledge levels.",
            technologies: "Figma, Google Slides",
            id: "Planting"
        },
        {
            title: "QRAD",
            slides: "qrad_empathy_map.jpg",
            gooogleSlides: "https://docs.google.com/presentation/d/1dOjgu_sHbX1tURTPiMInShJgPFo20LncTjsSOoawQow/edit?usp=sharing",
            description: "This app allows users to generate a digital business card with a QR code they can share from the profile, and add other business cards to a contact list.",
            technologies: "Figma, Google Slides",
            id: "Planting"
        },
        {
            title: "Budget Tracker",
            slides: "budget_tracker_empathy_map.jpg",
            gooogleSlides: "https://docs.google.com/presentation/d/1dOjgu_sHbX1tURTPiMInShJgPFo20LncTjsSOoawQow/edit?usp=sharing",
            description: "This app allows the user to input and graph income and expenses. User data persists, and offline functionality allows the user to input transactions even without an internet connection.",
            technologies: "Figma, Google Slides",
            id: "Planting"
        },


    ];

    return (
        <section className="portfolio">
                    <div id="table-of-contents">
                        
                        <h4>
                            UX Case Studies
                        </h4>
                        <ul>
                            {caseStudies.map(project => (                            
                                        <li key={project.id}>
                                            <Link
                                                activeClass="active"
                                                spy={true}
                                                to={project.id}
                                                smooth={true}
                                                offset={-180}
                                                duration={500}
                                            >
                                                + {project.title}
                                            </Link>
                                        </li>
                            ))}                            
                        </ul>
                        <div className= 'lg-format-scroll-top'>
                            <ScrollTop />     
                        </div>
                        
                    </div>
                <div className="portfolio-container">
                    {caseStudies.map ((project) => (
                        <div className="project-container" key={project.title}>
                            <img className="project-example" id={project.id} src={require(`../../assets/mockups/${project.slides}`)} alt={project.title}
                            ></img>                                
                            <div className='project-details'>
                                <h4>{project.title}</h4>
                                <span id="project-links">
                                    <a href={project.googleSlides}>Google Slides</a>
                                    <span> / </span>   
                                </span>  
                                <p>
                                    {project.description}
                                </p>  
                                <h5>Technologies:</h5>                   
                                <p id="tech-list">
                                    {project.technologies}
                                </p>           
                            </div>
                        </div>
                    ))}    
                </div>
                <div className= 'mobile-scroll-top'>
                    <ScrollTop />
                </div>
                
             
        </section>
       
    )
};


export default Design;