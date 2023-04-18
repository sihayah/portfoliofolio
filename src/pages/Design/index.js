import React from 'react';
import { Link } from 'react-scroll';
import ScrollTop from '../../components/ScrollTop';
import Popup from 'reactjs-popup';
import '../Design/style.css';

const Design = () => {
    const caseStudies = [
        {
            title: "Planting",
            subtitle: "UX/UI",
            description: "Planting is a concept project for a gardening app geared primarily towards newer gardeners. By design, it is a living farmer’s almanac, enriching the experience of growing plants with a wealth of tips and techniques. Thus, it eliminates hours spent planning and researching the plant cultivars and methods best suited for a given climate zone and garden type, as well as, the methods require to grow and nurture them. Planting helps gardeners to what they do best— get their hands dirty, grow their own food, and enhance their environment. ",
            myRole: "To breath life into this new concept for a mobile gardening app, I started by conducting user research which fueled the ideation process. I tailored a logo to suit the direction of apps aesthetic, planned the site’s information architecture and user interaction, produced wireframes, and, finally, generated a prototype, and refined it with usability testing.",
            logo: "logo.webp",
            research: "User interviews cast a wide net to gather information from plant parents and gardeners with regard to their thoughts and feelings on their personal experience with growing plants. The research conducted included surveys, a competitive audit, and a usablity study",
            painPoint1:  "Limited resources to grow plants",
            painPoint2: "Precious little free time",
            painPoint3: "Pets/wildlife wreaking havoc on plants",
            painPoint4: "Previous negative experiences killing plants",
            personas: "personas.webp",
            competitveAuditCopy: "I conducted a competitive audit  to compare the usefulness and usability of competing plant care apps. The key competitors examined were the Blossom and Planta mobile apps. The Blossom App is exceptionally visually engaging with motion graphics and beautiful photos. The features for adding plants and accessing care data are very easy to use and well-organized. Planta is a somewhat simpler, cleaner design with darker tones, and better contrast. It feels very modern and somewhat more direct. Similar to Blossom, the user can add plants and access care information, which is set-up in bullet points and, therefore, easy to scan quickly. Planta markets itself as an efficient solution to plant care for individuals who need reminders to keep their plants healthy with room for the customization of the user’s experience based on their goals and needs. Overall the point is simplifying care, so the user doesn’t have to worry. Blossom markets itself similarly– a glorified watering reminder app with more complex features for those who wish to go deeper. The user can create solutions for various goals through the Blossom app, including identification, diagnosis and treatment for sick plants, and reminders for watering and fertilization.I reached the conclusion that a new app could create location/climate customization options, provide recommendations instead of the user having to solely use the search function to discover plant cultivars, provide more language and audio tools, and create different modes for visibility.",
            auditLink: "https://docs.google.com/spreadsheets/d/1shuanvrA8jEe5lFHkDcUVP4lwejfYk0N45C1zJGkND8/edit#gid=2073884517",
            interviews: "...",
            architectureCopy: "The navigation adheres to a very simple design that echoes familiar patterns. The Site Map provides an overview of the Planting app. The User Flow illustrates an example of how a user might use the search function in the Planting app.",
            sitemap: "sitemap.webp",
            userFlow: "userflow.webp",
            wireframeCopy: "With the help of the architecture set in place through the Site Map and User Flow, I create a set of wireframes that illustrate how the user can move through the core features in the Planting app. My initial design included bare bones navigation occurring solely through the hamburger menu. This later iteration includes buttons affixed to the bottom right to make it easier to hop from page to page in mobile.",
            wireframe: "wireframe.webp",
            prototypeCopy: "In the planting Home Screen, the user is presented with the most important information, their daily plant/garden care tasks, as well as a seasonal daily tip to get the gears turning. Upon navigating to the calendar, the user is present with a guide to gardening making recommendations, organized by date, as well as the forecast for their location. Their profile page contains the basic data the app uses to customize recommendations as well as link to alter setting and preferences. When the user navigates to the My Garden page, they can view the plants they have saved to their garden, plants recommended to them by the app, and their daily plant care tasks. If they select tasks, the user is present with checklist of items to complete for the care of their saved plants and general garden upkeep.",
            prototypeLink: "https://www.figma.com/proto/k4cWzVgibqCa9Bq1g5PEsB/prototype?node-id=1-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2",
            prototype: "planting_prototype.webp",
            testingIterationCopy: "about testing and iteration.......",
            testingIteration: "X",
            revisedDesign: "X",
            completetionSummary: "Working on the Planting app helped me hone the ability to translate thorough research into usability. I focused on the key features of the app thus far, but I plan to explore further features and more complex functionality like integrating smart phone cameras and notifications. This project helped to solidify my approach to UX. I always seek to create the most simple and efficient structures possible in an environment of inspiring and delightful design.",
            id: "planting"
        },
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


export default Design;