import React from "react";
import './PageStyling/HomeStyles.css';
import {ReactTyped} from 'react-typed';
import ProjectComponent from "../Components/projectComponent";
import selfPortrait from "../Images/IMG_2202.JPG";
import Footer from "../Components/Footer";

function Home() {
    return(
        <div className="scroll-container">
            <div className="welcomeContainer scroll-item">
                <div className="typedComponent">
                    <ReactTyped
                        strings ={
                            ["Welcome to my Website",
                                "Click on the navbar to navigate",
                                "This is a sick Library"
                            ]
                        }
                        typeSpeed = {70}
                        backSpeed = {60}
                        loop/>
                </div>
                <div className="buttonContainer">
                    <button className="welcomeButtons">
                        Resume
                    </button>
                    <button className="welcomeButtons">
                        Interests
                    </button>
                </div>
            </div>
            <div className="heroProjectContainer scroll-item">
                <ProjectComponent Link="https://github.com/ScottJJosh" 
                    ImageSource={selfPortrait} Title="Project 4"
                    Description="Here is the project description a little excerpt to tell about the project"/>
                <div className="heroProjectDescription">
                    Here is my Latest project. Click to check it out!
                </div>
            </div>
            <div className="heroInterestsContainer scroll-item">
                <div>
                    Check out my interests
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;