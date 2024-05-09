import React from "react";
import selfPortrait from "../Images/IMG_2202.JPG"
import './PageStyling/AboutStyles.css'

function About() {
    return(
        <>
            <img src={selfPortrait} alt="Self-Portrait" className="portrait"></img>
            <div>My name is josh Scott. I am a computer science student at Texas A&M. 
                I enjoy developing all kinds of different things. My Interests include various things such as game
                development, volleyball, basketball, and even learning japanese.
            </div>
        </>
        
    );
}

export default About;