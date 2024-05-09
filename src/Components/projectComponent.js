import React from "react";
import './ComponentStyling/ProjectComponentStyles.css';

function ProjectComponent(project) {
    return(
    <>
        <div className="projectContainer">
            <a href={project.Link}>
            <img src={project.ImageSource} alt="Project Presentation" className="projectImage"/>
            <div className="projectTitle"> {project.Title}</div>
            <div className="projectDescription"> {project.Description}</div>
            </a>
        </div>
    </>
    );
}

export default ProjectComponent;