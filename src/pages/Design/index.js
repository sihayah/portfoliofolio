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
            protolink:"https://xd.adobe.com/view/56238d7b-f7c9-44b5-a8e1-d63a64fd9d55-0370/",
            id: "messageghost"
        },
        {
            title: "Planting",
            image:"planting_prototype_home.webp",
            role: ['UX/UI', 'UX Research'],
            description: "Planting is a gardening app and farmer’s almanac.",
            location:"/planting",
            protolink:"https://www.figma.com/proto/kPOzAOly1UEYep7yPG9ne0/prototype?type=design&node-id=715-185&t=xHqmOftBfgUXlz49-1&scaling=min-zoom&page-id=715%3A184&starting-point-node-id=715%3A247&mode=design",
            id: "planting"
        },
        {
            title: "Blahblahyaya",
            image: "bbyy_prototype_home.webp",
            role: ['UX/UI', 'UX Research'],
            description: "B2C Ecommerce app for a pottery and home goods shop.",
            location: "/bbyy",
            protolink:"https://www.figma.com/proto/Th48j5ohvsGSj1p1h3neBq/prototype?node-id=2-152&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A100",
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
                                    <Link to={project.protolink}>
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