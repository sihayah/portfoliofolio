import React from 'react';
import ScrollTop from '../../components/ScrollTop';
import '../Bbyy/style.css';

const Bbyy = () => {

    return (
        <section>
            <div className='project-details'>
                <div className='top-container'>                        
                <div className='logo-container'>
                            <img className="project-example logo" id="bbyy" src={require(`../../assets/ux/bbyy_logo.webp`)} alt="planting">
                            </img>  
                            <h4>Blahblahyaya</h4>
                            <h5>(UX/UI)</h5> 
                        </div>
                </div>

                <div className='heading-wrapper my-role'>
                    My Role
                </div>
                <article className='p'>
                    I performed research, planned architecture, and executed design for branding and UI.
                </article>    
                <div className='heading-wrapper'>
                    Problem Statement
                </div>
                <article className='p'>
                    Our user is an online shopper who seeks to purchase high-quality home goods who needs a resource that will provide an easy shopping experience with accurate product descriptions because they enjoy shopping online and decorating their home.
                </article>    

                <div className='heading-wrapper'>
                       Research
                </div>
                <article className='p'>
                    Foundational data for this project was collected through a survey of online shoppers. Personas were modeled upon this sample of data.
                </article> 
                {/* Persona 1 */}
                <div className='extra-room persona'>
                <div className='persona-intro'>
                    <img className="persona-graphic" src={require(`../../assets/ux/bbyy_persona1.webp`)}alt="personas">
                     </img>  
                        <ul>
                            <li className='persona-name'>Xena Garcia</li>
                            <li>(she/her)</li>
                            <li>Age: 31</li>
                            <li>Education: BA</li>
                            <li>Job title: Copywriter</li>
                            <li>Status: Single</li>
                            <li>Location: San Jose, CA</li>
                        </ul>   
                        <div className='persona-quote'>
                        “I like to choose objects that feel special to keep in my space.”
                        </div>
                    </div>
                        <div className='persona-lists'>
                            <div className='list-title-wrapper'><h6>Goals</h6></div>
                            
                            <ul>
                                <li>
                                    purchase ethically produced goods
                                </li>
                                <li>
                                    find gifts for holidays                                </li>
                                <li>
                                    augment the design choices in her home
                                </li>
                                <li>
                                    deal wifind creative storage solutionsth any hiccups like pests, fungal infections, and diseases
                                </li>
                            </ul>  
                        </div>                    
                    </div> 

                    {/* Persona 2 */}
                    <div className='extra-room persona'>
                        <div className='persona-intro'>
                            <img className="persona-graphic" src={require(`../../assets/ux/bbyy_persona2.webp`)}alt="personas">
                            </img>  
                            <ul>
                                <li className='persona-name'>Quinn Singh</li>
                                <li>(he/him)</li>
                                <li>Age: 55</li>
                                <li>Education: BFA</li>
                                <li>Job title: Social Media Manager</li>
                                <li>Status: Single</li>
                                <li>Location: Chicago, IL</li>
                            </ul>   
                            <div className='persona-quote'>
                                “I’m always looks for a birthday or house warming gift for someone. It’s difficult to find something meaningful and useful”                            </div>
                        </div>
                        <div className='persona-lists'>
                            <div className='list-title-wrapper'><h6>Goals</h6></div>
                            
                            <ul>
                                <li>
                                    find one-of-kind artworks to decorate home and office
                                </li>
                                <li>
                                    find gifts                                </li>
                                <li>
                                    collect interesting dinner ware for home                                </li>
                                <li>
                                    find inspiring pieces                                </li>
                            </ul> 
                        </div>                    
                    </div>  
                <div className="pain-point-wrapper">
                    <ul className="pain-point-ul">
                        Pain points:
                        <li>
                            Limited time to shop for goods
                        </li>
                        <li>
                            Product inconsistencies
                        </li>
                        <li>
                            Market saturated with lower quality products
                        </li>
                    </ul>                                    
                </div>

                <article className='p'>
                    I conducted a competitive audit, reviewing the design and usability of a sample of shopping sites of both independent artists and small home goods brands. The samples audited were Florian Gadsby and Jungalow. The Florian Gadsby shop is super minimal, and as much a portfolio as a shop. It is a cookie cutter artist's portfolio/shopping site that echoes many others. The Jungalow site is more brand and product-focused. The aesthetic is playful and beautifully executed, with color palettes and graphics that add a stronger sense of the brand. Where Florian Gadsby offered a basic layout, the features in Jungalow were deeper and more interactive, including many sub-menus and filtering options. A balance between these two approaches seems more fitting for Blahblahyaya.
                </article> 

                <div class="audit-link">
                    <a href="https://docs.google.com/spreadsheets/d/1PuH0lh_l1oQKtAUnrkkNNWplvO2stb1MsLcN8MdUY8Y/edit?usp=sharing&resourcekey=0-ITXj9wHlUTiJ-dQTTRZuuw" target= "_blank" rel= "noreferrer">Click here to view the competitve audit in Google Sheets.</a> 
                </div>
                <div className='heading-wrapper'>
                    Architecture
                </div>
                <div>
                    <img className="project-example sitemap" src={require(`../../assets/ux/bbyy_sitemap.webp`)}alt="sitemap">
                    </img>
                </div> 
                <article className='p'>
                    The site's structure evolved around the main user flow, which takes the user from a product page through a checkout process. Mindwandering elements such as carousels and item recommendations add complexity to various pages to encourage the user to view as many products as possible.
                </article>                          
                <div>
                    <img className="project-example userflow" src={require(`../../assets/ux/bbyy_userflow.webp`)}alt="userFlow">
                    </img> 
                </div>     
                
                <div className='heading-wrapper'>
                       Wireframes
                    </div>             
                <article className='p'>
                    After the blueprint was laid, I explored many compositional directions through wireframes. The selected wireframe laid out the essential structure of all the core UI. After running the initial usability tests, I iterated the wireframes to include more points of entry for product pages.
                </article>  
                <div className='extra-room'> 
                    <img className="project-example" src={require(`../../assets/ux/bbyy_wireframe.webp`)}alt="wireframe">
                    </img> 
                </div>        
                <div className='heading-wrapper'>
                       Prototype
                </div> 
                <div className='extra-room'> 
                        <img className="design-system" src={require(`../../assets/ux/bbyy_design_system.webp`)}alt="design-system">
                        </img> 
                    </div>   
                <article className='p'>
                    A dark palette background with bright secondary triad colors was employed to echo the design of the products and make the light-colored porcelain pop off the page.

                    The UI is relatively simple, but iterations were necessary to make them feel dynamic. In ongoing development, I will explore different notification elements to guide the user towards shop promotions.
                </article>  
                <div className='extra-room prototypes'>
                        <img className="project-example" src={require(`../../assets/ux/bbyy_prototype_home.webp`)}alt="prototype">
                        </img> 
                        <img className="project-example" src={require(`../../assets/ux/bbyy_prototype_shopnew.webp`)}alt="prototype">
                        </img> 
                        <img className="project-example" src={require(`../../assets/ux/bbyy_prototype_productpage.webp`)}alt="prototype">
                        </img> 
                    </div> 
                <a href="https://www.figma.com/proto/Th48j5ohvsGSj1p1h3neBq/prototype?node-id=2-152&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A100" target= "_blank" rel= "noreferrer">Click here to interact with the live prototype.</a>  
                <article className="summary">
                
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


export default Bbyy;