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
                        Planting is a gardening app and farmer’s almanac.
                        </article> 
                    </div>
                   
                    <div className='heading-wrapper'>
                        My Role
                    </div>                  
                    <article className='p'>
                        I conducted user research and competitive analysis, planned the site’s user flows and information architecture, produced wireframes, generated prototypes, and refined them via usability testing.
                    </article>    
                    <div className='heading-wrapper'>
                        Problem Statement
                    </div>                  
                    <article className='p'>
                        Our user is a person who wants to grow plants either indoors or in a garden who needs to access care and gardening information as well as tools to help maintain their plants because plant maintenance is complex.
                    </article>    
                    <div className='heading-wrapper'>
                        Research
                    </div>

                    <article className='p'>
                        User interviews cast a wide net to gather information from plant owners and gardeners who shared their thoughts and feelings about their journey growing plants indoors and in larger gardening formats.
                    </article>  
                    
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
                        I conducted a competitive audit to compare the usefulness and usability of the plant care and farmer's almanac apps on the market. The key competitors examined were the Blossom and Planta mobile apps. The Blossom App is visually engaging, with motion graphics and attractive photos. The features for adding plants and accessing care data are well-organized and straightforward. Planta has a more direct and modern feeling UI with darker tones and higher contrast. Like Blossom, the user can add plants and access care information, which they've laid out in easily scannable bullet points. Both mobile apps include a camera feature for identifying and diagnosing plants. A new app could create location/climate customization options, provide recommendations instead of the user solely using the search function to discover plant cultivars, provide more language and audio tools, and create different modes for visibility.
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
                        This app adheres to a hierarchical structure that allows the user to enter four primary user flows from the navigation bar. Some flows have similar endpoints, but each follows a unique task. The search lets the user find plants in the database to add to myGarden. From myGarden plant data is selectable, and tasks can be added or edited for each saved plant. The camera allows for identifying and diagnosing plants via photos matched to the database. The calendar stores tips and provides access to pre-set tasks by date.
                    </article>                          
                    <div>
                        <img className="project-example userflow" src={require(`../../assets/ux/userflow.webp`)}alt="userFlow">
                        </img> 
                    </div>   

                    <div className='heading-wrapper'>
                        Wireframes
                    </div>  
                    <article className='p'>
                        With the help of the architecture set in place through the Site Map and user flows, I created a set of wireframes that illustrate the core features. My initial design included bare-bones navigation occurring solely through the hamburger menu. The later iteration includes buttons affixed to the bottom of the screen to make it easier to hop from page to page in a mobile environment.
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
                        I designed the overall appearance of this app, keeping in mind the prominence of the photos from the database. The subtle texture motifs of soil and flora comprise the primary visual interest, reinforcing the brand with an earthy color palette. The final product echoes the dynamic features explored in my research and introduces nuanced functionality. When I started this project, I underestimated the depth of plant care apps. Each feature that I fleshed out required careful consideration as to how it would be integrated into the structure and accessed by the user. The most challenging part was creating all these channels without overwhelming the UI.
                        <br/>
                        In the future, visual customization features such as dark mode and large text for accessibility will be explored.
                    </article>  
                    <div className='extra-room prototypes'>
                        <img className="project-example" src={require(`../../assets/ux/planting_prototype_home.webp`)}alt="prototype">
                        </img> 
                        <img className="project-example" src={require(`../../assets/ux/planting_prototype_mygarden.webp`)}alt="prototype">
                        </img> 
                        <img className="project-example" src={require(`../../assets/ux/planting_prototype_search.webp`)}alt="prototype">
                        </img> 
                    </div>  
                    <a href="https://www.figma.com/proto/kPOzAOly1UEYep7yPG9ne0/prototype?type=design&node-id=715-185&t=xHqmOftBfgUXlz49-1&scaling=min-zoom&page-id=715%3A184&starting-point-node-id=715%3A247&mode=design" target= "_blank" rel= "noreferrer">Click here to interact with the live prototype.</a>             
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