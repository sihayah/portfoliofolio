import React from 'react';
import ScrollTop from '../../components/ScrollTop';
import { Link } from 'react-router-dom';
import './style.css';

const MessageGhost = () => {

    return (
        <section>
                <div className='project-details'>
                        <div className='logo-container'>
                            <img className="logo" id="MessageGhost" src={require(`../../assets/ux/mg_logo.webp`)} alt="MessageGhost">
                            </img>  
                            <h4>MessageGhost</h4>
                         </div>
                     
                    <div className='heading-wrapper'>
                        Research
                    </div>
                    <article className='p'>
                        Initially, a survey collected the thoughts and feelings of a broad group of people aged 25 to 55. AI has captured the interest of many, but some have reservations about its limits. Those most excited with the concept were people who struggled with writing.
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
                            </ul> 
                        </div>                    
                    </div> 
 
                    <div className="pain-point-wrapper">
                        <ul className="pain-point-ul">
                            <h6>Pain points:</h6>
                            <li>
                                Limited resources to grow  plants
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
                        An audit was conducted to compare the usefulness and usability of competing ghostwriting and writing assistant apps. The key competitors based on the desired functionality are Ghostwriter AI and Grammarly. Other apps researched in the audit include Ulysses and Virtual Ghost Writer... 
                        <Link to='/competitiveaudit'>read more</Link>

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
                        The primary user flow brings the user to the composition page. The user begins with onboarding via a "Get Started" button and can choose whether to sign up directly or through a Google or Facebook account. Once signed in, the user reaches their dashboard which contains any previous compositions. From here, they can create new files by entering the composition UI.
                    </article>                          
                    <div>
                        <img className="project-example userflow" src={require(`../../assets/ux/mg_userflow.webp`)}alt="userFlow">
                        </img> 
                    </div>   

                    <div className='heading-wrapper'>
                        Wireframes
                    </div>  
                    <article className='p'>
                        I planned the wireframes' layout for desktop, mobile, and tablet interfaces. The biggest challenge was making all the tools and features with the dashboard and composition appear consistent and intuitive across devices. I compared the UI from many existing online dropboxes and word-processing tools to determine how to organize the desired features.
                    </article>  
                    <div className='extra-room'> 
                        <img className="project-example" src={require(`../../assets/ux/mg_mobile_wireframes.webp`)}alt="wireframe">
                        </img> 
                    </div>   
                    <div className='extra-room'> 
                        <img className="project-example" src={require(`../../assets/ux/mg_desktop_wireframes.webp`)}alt="wireframe">
                        </img> 
                    </div>   
     
                    <div className='heading-wrapper'>
                        Prototype
                    </div>   
                    <div className='extra-room'> 
                    
                        <img className="project-example" src={require(`../../assets/ux/mg_design_system.webp`)}alt="design-system"></img> 
                    </div>   
                    <article className="summary p">
                        As I went through the design process for MessageGhost, I use a lot of transparency and analogous colors to create dimensionality and interest. Soft ellipses of color create a subtle background but also tie the palette together. I customized icons to limit the dependence of functionality on text labels.
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
                    <article className='p'>
                        After the first round of usability test on a lo-fi prototype, I had quite a few insights to build on as iterated the initial layout. One of the criticisms of the first interaction was a feeling of inconsistency between the pages because the complex UI of the composition page made it feel much more "modern" to users. I sought to fix this by modularizing the content of the other pages in a way that reflected the composition page's UI.
                    </article>
                    <br/>
                    <a href="https://xd.adobe.com/view/56238d7b-f7c9-44b5-a8e1-d63a64fd9d55-0370/" target= "_blank" rel= "noreferrer">Click here to interact with the live prototyp desktop flow.</a>  
                    <br/>
                    <a href="https://xd.adobe.com/view/7bdfdf34-7000-4c47-89bb-e1eefd843de0-2e8c/" target= "_blank" rel= "noreferrer">Click here to view the mobile flow.</a> 
                           
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