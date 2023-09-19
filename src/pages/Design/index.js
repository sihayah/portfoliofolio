import React from 'react';
import { Link } from 'react-router-dom';
import '../Design/style.css';

const Design = () => {
    const caseStudies = [
        {
            title: "MessageGhost",
            image: "mg_prototype_comp.webp",
            description:"MessageGhost is a message composition app with an AI auto-completion that works to capture voice and tone.",
            role: ['UX/UI', 'UX Research'],
            roleDetails: "I ran a competitive audit and user research via surveys. After synthesizing insights from that research, I outlined the architecture for the app and then created wireframes and prototypes. I also ran usability tests and iterated the prototype.",
            location:"/messageghost",
            protolink:"https://xd.adobe.com/view/56238d7b-f7c9-44b5-a8e1-d63a64fd9d55-0370/",
            id: "messageghost"
        },
        {
            title: "Planting",
            image:"planting_prototype_home.webp",
            description: "Planting is a gardening app and farmer’s almanac.",            role: ['UX/UI', 'UX Research'],
            roleDetails: "I ran a competitive audit and user research via surveys. After synthesizing insights from that research, I outlined the architecture for the app and then created wireframes and prototypes. I also ran usability tests and iterated the prototype.",
            location:"/planting",
            protolink:"https://www.figma.com/proto/kPOzAOly1UEYep7yPG9ne0/prototype?type=design&node-id=715-185&t=xHqmOftBfgUXlz49-1&scaling=min-zoom&page-id=715%3A184&starting-point-node-id=715%3A247&mode=design",
            id: "planting"
        },
        {
            title: "Blahblahyaya",
            image: "bbyy_prototype_home.webp",
            description: "B2C Ecommerce app for a pottery and home goods shop.",            role: ['UX/UI', 'UX Research'],
            roleDetails: "I performed research, planned architecture, and executed design for branding and UI.",
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
                                <div>{project.description} </div>  
                                <h4 className='myrole'>MY ROLE:</h4>
                                <div> <span>{project.role.join(", ")}</span></div>
                                <div>{project.roleDetails}</div>
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