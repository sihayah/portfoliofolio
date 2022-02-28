import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: "Pet Project",
            file: "pet-project.PNG",
            repo: "https://github.com/mkohn4/pet-project",
            deployment: "https://warm-springs-61498.herokuapp.com/"
        },
        {
            title: "Forum Follows Functions",
            file: "forum-follows-func.PNG",
            repo: "https://github.com/sihayah/forum_follows_functions",
            deployment: "https://forum-follows-functions.herokuapp.com/"
        },
        {
            title: "Weather Dashboard",
            file: "weather-dashboard.JPEG",
            repo: "https://github.com/sihayah/weather-dashboard",
            deployment: "https://sihayah.github.io/weather-dashboard/"
        },
        {
            title: "Taskmaster",
            file: "taskmaster.JPEG",
            repo: "https://github.com/sihayah/taskmaster-pro",
            deployment: "https://github.com/sihayah/taskmaster-pro/deployments/activity_log?environment=github-pages"
        },
        {
            title: "Coding Quiz",
            file: "coding-quiz.jpg",
            repo: "https://github.com/sihayah/coding-quiz",
            deployment: "https://github.com/sihayah/coding-quiz/deployments/activity_log?environment=github-pages"
        },
        {
            title: "Budget Tracker",
            file: "budget-tracker.png",
            repo: "https://github.com/sihayah/budget-tracker",
            deployment: "https://blooming-plains-15476.herokuapp.com/"
        },
    ];
    return (
        <div className="img-container d-flex flex-row">
            {projects.map ((project) => (
                <div className="project-container d-flex flex-column" key={project.title}>
                    <img src={require(`../assets/landings/${project.file}`)} alt={project.title} className="align-self-center"
                    ></img>
                    <h4>{project.title}</h4>
                    <span>
                        <a href={project.repo}>REPO</a>
                        <span> / </span>
                        <a href={project.deployment}>DEPLOYMENT</a>     
                    </span>                   
                </div>
            ))}
        </div>
       
    )
};


export default Portfolio;