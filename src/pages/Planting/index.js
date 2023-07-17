import React from 'react';
import ScrollTop from '../../components/ScrollTop';
import '../Planting/style.css';

const Planting = () => {

    return (
        <section>
                <div className='project-details'>
                    <div className="centerImg">
                        <img className="project-example logo" id="planting" src={require(`../../assets/ux/logo_dirt.webp`)} alt="planting">
                        </img>  
                    </div>
                    <div className='top-cotainer'>
                        <div>
                            <h4>Planting</h4>
                        <h5>(UX/UI)</h5> 
                        </div>
                         
                    <article>
                        Planting is a concept project for a gardening app geared primarily towards newer gardeners. By design, it is a living farmer’s almanac, enriching the experience of growing plants with a wealth of tips and techniques. Thus, it eliminates hours spent planning and researching the plant cultivars and methods best suited for a given climate zone and garden type, as well as, the methods require to grow andt nurture them. Planting helps gardeners to what they do best— get their hands dirty, grow their own food, and enhance their environment.
                    </article> 
                    </div>
                   
                    <h6>
                        My Role
                    </h6>  
                    <article>
                        To breath life into this new concept for a mobile gardening app, I started by conducting user research which fueled the ideation process. I tailored a logo to suit the direction of apps aesthetic, planned the site’s information architecture and user interaction, produced wireframes, and, finally, generated a prototype, and refined it with usability testing.
                    </article>    
                    <h6>Research</h6>
                    <div className='extra-room'>
                        <img className="project-example" src={require(`../../assets/ux/personas.webp`)}alt="personas">
                        </img> 
                    </div> 
                    <article>
                        User interviews cast a wide net to gather information from plant parents and gardeners with regard to their thoughts and feelings on their personal experience with growing plants. The research conducted included surveys, a competitive audit, and a usablity study.
                    </article>  
                    <div className="paintPointWrapper">
                        <ul className="paintPointsUl">
                            Pain points:
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

                    <article>
                        I conducted a competitive audit  to compare the usefulness and usability of competing plant care apps. The key competitors examined were the Blossom and Planta mobile apps. The Blossom App is exceptionally visually engaging with motion graphics and beautiful photos. The features for adding plants and accessing care data are very easy to use and well-organized. Planta is a somewhat simpler, cleaner design with darker tones, and better contrast. It feels very modern and somewhat more direct. Similar to Blossom, the user can add plants and access care information, which is set-up in bullet points and, therefore, easy to scan quickly. Planta markets itself as an efficient solution to plant care for individuals who need reminders to keep their plants healthy with room for the customization of the user’s experience based on their goals and needs. Overall the point is simplifying care, so the user doesn’t have to worry. Blossom markets itself similarly– a glorified watering reminder app with more complex features for those who wish to go deeper. The user can create solutions for various goals through the Blossom app, including identification, diagnosis and treatment for sick plants, and reminders for watering and fertilization.I reached the conclusion that a new app could create location/climate customization options, provide recommendations instead of the user having to solely use the search function to discover plant cultivars, provide more language and audio tools, and create different modes for visibility.
                    </article> 

                    <div class="auditLink" >
                        <a href="https://docs.google.com/spreadsheets/d/1shuanvrA8jEe5lFHkDcUVP4lwejfYk0N45C1zJGkND8/edit#gid=2073884517" target= "_blank" rel= "noreferrer">Click here to view the competitve audit in Google Sheets.</a> 
                    </div>

                    <h6>Architecture</h6>  
                    <div>
                        <img className="project-example" src={require(`../../assets/ux/sitemap.webp`)}alt="sitemap">
                        </img>
                    </div> 
                    <article>
                        The navigation adheres to a very simple design that echoes familiar patterns. The Site Map provides an overview of the Planting app. The User Flow illustrates an example of how a user might use the search function in the Planting app.
                    </article>                          
                    <div>
                        <img className="project-example" src={require(`../../assets/ux/userflow.webp`)}alt="userFlow">
                        </img> 
                    </div>     
                                         
                    <h6>Wireframing</h6>  
                    <article>
                        With the help of the architecture set in place through the Site Map and User Flow, I create a set of wireframes that illustrate how the user can move through the core features in the Planting app. My initial design included bare bones navigation occurring solely through the hamburger menu. This later iteration includes buttons affixed to the bottom right to make it easier to hop from page to page in mobile.
                    </article>  
                    <div className='extra-room'> 
                        <img className="project-example" src={require(`../../assets/ux/wireframe.webp`)}alt="wireframe">
                        </img> 
                    </div>        

                    <h6>Prototype</h6>  
                    <article>
                        In the planting Home Screen, the user is presented with the most important information, their daily plant/garden care tasks, as well as a seasonal daily tip to get the gears turning. Upon navigating to the calendar, the user is present with a guide to gardening making recommendations, organized by date, as well as the forecast for their location. Their profile page contains the basic data the app uses to customize recommendations as well as link to alter setting and preferences. When the user navigates to the My Garden page, they can view the plants they have saved to their garden, plants recommended to them by the app, and their daily plant care tasks. If they select tasks, the user is present with checklist of items to complete for the care of their saved plants and general garden upkeep.
                    </article>  
                    <div className='extra-room'>
                        <img className="project-example" src={require(`../../assets/ux/planting_prototype.webp`)}alt="prototype">
                        </img> 
                    </div>  
                    <a href="https://www.figma.com/proto/kPOzAOly1UEYep7yPG9ne0/prototype?type=design&node-id=626-7028&t=nis7aBnZnprOG0s9-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=626%3A7130" target= "_blank" rel= "noreferrer">Click here to interact with the live prototype.</a>  
                    <article className="summary">
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