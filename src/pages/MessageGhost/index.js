import React from 'react';
import ScrollTop from '../../components/ScrollTop';
import './style.css';

const MessageGhost = () => {

    return (
        <section>
                <div className='project-details'>
                    <div className='top-container'>
                        <div className='logo-container'>
                            <img className="project-example logo" id="MessageGhost" src={require(`../../assets/ux/mg_logo.webp`)} alt="MessageGhost">
                            </img>  
                            <h4>MessageGhost</h4>
                            <h5>(UX/UI)</h5> 
                        </div>
                        <article>
                            MessageGhost is a responsive website for the purpose of message composition with an AI auto-complettion feature.
                        </article> 
                    </div>
                   
                    <div className='heading-wrapper'>
                        My Role
                    </div>                  
                    <article className='p'>
                        ...
                    </article>    
                    <div className='heading-wrapper'>
                        Research
                    </div>
                    
                    {/* Persona 1 */}
                    <div className='extra-room persona'>
                        <div className='persona-intro'>
                            <img className="persona-graphic" src={require(`../../assets/ux/mg_persona2.webp`)}alt="personas">
                            </img>  
                            <ul>
                                <li className='persona-name'>Devon Jung</li>
                                <li>(they/them)</li>
                                <li>Age: 27</li>
                                <li>Education: Bachelors</li>
                                <li>Job title: QA Analyst</li>
                                <li>Status: Single</li>
                                <li>Location: Austin, TX</li>
                            </ul>   
                            <div className='persona-quote'>
                            “I’m always looks ways to streamline my productivity. I send e-mails and write reports almost every day. I also have dyslexia which affects grammar and word choice. I sometimes I struggle to get my point across.”
                            </div>
                        </div>
                        <div className='persona-lists'>
                            <div className='list-title-wrapper'><h6>Goals</h6></div>
                            
                            <ul>
                                <li>
                                    increase productivity
                                </li>
                                <li>
                                    spend less time drafting e-mails
                                </li>
                                <li>
                                    broach copmlex topics with care
                                </li>
                                <li>
                                    connect with people efficiently
                                </li>
                            </ul>    <div className='list-title-wrapper'>  <h6>Interests</h6></div>
                          
                            <ul>
                                <li>
                                    new technologies
                                </li>
                                <li>
                                    spending time with family
                                </li>
                                <li>
                                    video games
                                </li>
                                <li>
                                    health and fitness
                                </li>
                            </ul>
                        </div>                    
                    </div> 

                    {/* Persona 2 */}
                    <div className='extra-room persona'>
                        <div className='persona-intro'>
                            <img className="persona-graphic" src={require(`../../assets/ux/mg_persona1.webp`)}alt="personas">
                            </img>  
                            <ul>
                                <li className='persona-name'>Malcolm Anderson</li>
                                <li>(he/him)</li>
                                <li>Age: 35</li>
                                <li>Education: Masters</li>
                                <li>Job title: Assistant Directory of HR</li>
                                <li>SStatus: Married</li>
                                <li>Location: Colorado Springs, CO</li>
                            </ul>   
                            <div className='persona-quote'>
                            “I spend a good deal of my time focused on communicating with people in work and beyond. I don’t want to remove the human element, but I do sometimes tire of writing copy for so many job postings.”
                            </div>
                        </div>
                        <div className='persona-lists'>
                            <div className='list-title-wrapper'><h6>Goals</h6></div>
                            
                            <ul>
                                <li>
                                    better time-management
                                </li>
                                <li>
                                    efficiently create effective job postings
                                </li>
                                <li>
                                    devote more attention to maintaining equity in workplace
                                </li>
                                <li>
                                    devote more time composing messages that address sensitive issues
                                </li>
                            </ul>    <div className='list-title-wrapper'>  <h6>Interests</h6></div>
                          
                            <ul>
                                <li>
                                    investing
                                </li>
                                <li>
                                    politics
                                </li>
                                <li>
                                    meditation/mindfulness
                                </li>
                                <li>
                                    social justice
                                </li>
                            </ul>
                        </div>                    
                    </div> 

                    <article className='p'>
                        User interviews gathered info....
                    </article>  
                    <div className="pain-point-wrapper">
                        <ul className="pain-point-ul">
                            <h6>Pain points:</h6>
                            <li>
                                Limited resources to grow plants
                            </li>
                            <li>
                                Precious little free time
                            </li>
                            <li>
                                Pets/wildlife wreaking havoc on plants
                            </li>
                            <li>
                                Previous negative experiences killing plants
                            </li>
                        </ul>                                    
                    </div>

                    <article className='p'>
                        I conducted a competitive audit  to compare...
                    </article> 

                    <div class="audit-link" >
                        <a href="https://docs.google.com/spreadsheets/d/1shuanvrA8jEe5lFHkDcUVP4lwejfYk0N45C1zJGkND8/edit#gid=2073884517" target= "_blank" rel= "noreferrer">Click here to view the competitve audit in Google Sheets.</a> 
                    </div>

                    <div className='heading-wrapper'>
                        Architecture
                    </div>
                    <div>
                        <img className="project-example sitemap" src={require(`../../assets/ux/mg_sitemap.webp`)}alt="sitemap">
                        </img>
                    </div> 
                    <article className='p'>
                        The navigation...
                    </article>                          
                    <div>
                        <img className="project-example userflow" src={require(`../../assets/ux/mg_userflow.webp`)}alt="userFlow">
                        </img> 
                    </div>   

                    <div className='heading-wrapper'>
                        Wireframing
                    </div>  
                    <article className='p'>
                        Wireframes laid out desktop, mobile, and tablet 
                    </article>  
                    <div className='extra-room'> 
                        <img className="wireframe" src={require(`../../assets/ux/mg_mobile_wireframes.webp`)}alt="wireframe">
                        </img> 
                    </div>   
                    <div className='extra-room'> 
                        <img className="wireframe" src={require(`../../assets/ux/mg_desktop_wireframes.webp`)}alt="wireframe">
                        </img> 
                    </div>   
     
                    <div className='heading-wrapper'>
                        Prototype
                    </div> 
                    <div className='extra-room'> 
                        <img className="design-system" src={require(`../../assets/ux/mg_design_system.webp`)}alt="design-system">
                        </img> 
                    </div>   
                    <article className='p'>
                        The prototype was designed...
                    </article>  
                    <div className='extra-room prototypes'>
                        {/* mobile prototype */}
                        <img className="project-example" src={require(`../../assets/ux/mg_prototype_login.webp`)}alt="prototype">
                        </img> 
                        <img className="project-example" src={require(`../../assets/ux/mg_prototype_dash.webp`)}alt="prototype">
                        </img> 
                        <img className="project-example" src={require(`../../assets/ux/mg_prototype_comp.webp`)}alt="prototype">
                        </img> 
                        <img className="project-example" src={require(`../../assets/ux/mg_prototype_metrics.webp`)}alt="prototype">
                        </img> 
                        {/* desktop prototype */}
                        <img className="project-example" src={require(`../../assets/ux/mg_prototype_desktop_login.webp`)}alt="prototype">
                        </img> 
                        <img className="project-example" src={require(`../../assets/ux/mg_prototype_desktop_dash.webp`)}alt="prototype">
                        </img> 
                        <img className="project-example" src={require(`../../assets/ux/mg_prototype_desktop_comp.webp`)}alt="prototype">
                        </img> 
                    </div>  
                    <a href="https://www.figma.com/proto/kPOzAOly1UEYep7yPG9ne0/prototype?type=design&node-id=626-7028&t=nis7aBnZnprOG0s9-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=626%3A7130" target= "_blank" rel= "noreferrer">Click here to interact with the live prototype.</a>  
                    <article className="summary p">
                    Working on MessageGhost...
                    </article>              
                    {/* <h6>Testing + Iteration</h6>    
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
                    */}
                </div>

                    <br/>
                    <br/>
                    <p className='scrolltop' >
                        <ScrollTop />
                    </p>
                         
        </section>
       
    )
};


export default MessageGhost;