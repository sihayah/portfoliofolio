import React from 'react';
import { Link } from 'react-scroll';
import ScrollTop from '../../components/ScrollTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons'
import '../Develop/style.css';


const Develop = () => {
    const projects = [
        {
            title: "QRad",
            file: "qrad.jpg",
            repo: "https://github.com/sihayah/project-3-group-a",
            deployment: "https://qrad-v2.herokuapp.com/",
            description: "This app allows users to generate a digital business card with a QR code they can share from the profile, and add other business cards to a contact list.",
            technologies: "ReactJS, MongoDB, GraphQL, Node.js, Bootstrap, JavaScript, CSS, HTML, Heroku",
            id: "QRad"
        },
        {
            title: "Budget Tracker",
            file: "budget.jpg",
            repo: "https://github.com/sihayah/budget-tracker",
            deployment: "https://budgettracker.herokuapp.com/",
            description: "This app allows the user to input and graph income and expenses. User data persists, and offline functionality allows the user to input transactions even without an internet connection.",
            technologies: "Node.js, MongoDB, JavaScript, CSS, HTML, Heroku",
            id: "budget-tracker"
        },
        {
            title: "Pet Project",
            file: "pet-project.jpg",
            repo: "https://github.com/mkohn4/pet-project",
            deployment: "https://pet-project.herokuapp.com/",
            description: "Pet Project is an online community for pet owners to post about their pets, allergies, diets and more. Users can comment on one anothers posts and will receive notifications when other users comment on their posts.",
            technologies: "MySQL, Node.js, Express, Jest, JavaScript, CSS, HTML",
            id: "pet-project"
        },
        {
            title: "Forum Follows Functions",
            file: "fff.jpg",
            repo: "https://github.com/sihayah/forum_follows_functions",
            deployment: "https://forumfollowsfunctions.herokuapp.com/",
            description: "This is a tech blog forum where users can, create an account to make posts. Also, user may view and upvote the posts of other users.",
            technologies: "MySQL, Node.js, Express, JavaScript, CSS, HTML, Heroku",
            id: "fff"
        },
        {
            title: "Weather Dashboard",
            file: "weather.jpg",
            repo: "https://github.com/sihayah/weather-dashboard",
            deployment: "https://sihayah.github.io/weather-dashboard/",
            description: "This is application allows the user to search for a city to retrieve the current weather as well as a five day forecast. The weather is displayed with corresponding icons, and the uvi is color-coded to match its intesity. The user's search history is saved in a series of buttons under the search input.",
            technologies: "Node.js, APIs, JavaScript, CSS, HTML",
            id: "weather-dash"
        },
        {
            title: "Taskmaster",
            file: "taskmaster.jpg",
            repo: "https://github.com/sihayah/taskmaster-pro",
            deployment: "https://sihayah.github.io/taskmaster-pro/",
            description: "A kanban board app, that allows users to manage their tasks and stay on schedule with color coding according to deadlines.",
            technologies: "JQuery, JavaScript, CSS, HTML",
            id: "taskmaster"
        },
        {
            title: "Coding Quiz",
            file: "coding-quiz.jpg",
            repo: "https://github.com/sihayah/coding-quiz",
            deployment: "https://sihayah.github.io/coding-quiz/",
            description: "In this quiz app,the user is prompted to start quiz via a button. Then a series of questions are posed. Upon answering, user can see whether their answer was correct or incorrect. Each correct answer adds a point to the users score. When the timer runs out, the user is can submit their initials into a form to save their highscore.",
            technologies: "JavaScript, CSS, HTML",
            id: "coding-quiz"
        },
    ];

    return (
        <section className="dev-portfolio">
                    <div id="dev-table-of-contents">
                        
                        <h4>
                            Coding Projects
                        </h4>
                        <ul>
                            {projects.map(project => (                            
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
                        <div className= 'dev-lg-format-scroll-top'>
                            <ScrollTop />     
                        </div>
                        
                    </div>
                <div className="dev-portfolio-container">
                    {projects.map ((project) => (
                        <div className="dev-project-container" key={project.title}>
                            <img className="dev-project-example" id={project.id} src={require(`../../assets/landings/jpegs/${project.file}`)} alt={project.title}
                            ></img>                                
                            <div className='dev-project-details'>
                                <h4>{project.title}</h4>
                                <span id="dev-project-links">
                                    <a href={project.repo} target= "_blank" rel= "noreferrer">REPO</a>
                                    <span> / </span>
                                    <a href={project.deployment} target= "_blank"  rel= "noreferrer">LIVE</a>     
                                </span>  
                                <p>
                                    {project.description}
                                </p>  
                                <h5>Technologies:</h5>                   
                                <p id="dev-tech-list">
                                    {project.technologies}
                                </p>           
                            </div>
                        </div>
                    ))}    
                </div>
                <div className= 'dev-mobile-scroll-top'>
                    <ScrollTop />
                </div>
                
             
        </section>
       
    )
};


export default Develop;