import React from 'react';

import petProject from '../assets/landings/pet-project.PNG';
import fff from '../assets/landings/forum-follows-func.PNG';
import weatherDash from '../assets/landings/weather-dashboard.JPEG';

const Portfolio = () => {
    return (
        <>
            <p>
                this will be a portfolio
            </p>
            <div className="img-container">
                <img src={petProject} />
                <img src={fff} />
                <img src={weatherDash} />                
            </div>

        </>
       
    )
};


export default Portfolio;