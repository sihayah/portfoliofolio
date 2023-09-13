import React from 'react';
import ScrollTop from '../../components/ScrollTop';
import './style.css';

const Planting = () => {

    return (
        <section>
                <div className='project-details'>
                    <div className='top-container'>
                        <div className='logo-container'>
                            <img className="project-example logo" id="planting" src={require(`../../assets/ux/planting_logo.webp`)} alt="planting">
                            </img>  
                            <h4>Planting</h4>
                            <h5>(UX/UI)</h5> 
                        </div>
                        <article>
                            Planting is a concept project for a gardening app geared primarily towards newer gardeners. By design, it is a living farmer’s almanac, enriching the experience of growing plants with a wealth of tips and techniques. Thus, it eliminates hours spent planning and researching the plant cultivars and methods best suited for a given climate zone and garden type, as well as, the methods require to grow andt nurture them.
                        </article> 
                    </div>
                   
                    <div className='heading-wrapper'>
                        My Role
                    </div>                  
                    <article className='p'>
                        To breath life into this new concept for a mobile gardening app, I started by conducting user research which fueled the ideation process. I tailored a logo to suit the direction of apps aesthetic, planned the site’s information architecture and user interaction, produced wireframes, and, finally, generated a prototype, and refined it with usability testing.
                    </article>    
                    <div className='heading-wrapper'>
                        Research
                    </div>
                    
                    {/* Persona 1 */}
                    <div className='extra-room persona'>
                        <div className='persona-intro'>
                            <img className="persona-graphic" src={require(`../../assets/ux/persona_graphic_1.webp`)}alt="personas">
                            </img>  
                            <ul>
                                <li className='persona-name'>Alex Gonzalez</li>
                                <li>(they/them)</li>
                                <li>Age: 32</li>
                                <li>Education: BS in Accounting</li>
                                <li>Job title: Accountant</li>
                                <li>Status: Single</li>
                                <li>Location: St. Louis, MO</li>
                            </ul>   
                            <div className='persona-quote'>
                            "I am learning to garden in my free time to relieve the stress of work and being in a bustling city. I have had some success, but, also, a fair amount of disappointments with my plot in the local community garden." 
                            </div>
                        </div>
                        <div className='persona-lists'>
                            <div className='list-title-wrapper'><h6>Goals</h6></div>
                            
                            <ul>
                                <li>
                                    learn more about gardening methods to optimize growing projects
                                </li>
                                <li>
                                    grow some my own food for better freshness and food quality
                                </li>
                                <li>
                                    relieve stress and increase mental health by feeling closer to nature
                                </li>
                                <li>
                                    deal with any hiccups like pests, fungal infections, and diseases
                                </li>
                                <li>
                                    learn about invasive species to grow responsibly
                                </li>
                            </ul>  
                        </div>                    
                    </div> 

                    {/* Persona 2 */}
                    <div className='extra-room persona'>
                        <div className='persona-intro'>
                            <img className="persona-graphic" src={require(`../../assets/ux/persona_graphic_2.webp`)}alt="personas">
                            </img>  
                            <ul>
                                <li className='persona-name'>Louis LeBlanc</li>
                                <li>(he/him)</li>
                                <li>Age: 55</li>
                                <li>Education: DDS</li>
                                <li>Job title: Dentist</li>
                                <li>SStatus: Divorced, 2 kids</li>
                                <li>Location: Baton Rouge, LA</li>
                            </ul>   
                            <div className='persona-quote'>
                                “I’ve always been fascinated by plants. I’ve got a few house plants. I’d like more in depth knowledge, for instance, how to propagate.”
                            </div>
                        </div>
                        <div className='persona-lists'>
                            <div className='list-title-wrapper'><h6>Goals</h6></div>
                            
                            <ul>
                                <li>
                                    expand knowledge of botany
                                </li>
                                <li>
                                    learn how to propagate
                                </li>
                                <li>
                                    keep house current house plants properly healthy and nourished
                                </li>
                                <li>
                                    grow unique/unusual plants
                                </li>
                                <li>
                                    develop knowledge of more advance botany techniques, like plant training or even how to set-up a greenhouse
                                </li>
                            </ul>  
                        </div>                    
                    </div> 

                    <article className='p'>
                        User interviews cast a wide net to gather information from plant parents and gardeners with regard to their thoughts and feelings on their personal experience with growing plants. The research conducted included surveys, a competitive audit, and a usablity study.
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
                        I conducted a competitive audit  to compare the usefulness and usability of competing plant care apps. The key competitors examined were the Blossom and Planta mobile apps. The Blossom App is exceptionally visually engaging with motion graphics and beautiful photos. The features for adding plants and accessing care data are very easy to use and well-organized. Planta is a somewhat simpler, cleaner design with darker tones, and better contrast. It feels very modern and somewhat more direct. Similar to Blossom, the user can add plants and access care information, which is set-up in bullet points and, therefore, easy to scan quickly. Planta markets itself as an efficient solution to plant care for individuals who need reminders to keep their plants healthy with room for the customization of the user’s experience based on their goals and needs. Overall the point is simplifying care, so the user doesn’t have to worry. Blossom markets itself similarly– a glorified watering reminder app with more complex features for those who wish to go deeper. The user can create solutions for various goals through the Blossom app, including identification, diagnosis and treatment for sick plants, and reminders for watering and fertilization.I reached the conclusion that a new app could create location/climate customization options, provide recommendations instead of the user having to solely use the search function to discover plant cultivars, provide more language and audio tools, and create different modes for visibility.
                    </article> 

                    <div class="audit-link" >
                        <a href="https://docs.google.com/spreadsheets/d/1shuanvrA8jEe5lFHkDcUVP4lwejfYk0N45C1zJGkND8/edit#gid=2073884517" target= "_blank" rel= "noreferrer">Click here to view the competitve audit in Google Sheets.</a> 
                    </div>

                    <div className='heading-wrapper'>
                        Architecture
                    </div>
                    <div>
                        <img className="project-example sitemap" src={require(`../../assets/ux/sitemap.webp`)}alt="sitemap">
                        </img>
                    </div> 
                    <article className='p'>
                        The navigation adheres to a very simple design that echoes familiar patterns. The Site Map provides an overview of the Planting app. The User Flow illustrates an example of how a user might use the search function in the Planting app.
                    </article>                          
                    <div>
                        <img className="project-example userflow" src={require(`../../assets/ux/userflow.webp`)}alt="userFlow">
                        </img> 
                    </div>   

                    <div className='heading-wrapper'>
                        Wireframing
                    </div>  
                    <article className='p'>
                        With the help of the architecture set in place through the Site Map and User Flow, I create a set of wireframes that illustrate how the user can move through the core features in the Planting app. My initial design included bare bones navigation occurring solely through the hamburger menu. This later iteration includes buttons affixed to the bottom right to make it easier to hop from page to page in mobile.
                    </article>  
                    <div className='extra-room'> 
                        <img className="wireframe" src={require(`../../assets/ux/wireframe.webp`)}alt="wireframe">
                        </img> 
                    </div>   
     
                    <div className='heading-wrapper'>
                        Prototype
                    </div> 
                    <div className='extra-room'> 
                        <img className="design-system" src={require(`../../assets/ux/planting_design_system.webp`)}alt="design-system">
                        </img> 
                    </div>   
                    <article className='p'>
                        In the planting Home Screen, the user is presented with the most important information, their daily plant/garden care tasks, as well as a seasonal daily tip to get the gears turning. Upon navigating to the calendar, the user is present with a guide to gardening making recommendations, organized by date, as well as the forecast for their location. Their profile page contains the basic data the app uses to customize recommendations as well as link to alter setting and preferences. When the user navigates to the My Garden page, they can view the plants they have saved to their garden, plants recommended to them by the app, and their daily plant care tasks. If they select tasks, the user is present with checklist of items to complete for the care of their saved plants and general garden upkeep.
                    </article>  
                    <div className='extra-room prototypes'>
                        <img className="project-example" src={require(`../../assets/ux/planting_prototype_home.webp`)}alt="prototype">
                        </img> 
                        <img className="project-example" src={require(`../../assets/ux/planting_prototype_mygarden.webp`)}alt="prototype">
                        </img> 
                        <img className="project-example" src={require(`../../assets/ux/planting_prototype_search.webp`)}alt="prototype">
                        </img> 
                    </div>  
                    <a href="https://www.figma.com/proto/kPOzAOly1UEYep7yPG9ne0/prototype?type=design&node-id=626-7028&t=nis7aBnZnprOG0s9-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=626%3A7130" target= "_blank" rel= "noreferrer">Click here to interact with the live prototype.</a>  
                    <article className="summary p">
                    Working on the Planting app helped me hone the ability to translate thorough research into usability. I focused on the key features of the app thus far, but I plan to explore further features and more complex functionality like integrating smart phone cameras and notifications. This project helped to solidify my approach to UX. I always seek to create the most simple and efficient structures possible in an environment of inspiring and delightful design.
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


export default Planting;