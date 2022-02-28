import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: "Pet Project",
            file: "pet-project.PNG",
            repo: "https://github.com/mkohn4/pet-project",
            deployment: "https://warm-springs-61498.herokuapp.com/post/1"
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
        }
    ];
    return (
        <div className="img-container d-flex flex-row">
            {projects.map ((project) => (
                <div className="project-container d-flex flex-column">
                    <img src={require(`../assets/landings/${project.file}`)} alt={project.title} className="align-self-center"></img>
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