import React from 'react';
import { Link } from 'react-router-dom';
import '../Design/style.css';

const Design = () => {
    const caseStudies = [
        {
            title: "MessageGhost",
            image: "mg_prototype_comp.webp",
            role: ['UX/UI', 'UX Research'],
            description:"MessageGhost is a message composition app with an AI auto-completion that works to capture voice and tone.",
            location:"/messageghost",
            id: "messageghost"
        },
        {
            title: "Planting",
            image:"planting_prototype_home.webp",
            role: ['UX/UI', 'UX Research'],
            description: "Planting is a gardening app and farmer’s almanac.",
            location:"/planting",
            id: "planting"
        },
        {
            title: "Blahblahyaya",
            image: "bbyy_prototype_home.webp",
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
                        <div className='project-inner-container'>
                            <div className='project-image'>
                                <img className="dev-project-example" id={project.id} src={require(`../../assets/ux/${project.image}`)} alt={project.image}
                            ></img>   
                            </div>
                            <div className='project-content'>
                                <div className='project-title'>{project.title}</div>
                                <div> <span>{project.role.join(", ")}</span></div>
                                <div>{project.description} </div>  
                           <div className='link-container'>
                                    <Link to={project.location}>
                                        view case study
                                    </Link>
                                    <Link to={project.location}>
                                        view prototype
                                    </Link>
                            </div>                                    
                            </div>
                           
                        </div>

                    ))}    
                </div>

                
             
        </section>
       
    )
};


export default Design;