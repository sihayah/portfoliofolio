import React from 'react';
import { Link } from 'react-router-dom';
import '../Design/style.css';

const Design = () => {
    const caseStudies = [
        {
            title: "MessageGhost",
            role: ['UX/UI', 'UX Research'],
            location:"/messageghost",
            id: "messageghost"
        },
        {
            title: "Planting",
            role: ['UX/UI', 'UX Research'],
            location:"/planting",
            id: "planting"
        },
        {
            title: "Blahblahyaya",
            role: ['UX/UI', 'UX Research'],
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