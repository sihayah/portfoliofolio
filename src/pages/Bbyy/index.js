import React from 'react';
import { Link } from 'react-scroll';
import ScrollTop from '../../components/ScrollTop';
import Popup from 'reactjs-popup';
import '../Design/style.css';

const Bbyy = () => {

const caseStudies = [
    {
        title: "Blahblahyaya",
        subtitle: "UX/UI",
        description: "This is an online shop for handmade, functional and sculptural pottery and various other home goods.",
        myRole: "I started this project to create an alternative means of selling my own pottery and other handmade objects. I performed research, planned the architecture and, and executed the design.",
        logo: "bbyy_logo_redviolet.webp",
        research: "Foundation data for this project was collected through a handful of interviews of online shoppers. Their feelings regarding similar shopping platforms and the goods available through those platforms were recorded and analyzed. Personas were modeled upon this sample of data.",
        painPoint1: "Limited time to shop for goods",
        painPoint2:  "Unimpressive UI",
        painPoint3: "Product inconsistencies",
        painPoint4: "Market saturated with lower quality products",
        personas: "bbyy_personas.webp",
        competitveAuditCopy: "The competitive audit to a look at the design and usability of a sample of shopping sites of both independent artists and small home goods brands. The key competitors audited were Florian Gadsby and Jungalow.The Florian Gadsby shop is super minimal and portfolio-based. This is a cookie cutter artist's portfolio/shopping site that echoes many others. Its very straight-forward. The Jungalow site is more brand and product focused. The aesthetic is playful. It’s beautifully executed with color palettes and graphics that add a stronger sense of the artist. Florian Gadsby offered and undeniably clean and simple layout. The features offered by Jungalow were deeper and more interactive including many sub-menus and filtering options. A balance between these two approaches seems more fitting for this project. Qualitative preference lies with Jungalow site, as it centers the user and the product rather than the creator. But the features and pages for this project will be significantly paired down.",
        auditLink: "https://docs.google.com/spreadsheets/d/1PuH0lh_l1oQKtAUnrkkNNWplvO2stb1MsLcN8MdUY8Y/edit?usp=sharing&resourcekey=0-ITXj9wHlUTiJ-dQTTRZuuw",
        interviews: "...",
        architectureCopy: "The structure of the site evolved over time, starting with the minimal necessary features, and later expanding on those features. This occurred primarily in the checkout portion of the site, further pages with confirmations were necessary to encourage the confidence of shoppers along their journey.",
        sitemap: "bbyy_sitemap.webp",
        userFlow: "bbyy_userflow.webp",
        wireframeCopy: "After the blueprint was laid, a multitude of compositional directions were explored through wireframes. The selected wireframe laid out the essential structure of all the core features. The home page was most iterated with a more dynamic experience being established to engage users more quickly.",
        wireframe: "bbyy_wireframe.webp",
        prototypeCopy: "The home page presents a featured image along with a button that can be selected to start shopping. The hamburger menu drops down to offer a search bar and a list of links to the sites sections including different product categories, a contact page, and an about page. When a category is selected, a product list appears with a filtering option at the top. When a product is selected, the product detail page appears. If the shopper chooses to add an item to their cart, a pop-up prompt leads either to the cart or back to the product page. From the cart, the checkout process may be completed by adding shipping and payment info.",
        prototypeLink: "https://www.figma.com/proto/Th48j5ohvsGSj1p1h3neBq/prototype?node-id=2-152&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A100",
        prototype: "bbyy_prototype.webp",
        testingIterationCopy: "",
        testingIteration: "",
        revisedDesign: "",
        completetionSummary: "",
        id: "bbyy"
    }
]

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
                    <span id="disappearingDashes">-------------------------------------------------------------</span>
                    <div className= 'lg-format-scroll-top'>
                        <ScrollTop />     
                    </div>
                    
                </div>
                <div id="clickem" className="disappear"><p id="clickemText">
                    <img id="clickIcon" src={require(`../../assets/ux/click-icon.webp`)} alt="click icon">
                    </img>  
                    click images to expand
                    </p>
                </div>
                
                <div className="portfolio-container">
                    {caseStudies.map ((project) => (
                        <div className="project-container" key={project.title}>                              
                            <div className='project-details'>
                             <div className="centerImg">
                                    <img className="project-example logo" id={project.id} src={require(`../../assets/ux/${project.logo}`)} alt={project.title}>
                                    </img>  
                                </div>
                                <h4>{project.title}</h4>
                                <h5>{project.subtitle}</h5> 
                                <p>
                                    {project.description}
                                </p> 
                                <h6>
                                    My Role
                                </h6>  
                                <p>
                                    {project.myRole}
                                </p>    
                                <h6>Research</h6>
                                <div className="centerImg">
                                    <Popup trigger={<button className="thumb"> 
                                            <img className="project-example" src={require(`../../assets/ux/${project.personas}`)}alt="personas">
                                            </img> 
                                            </button>} 
                                        modal>
                                        <span> 
                                            <p className="escClose">hit <span className="emphasize">esc</span> to exit</p>
                                            <p className="clickClose"><span className="emphasize">click</span> to exit</p>
                                            <img className="personasPopup" src={require(`../../assets/ux/${project.personas}`)}alt="personas">
                                            </img>  
                                        </span>
                                        </Popup>
                                </div> 
                                <p>
                                    {project.research}
                                </p>  
                                <div className="paintPointWrapper">
                                    <ul className="paintPointsUl">
                                        Pain points:
                                        <li>
                                            {project.painPoint1}
                                        </li>
                                        <li>
                                            {project.painPoint2}
                                        </li>
                                        <li>
                                            {project.painPoint3}
                                        </li>
                                        <li>
                                            {project.painPoint4}
                                        </li>
                                    </ul>                                    
                                </div>

                                <p>
                                    {project.competitveAuditCopy}
                                </p> 

                                <div class="auditLink" >
                                    <a href={project.auditLink} target= "_blank" rel= "noreferrer">Click here to view the competitve audit in Google Sheets.</a> 
                                </div>
                                <h6>Architecture</h6>  
                                <div className="centerImg">
                                    <Popup trigger={<button className="thumb"> 
                                            <img className="project-example" src={require(`../../assets/ux/${project.sitemap}`)}alt="sitemap">
                                            </img> 
                                            </button>} 
                                        modal>
                                        <span> 
                                            <p className="escClose">hit <span className="emphasize">esc</span> to exit</p>
                                            <p className="clickClose"><span className="emphasize">click</span> to exit</p>
                                            <img className="popupImgXl" src={require(`../../assets/ux/${project.sitemap}`)}alt="sitemap">
                                            </img>  
                                        </span>
                                    </Popup> 
                                </div> 
                                <p>
                                    {project.architectureCopy}
                                </p>                          
                                <div className="centerImg">
                                    <Popup trigger={<button className="thumb"> 
                                            <img className="project-example" src={require(`../../assets/ux/${project.userFlow}`)}alt="userFlow">
                                            </img> 
                                            </button>} 
                                        modal>
                                        <span> 
                                            <p className="escClose">hit <span className="emphasize">esc</span> to exit</p>
                                            <p className="clickClose"><span className="emphasize">click</span> to exit</p>
                                            <img className="popupImgXl" src={require(`../../assets/ux/${project.userFlow}`)}alt="userFlow">
                                            </img>  
                                        </span>
                                    </Popup>  
                                </div>                          
                                <h6>Wireframing</h6>  
                                <p>
                                    {project.wireframeCopy}
                                </p>  
                                <div className="centerImg">
                                    <Popup trigger={<button className="thumb"> 
                                            <img className="project-example" src={require(`../../assets/ux/${project.wireframe}`)}alt="wireframe">
                                            </img> 
                                            </button>} 
                                        modal>
                                        <span> 
                                            <p className="escClose">hit <span className="emphasize">esc</span> to exit</p>
                                            <p className="clickClose"><span className="emphasize">click</span> to exit</p>
                                            <img className="wireframePopup" src={require(`../../assets/ux/${project.wireframe}`)}alt="wireframe">
                                            </img>  
                                        </span>
                                    </Popup>  
                                </div>              
                                <h6>Prototype</h6>  
                                <p>
                                    {project.prototypeCopy}
                                </p>  
                                <div className="centerImg">
                                    <Popup trigger={<button className="thumb"> 
                                            <img className="project-example" src={require(`../../assets/ux/${project.prototype}`)}alt="prototype">
                                            </img> 
                                            </button>} 
                                        modal>
                                        <span> 
                                            <p className="escClose">hit <span className="emphasize">esc</span> to exit</p>
                                            <p className="clickClose"><span className="emphasize">click</span> to exit</p>
                                            <img className="wireframePopup" src={require(`../../assets/ux/${project.prototype}`)}alt="prototype">
                                            </img>  
                                        </span>
                                    </Popup>  
                                </div>  
                                <a href={project.prototypeLink} target= "_blank" rel= "noreferrer">Click here to interact with the live prototype.</a>  
                                <p className="summary">
                                    {project.completetionSummary}
                                </p>              
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
                        </div>
                    ))}    
                </div>
                <div className= 'mobile-scroll-top'>
                    <br/>
                    <br/>
                    <ScrollTop />
                </div>
                
             
        </section>
       
    )
};


export default Bbyy;