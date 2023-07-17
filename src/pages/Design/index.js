import React from 'react';
import { Link } from 'react-scroll';
import { Link as Linkit} from 'react-router-dom';
import ScrollTop from '../../components/ScrollTop';
import '../Design/style.css';

const Design = () => {
    const caseStudies = [
        {
            title: "Planting",
            description: "Planting is a concept project for a gardening app geared primarily towards newer gardeners...",
            logo: "logo_dirt.webp",
            location:"/planting",
            id: "planting"
        },
        {
            title: "Blahblahyaya",
            description: "This is an online shop for handmade, functional and sculptural pottery and various other home goods...",
            logo: "bbyy_logo_redviolet.webp",
            location: "/bbyy",
            id: "bbyy"
        }
    ]

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
                            <div className='project-details'>
                                <div>
                                        <img className="project-example logo" id={project.id} src={require(`../../assets/ux/${project.logo}`)} alt={project.title}>
                                        </img>  
                                </div>

                                <div>
                                    <h4>{project.title}</h4>
                                    <p>
                                        {project.description}
                                    </p>                
                                    <p className="case-study-link">
                                        <Linkit to={project.location}>
                                            click here to see more
                                        </Linkit>
                                    </p>                 
                                </div>
                            </div>
                        </div>
                    ))}    
                </div>

                <div className= 'mobile-scroll-top'>
                    <br/>
                    <br/>
                    <ScrollTop />
                </div>
                
             
        </section>
       
    )
};


export default Design;