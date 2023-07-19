import React from 'react';
import ScrollTop from '../../components/ScrollTop';
import '../Bbyy/style.css';

const Bbyy = () => {

    return (
        <section>
            <div className='project-details'>
                <div className='top-container'>                        
                <div className='logo-container'>
                            <img className="project-example logo" id="bbyy" src={require(`../../assets/ux/bbyy_logo_redviolet.webp`)} alt="planting">
                            </img>  
                            <h4>Planting</h4>
                            <h5>(UX/UI)</h5> 
                        </div>
                    <article>
                        This is an online shop for handmade, functional and sculptural pottery and various other home goods.
                    </article>
                </div>

                <div className='heading-wrapper my-role'>
                    My Role
                </div>
                <article className='p'>
                    I started this project to create an alternative means of selling pottery and other handmade objects. I performed research, planned the architecture and, and executed the design.
                </article>    

                <div className='heading-wrapper'>
                       Research
                </div>

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
                            </ul>    <div className='list-title-wrapper'>  <h6>Interests</h6></div>
                          
                            <ul>
                                <li>
                                    interior design
                                </li>
                                <li>
                                    fine arts
                                </li>
                                <li>
                                    film
                                </li>
                                <li>
                                    photography
                                </li>
                                <li>
                                    history
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
                            </ul>    <div className='list-title-wrapper'>  <h6>Interests</h6></div>
                          
                            <ul>
                                <li>
                                    fashion
                                </li>
                                <li>
                                    media
                                </li>
                                <li>
                                   humor
                                </li>
                                <li>
                                    entertaining
                                </li>

                            </ul>
                        </div>                    
                    </div> 

                <article className='p'>
                    Foundational data for this project was collected through a handful of interviews of online shoppers. Their feelings regarding similar shopping platforms and the goods available through those platforms were recorded and analyzed. Personas were modeled upon this sample of data.
                </article>  
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
                    The competitive audit to a look at the design and usability of a sample of shopping sites of both independent artists and small home goods brands. The key competitors audited were Florian Gadsby and Jungalow.The Florian Gadsby shop is super minimal and portfolio-based. This is a cookie cutter artist's portfolio/shopping site that echoes many others. Its very straight-forward. The Jungalow site is more brand and product focused. The aesthetic is playful. It’s beautifully executed with color palettes and graphics that add a stronger sense of the artist. Florian Gadsby offered and undeniably clean and simple layout. The features offered by Jungalow were deeper and more interactive including many sub-menus and filtering options. A balance between these two approaches seems more fitting for this project. Qualitative preference lies with Jungalow site, as it centers the user and the product rather than the creator. But the features and pages for this project will be significantly paired down.
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
                    The structure of the site evolved over time, starting with the minimal necessary features, and later expanding on those features. This occurred primarily in the checkout portion of the site, further pages with confirmations were necessary to encourage the confidence of shoppers along their journey.
                </article>                          
                <div>
                    <img className="project-example userflow" src={require(`../../assets/ux/bbyy_userflow.webp`)}alt="userFlow">
                    </img> 
                </div>     
                
                <div className='heading-wrapper'>
                       Wireframing
                    </div>             
                <article className='p'>
                    After the blueprint was laid, a multitude of compositional directions were explored through wireframes. The selected wireframe laid out the essential structure of all the core features. The home page was most iterated with a more dynamic experience being established to engage users more quickly.
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
                    The home page presents a featured image along with a button that can be selected to start shopping. The hamburger menu drops down to offer a search bar and a list of links to the sites sections including different product categories, a contact page, and an about page. When a category is selected, a product list appears with a filtering option at the top. When a product is selected, the product detail page appears. If the shopper chooses to add an item to their cart, a pop-up prompt leads either to the cart or back to the product page. From the cart, the checkout process may be completed by adding shipping and payment info..
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