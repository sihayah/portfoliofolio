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
                            MessageGhost is a responsive website for the purpose of message composition with an AI auto-complettion feature that mimics the voice of the user based on previous inputs.
                        </article> 
                    </div>
                   
                    <div className='heading-wrapper'>
                        My Role
                    </div>                  
                    <article className='p'>
                        I read an article about data scraping and writers having their voices plagarized. I wanted to create a product that would turn the negative into a positive. The MessageGhost user can input their own writing and the App with recreate their vocie. 
                        I executed the entire process from ideation and research through testing. 
                    </article>    
                    <div className='heading-wrapper'>
                        Research
                    </div>
                    <article className='p'>
                       Initially, a survey collected the thoughts and feelings of a broad group of people, ages ranging from 25 to 55. AI has captured the interest of many, but some have reservations with regard to its limits. Those most excited with the concept were people who struggle with writing.
                    </article>  
                    
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
                        I conducted a competitive audit  and found a few comparable products on the market. The most compelling were Grammarly and a deprecated App called GhostWriter AI. These two products lay on opposite ends of the sepctrum in terms of complexity. GhostWriter AI was fairly bare bones were as Grammarly offers a lot of features. Grammarly is most focuse on improving an existing piece of writing. I decided to build a product that would got a step beyond that and aide the generation of content.
                    </article> 

                    <div class="audit-link" >
                        <a href="https://docs.google.com/spreadsheets/d/1U-1sWwxLerRUfxic_mxiT71cQahAJOn06O3LnKpHFZQ/edit?usp=sharing&resourcekey=0-OnedINv0iRtGU9fZ7rBzLg" target= "_blank" rel= "noreferrer">Click here to view the competitve audit in Google Sheets.</a> 
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
                        In the wireframes, I planned the layout desktop, mobile, and tablet interfaces. The biggest challenge was making all the tools and features with the dashboard and composition appear consistent and intuitive. I compared the UI from many existing online dropboxes and word processing tools to figure out how to organize all of the desired features.
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
                        After the first round of usuablity tests were run on a lo-fi prototype, I had quite a few insights to build on as iterated the intial layout. One of the critcisms of the first interation was a feeling inconsistency between the pages because the complex UI of the composition page made it feel much more "modern" to users. I sought to fix this by modularizing the content the other pages it a way that reflected the composition page's UI.
                    </article>  
                    <div className='extra-room prototypes'>
                        {/* mobile prototype */}
                        <div className='mobile-prototypes'>
                            <img className="project-example" src={require(`../../assets/ux/mg_prototype_login.webp`)}alt="prototype">
                            </img> 
                            <img className="project-example" src={require(`../../assets/ux/mg_prototype_dash.webp`)}alt="prototype">
                            </img> 
                            <img className="project-example" src={require(`../../assets/ux/mg_prototype_comp.webp`)}alt="prototype">
                            </img> 
                            <img className="project-example" src={require(`../../assets/ux/mg_prototype_metrics.webp`)}alt="prototype">
                            </img>                             
                        </div>

                        {/* desktop prototype */}
                        <div className='desktop-prototypes'>
                            <img className="project-example" src={require(`../../assets/ux/mg_prototype_desktop_login.webp`)}alt="prototype">
                            </img> 
                            <img className="project-example" src={require(`../../assets/ux/mg_prototype_desktop_dash.webp`)}alt="prototype">
                            </img> 
                            <img className="project-example" src={require(`../../assets/ux/mg_prototype_desktop_comp.webp`)}alt="prototype">
                            </img>     
                        </div>

                    </div>  
                    <a href="https://xd.adobe.com/view/dc68e5c7-57bf-4edb-af6b-1e7dbc578c45-893b/?fullscreen" target= "_blank" rel= "noreferrer">Click here to interact with the live prototyp desktop flow.</a>  
                    <a href="https://xd.adobe.com/view/7d5f631a-836a-4ee2-b79c-10c4ddcb30ff-280c/?fullscreen" target= "_blank" rel= "noreferrer">Click here to view the mobile flow.</a>  
                    <article className="summary p">
                    As I went through the design process for MessageGhost, I realized for the first time that my approach to design, even for the web, is still "painterly" as my professors from back in the day would say. I would lay out a rough idea of what I wanted to create and build layers upon that draft. I use a lot of transparency and analogous colors to create dimensionality and interest. Soft ellipses of color create a subtle background but also tie the palette together.
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