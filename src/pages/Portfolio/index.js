import React from 'react';
import { Link } from 'react-scroll';
import ScrollTop from '../../components/ScrollTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons'
import '../Portfolio/style.css';


const Portfolio = () => {
    const projects = [
        {
            title: "QRad",
            file: "qrad_landing.png",
            repo: "https://github.com/sihayah/project-3-group-a",
            deployment: "https://salty-wave-44811.herokuapp.com/",
            description: "This app allows users to generate a digital business card with a QR code they can share from the profile, and add other business cards to a contact list.",
            id: "QRad"
        },
        {
            title: "Budget Tracker",
            file: "budget-tracker.png",
            repo: "https://github.com/sihayah/budget-tracker",
            deployment: "https://blooming-plains-15476.herokuapp.com/",
            description: "This app allows the user to input and graph income and expenses. User data persists, and offline functionality allows the user to input transactions even without an internet connection.",
            id: "budget-tracker"
        },
        {
            title: "Pet Project",
            file: "pet-project.PNG",
            repo: "https://github.com/mkohn4/pet-project",
            deployment: "https://warm-springs-61498.herokuapp.com/",
            description: "Pet Project is an online community for pet owners to post about their pets, allergies, diets and more. Users can comment on one anothers posts and will receive notifications when other users comment on their posts.",
            id: "pet-project"
        },
        {
            title: "Forum Follows Functions",
            file: "forum-follows-func.PNG",
            repo: "https://github.com/sihayah/forum_follows_functions",
            deployment: "https://forum-follows-functions.herokuapp.com/",
            description: "This is a tech blog forum where users can, create an account to make posts. Also, user may view and upvote the posts of other users.",
            id: "fff"
        },
        {
            title: "Weather Dashboard",
            file: "weather-dashboard.JPEG",
            repo: "https://github.com/sihayah/weather-dashboard",
            deployment: "https://sihayah.github.io/weather-dashboard/",
            description: "This is application allows the user to search for a city to retrieve the current weather as well as a five day forecast. The weather is displayed with corresponding icons, and the uvi is color-coded to match its intesity. The user's search history is saved in a series of buttons under the search input.",
            id: "weather-dash"
        },
        {
            title: "Taskmaster",
            file: "taskmaster.JPEG",
            repo: "https://github.com/sihayah/taskmaster-pro",
            deployment: "https://github.com/sihayah/taskmaster-pro/deployments/activity_log?environment=github-pages",
            description: "A kanban board app, that allows users to manage their tasks and stay on schedule with color coding according to deadlines.",
            id: "taskmaster"
        },
        {
            title: "Coding Quiz",
            file: "coding-quiz.jpg",
            repo: "https://github.com/sihayah/coding-quiz",
            deployment: "https://github.com/sihayah/coding-quiz/deployments/activity_log?environment=github-pages",
            description: "In this quiz app,the user is prompted to start quiz via a button. Then a series of questions are posed. Upon answering, user can see whether their answer was correct or incorrect. Each correct answer adds a point to the users score. When the timer runs out, the user is can submit their initials into a form to save their highscore.",
            id: "coding-quiz"
        },
    ];

    return (
        <section className="portfolio">
                    <div id="table-of-contents">
                        
                        <h4>
                            <FontAwesomeIcon icon={ faMeteor } />
                            Projects
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
                                                {project.title}
                                            </Link>
                                        </li>
                            ))}                            
                        </ul>
                        <div className= 'lg-format-scroll-top'>
                            <ScrollTop />     
                        </div>
                        
                    </div>
                <div className="portfolio-container">
                    {projects.map ((project) => (
                        <div className="project-container d-flex flex-column" key={project.title}>
                            <img id={project.id} src={require(`../../assets/landings/${project.file}`)} alt={project.title} className=" project-img align-self-center"
                            ></img>
                            <h4>{project.title}</h4>
                            <span id="project-links">
                                <a href={project.repo}>REPO</a>
                                <span> / </span>
                                <a href={project.deployment}>DEPLOYMENT</a>     
                            </span>  
                            <p>{project.description}</p>                 
                        </div>
                    ))}    
                </div>
                <div className= 'mobile-scroll-top'>
                    <ScrollTop />
                </div>
                
             
        </section>
       
    )
};


export default Portfolio;