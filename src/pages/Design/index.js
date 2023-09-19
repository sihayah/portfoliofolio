import React from 'react';
import { Link } from 'react-router-dom';
import '../Design/style.css';

const Design = () => {
    const caseStudies = [
        {
            title: "MessageGhost",
            role: ['UX/UI', 'UX Research'],
            description:"MessageGhost is a message composition app with an AI auto-completion that works to capture voice and tone.",
            location:"/messageghost",
            id: "messageghost"
        },
        {
            title: "Planting",
            role: ['UX/UI', 'UX Research'],
            description: "Planting is a gardening app and farmer’s almanac.",
            location:"/planting",
            id: "planting"
        },
        {
            title: "Blahblahyaya",
            role: ['UX/UI', 'UX Research'],
            description: "B2C Ecommerce app for a pottery and home goods shop.",
            location: "/bbyy",
            id: "bbyy"
        },
    ]

    return (
        <section className="portfolio">
                <div className='title'>
                    Case Studies:
                </div>    
                
            
                
                <div className="project-container">
                    {caseStudies.map ((project) => (     
                            <div className='link-outer-container'>   
                                <Link to={project.location}>
                                    <div className='link-inner-container'>
                                        {project.title}
                                        <span>{project.role.join(", ")}</span> 
                                    </div>
                                        
                                </Link>
                            </div>
                    ))}    
                </div>

                
             
        </section>
       
    )
};


export default Design;