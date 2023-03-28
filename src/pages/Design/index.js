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
            myRole: "This is a description of my role...............................................................................................................................................................................................................................................................",
            imageBank: "planting_empathy_map.jpg",
            research: "this is synopsis of research coducted..................................................................................................................................................................................................................................................................",
            empathyMap: "planting_empathy_map.jpg",
            empathyCopy: "research... blah blah blah...............................................................................................................................................................................................................................................................",
            persona1: "X",
            persona2: "X",
            competitveAnalysisCopy: "about competitive analysis...............................................................................................................................................................................................................................................................",
            competitveAnalysis: "X",
            interviews: "...",
            sitemapCopy: "about sitemap.................................................................................................................................................................................................................................................................",
            sitemap: "X",
            userFlowCopy: "about user flow..................................................................................................................................................................................................................................................................",
            userFlow: "X",
            wireframeCopy: "about wireframe...............................................................................................................................................................................................................................................................",
            wireframe: "X",
            prototypeCopy: "about prototype..................................................................................................................................................................................................................................................................",
            prototype: "X",
            testingIterationCopy: "about testing and iteration...............................................................................................................................................................................................................................................................",
            testingIteration: "X",
            revisedDesign: "X",
            completetionSummary: "this why i did all the things...............................................................................................................................................................................................................................................................",
            id: "planting"
        }

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
                            <div className='project-details'>
                                <h4>{project.title}</h4>
                                <h5>{project.subtitle}</h5> 
                                <p>
                                    {project.description}
                                </p> 
                                <img className="project-example" id={project.id} src={require(`../../assets/mockups/${project.imageBank}`)} alt={project.title}>
                                </img>  
                                <h6>My Role</h6>  
                                <p>
                                    {project.myRole}
                                </p>    
                                <h6>Research</h6>
                                <p>
                                    {project.research}
                                </p>  
                                <div>
                                    {project.empathyMap}
                                </div> 
                                <p>
                                    {project.empathyCopy}
                                </p>     
                                <div>
                                    {project.persona1}
                                </div> 
                                <div>
                                    {project.persona2}
                                </div> 
                                <p>
                                    {project.competitveAnalysisCopy}
                                </p> 
                                <div>
                                    {project.competitveAnalysis}
                                </div> 
                                <h6>Architecture</h6>  
                                <p>
                                    {project.sitemapCopy}
                                </p>  
                                <div>
                                    {project.sitemap}
                                </div> 
                                <p>
                                    {project.userFlowCopy}
                                </p>                           
                                <div>
                                    {project.userFlow}
                                </div>                          
                                <h6>Wireframing</h6>  
                                <p>
                                    {project.wireframeCopy}
                                </p>  
                                <div>
                                    {project.wireframe}
                                </div>              
                                <h6>Prototype</h6>  
                                <p>
                                    {project.prototypeCopy}
                                </p>  
                                <div>
                                    {project.prototype}
                                </div>             
                                <h6>Testing + Iteration</h6>    
                                <p>
                                    {project.testingIterationCopy}
                                </p>  
                                <div>
                                    {project.testingIteration}
                                </div>            
                                <h6>Final Design</h6>  
                                <div>
                                    {project.revisedDesign}
                                </div>     
                                <p>
                                    {project.completetionSummary}
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