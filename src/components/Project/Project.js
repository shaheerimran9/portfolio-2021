import React from 'react';

import './Project.css'

const Project = (props) => {
    return (
        <div className="project" style={{background: props.background}}>
            <div className="project__details">
                <h2 className="project__details__title">{props.title}</h2>
                <p className="project__details__description">{props.description}</p>
            </div>
            <img src={props.imgSrc} alt="{props.imgAlt}" className="project__image" />
            <div className="project__links">
                <a href={props.hrefSite} className="project__links__btn">View Project</a>
                <a href={props.hrefCode} className="project__links__btn">View Code</a>
            </div>
        </div>
    );
};

export default Project;
