import React from "react";
import ProjectComponent from "../Components/projectComponent";
import './PageStyling/ProjectStyles.css'
import selfPortrait from "../Images/IMG_2202.JPG"

function Projects() {
    return(
        <div className="ProjectsPage">
            <div className="ProjectButtonsContainer">
                <ProjectComponent Link="https://github.com/ScottJJosh" 
                ImageSource={selfPortrait} Title="POS Software"
                Description="Here is the project description a little excerpt to tell about the project"/>
                <ProjectComponent Link="https://github.com/ScottJJosh" 
                ImageSource={selfPortrait} Title="Live Chess Tracker"
                Description="Here is the project description a little excerpt to tell about the project"/>
                <ProjectComponent Link="https://github.com/ScottJJosh" 
                ImageSource={selfPortrait} Title="Stock Bot"
                Description="Here is the project description a little excerpt to tell about the project"/>
                <ProjectComponent Link="https://github.com/ScottJJosh" 
                ImageSource={selfPortrait} Title="Project 4"
                Description="Here is the project description a little excerpt to tell about the project"/>
            </div>
        </div>
    );
}

export default Projects;