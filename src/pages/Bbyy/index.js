import React from 'react';
import ScrollTop from '../../components/ScrollTop';
import '../Bbyy/style.css';

const Bbyy = () => {

    return (
        <section>
                <div className='project-details'>
                    <div className="centerImg">
                        <img className="project-example logo" id="bbyy" src={require(`../../assets/ux/bbyy_logo_redviolet.webp`)} alt="bbyy">
                        </img>  
                    </div>
                    <div className='top-cotainer'>
                        <div>
                            <h4>BBYY</h4>
                        <h5>(UX/UI)</h5> 
                        </div>
                    <article>
                        This is an online shop for handmade, functional and sculptural pottery and various other home goods.
                    </article>
                    </div>
                   
                    <h6>
                        My Role
                    </h6>  
                    <article>
                        I started this project to create an alternative means of selling pottery and other handmade objects. I performed research, planned the architecture and, and executed the design.
                    </article>    
                    <h6>Research</h6>
                    <div className='extra-room'>
                        <img className="project-example" src={require(`../../assets/ux/bbyy_personas.webp`)}alt="personas">
                        </img> 
                    </div> 
                    <article>
                        Foundational data for this project was collected through a handful of interviews of online shoppers. Their feelings regarding similar shopping platforms and the goods available through those platforms were recorded and analyzed. Personas were modeled upon this sample of data.
                    </article>  
                    <div className="paintPointWrapper">
                        <ul className="paintPointsUl">
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

                    <article>
                        The competitive audit to a look at the design and usability of a sample of shopping sites of both independent artists and small home goods brands. The key competitors audited were Florian Gadsby and Jungalow.The Florian Gadsby shop is super minimal and portfolio-based. This is a cookie cutter artist's portfolio/shopping site that echoes many others. Its very straight-forward. The Jungalow site is more brand and product focused. The aesthetic is playful. It’s beautifully executed with color palettes and graphics that add a stronger sense of the artist. Florian Gadsby offered and undeniably clean and simple layout. The features offered by Jungalow were deeper and more interactive including many sub-menus and filtering options. A balance between these two approaches seems more fitting for this project. Qualitative preference lies with Jungalow site, as it centers the user and the product rather than the creator. But the features and pages for this project will be significantly paired down.
                    </article> 

                    <div class="auditLink" >
                        <a href="https://docs.google.com/spreadsheets/d/1PuH0lh_l1oQKtAUnrkkNNWplvO2stb1MsLcN8MdUY8Y/edit?usp=sharing&resourcekey=0-ITXj9wHlUTiJ-dQTTRZuuw" target= "_blank" rel= "noreferrer">Click here to view the competitve audit in Google Sheets.</a> 
                    </div>

                    <h6>Architecture</h6>  
                    <div>
                        <img className="project-example" src={require(`../../assets/ux/bbyy_sitemap.webp`)}alt="sitemap">
                        </img>
                    </div> 
                    <article>
                        The structure of the site evolved over time, starting with the minimal necessary features, and later expanding on those features. This occurred primarily in the checkout portion of the site, further pages with confirmations were necessary to encourage the confidence of shoppers along their journey.
                    </article>                          
                    <div>
                        <img className="project-example" src={require(`../../assets/ux/bbyy_userflow.webp`)}alt="userFlow">
                        </img> 
                    </div>     
                                         
                    <h6>Wireframing</h6>  
                    <article>
                        After the blueprint was laid, a multitude of compositional directions were explored through wireframes. The selected wireframe laid out the essential structure of all the core features. The home page was most iterated with a more dynamic experience being established to engage users more quickly.
                    </article>  
                    <div className='extra-room'> 
                        <img className="project-example" src={require(`../../assets/ux/bbyy_wireframe.webp`)}alt="wireframe">
                        </img> 
                    </div>        

                    <h6>Prototype</h6>  
                    <article>
                        The home page presents a featured image along with a button that can be selected to start shopping. The hamburger menu drops down to offer a search bar and a list of links to the sites sections including different product categories, a contact page, and an about page. When a category is selected, a product list appears with a filtering option at the top. When a product is selected, the product detail page appears. If the shopper chooses to add an item to their cart, a pop-up prompt leads either to the cart or back to the product page. From the cart, the checkout process may be completed by adding shipping and payment info..
                    </article>  
                    <div className='extra-room'>
                        <img className="project-example" src={require(`../../assets/ux/bbyy_prototype.webp`)}alt="prototype">
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