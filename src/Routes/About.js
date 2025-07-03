import React from "react";
import selfPortrait from "../Images/IMG_2202.JPG"
import './PageStyling/AboutStyles.css'
import Footer from "../Components/Footer";

function About() {
    return (
        <>
            <div className="page-content">
                <div className="about-container">
                    <img src={selfPortrait} alt="Self-Portrait" className="portrait" />
                    <div className="about-text">
                        <h2>Josh Scott</h2>
                        <p>
                            I am a computer science student at Texas A&M. I enjoy developing all kinds of different things.
                            My interests include game development, volleyball, basketball, and even learning Japanese.
                            <br /><br />
                            I love tackling new challenges and collaborating with others to build creative solutions. 
                            Whether it's coding a new game, spiking a volleyball, or studying a new language, I'm always eager to better myself.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;