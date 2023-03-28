import React from 'react';
import { Link } from 'react-scroll';
import ScrollTop from '../../components/ScrollTop';
import './style.css';


const Design = () => {
    const caseStudies = [
        {
            title: "Planting",
            subtitle: "UX/UI",
            description: "Guide to gardening, house plant care, and forum for online community of gardeners of all knowledge levels.",
            myRole: "This is a description of my role",
            imageBank: "planting_empathy_map.jpg",
            research: "this is synopsis of research coducted...",
            empathyMap: "planting_empathy_map.jpg",
            persona1: "",
            persona2: "",
            competitveAnalysis: "",
            interviews: "",
            sitemap: "",
            userFlow: "",
            wireframe: "",
            prototype: "",
            testingIteration: "",
            revisedDesign: "",
            completetionSummary: "",


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
                            <img className="project-example" id={project.id} src={require(`../../assets/mockups/${project.imageBank}`)} alt={project.title}
                            ></img>                                
                            <div className='project-details'>
                                <h4>{project.title}</h4>
                                <h5>{project.subtitle}</h5> 
                                <span id="project-links">
                                    <a href={project.research}> RESEARCH </a>
                                </span>  
                                <p>
                                    {project.description}
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