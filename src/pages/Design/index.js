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
            myRole: "This is a description of my role.......",
            logo: "smiley.png",
            research: "this is synopsis of research coducted........",
            empathyMap: "planting_empathy_map.jpg",
            empathyCopy: "research... blah blah blah..........................................",
            personas: "personas.jpg",
            competitveAuditCopy: "about competitive audit.....................................",
            competitveAudit: "competitive_audit.jpg",
            interviews: "...",
            sitemapCopy: "about sitemap........",
            sitemap: "sitemap.jpg",
            userFlowCopy: "about user flow..........",
            userFlow: "userflow.jpg",
            wireframeCopy: "about wireframe...",
            wireframe: "wireframe.jpg",
            prototypeCopy: "about prototype......",
            prototype: "X",
            testingIterationCopy: "about testing and iteration.......",
            testingIteration: "X",
            revisedDesign: "X",
            completetionSummary: "this why i did all the things...",
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
                        <span id="disappearingDashes">//////////////////////////////////////////////////////////////////</span>
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
                                <div className="centerImg">
                                    <img className="project-example" id={project.id} src={require(`../../assets/mockups/${project.logo}`)} alt={project.title}>
                                </img>  
                                </div>
                                
                                <h6>
                                    My Role
                                    </h6>  
                                <p>
                                    {project.myRole}
                                </p>    
                                <h6>Research</h6>
                                <p>
                                    {project.research}
                                </p>  
                                <div  className="centerImg">
                                <img className="project-example" id={project.id} src={require(`../../assets/mockups/${project.empathyMap}`)}alt="empathy map">
                                </img>  
                                </div> 
                                <p>
                                    {project.empathyCopy}
                                </p>     
                                <div className="centerImg">
                                    <img className="project-example" id={project.id} src={require(`../../assets/mockups/${project.personas}`)}alt="peronas">
                                    </img>  
                                </div> 
                                <p>
                                    {project.competitveAuditCopy}
                                </p> 
                                <div className="centerImg">
                                    <img className="project-example" id={project.id} src={require(`../../assets/mockups/${project.competitveAudit}`)}alt="competitive audit">
                                    </img>  
                                </div> 
                                <h6>Architecture</h6>  
                                <p>
                                    {project.sitemapCopy}
                                </p>  
                                <div className="centerImg">
                                    <img className="project-example" id={project.id} src={require(`../../assets/mockups/${project.sitemap}`)}alt="sitemap">
                                    </img>  
                                </div> 
                                <p>
                                    {project.userFlowCopy}
                                </p>                           
                                <div className="centerImg">
                                    <img className="project-example" id={project.id} src={require(`../../assets/mockups/${project.userFlow}`)}alt="user flow">
                                    </img>  
                                </div>                          
                                <h6>Wireframing</h6>  
                                <p>
                                    {project.wireframeCopy}
                                </p>  
                                <div className="centerImg">
                                    <img className="project-example" id={project.id} src={require(`../../assets/mockups/${project.wireframe}`)}alt="wire frame">
                                    </img>  
                                </div>              
                                <h6>Prototype</h6>  
                                <p>
                                    {project.prototypeCopy}
                                </p>  
                                <div className="centerImg">
                                    {project.prototype}
                                </div>             
                                <h6>Testing + Iteration</h6>    
                                <p>
                                    {project.testingIterationCopy}
                                </p>  
                                <div className="centerImg">
                                    {project.testingIteration}
                                </div>            
                                <h6>Final Design</h6>  
                                <div className="centerImg">
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