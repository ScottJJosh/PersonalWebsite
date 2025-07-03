import React from "react";
import './PageStyling/InterestStyles.css';
import Footer from "../Components/Footer";

function Interests() {
    return (
        <>
            <div className="page-content interests-content">
                <h1 className="interests-title">My Interests</h1>
                <section className="interest-section">
                    <h2>
                        <img src="https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" alt="Japanese Flag" className="interest-icon" />
                        <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" alt="Italian Flag" className="interest-icon" />
                        Language Learning
                    </h2>
                    <p>
                        I’m passionate about learning languages, especially <b>Japanese</b> and <b>Italian</b>. I love exploring new cultures, connecting with people, and challenging myself to master new ways of thinking and communicating.
                    </p>
                </section>
                <section className="interest-section">
                    <h2>
                        <img src="https://www.svgrepo.com/show/522999/roman-helmet.svg" alt="Roman Helmet" className="interest-icon" />
                        History
                    </h2>
                    <p>
                        I’m fascinated by <b>Roman</b> and <b>Japanese</b> history. From the rise and fall of empires to the stories of samurai and gladiators, I enjoy diving deep into the past to understand how it shapes our world today.
                    </p>
                </section>
                <section className="interest-section">
                    <h2>
                        <img src="https://www.svgrepo.com/show/522994/volleyball.svg" alt="Volleyball" className="interest-icon" />
                        <img src="https://www.svgrepo.com/show/522983/basketball.svg" alt="Basketball" className="interest-icon" />
                        <img src="https://www.svgrepo.com/show/522981/climbing.svg" alt="Bouldering" className="interest-icon" />
                        Sports
                    </h2>
                    <p>
                        I stay active with <b>volleyball</b>, <b>basketball</b>, and <b>bouldering</b>. Whether it’s the teamwork of volleyball, the strategy of basketball, or the challenge of climbing, sports keep me energized and motivated.
                    </p>
                </section>
                <section className="interest-section">
                    <h2>
                        <img src="https://www.svgrepo.com/show/452210/code.svg" alt="Programming" className="interest-icon" />
                        <img src="https://www.svgrepo.com/show/452273/gamepad.svg" alt="Game Development" className="interest-icon" />
                        <img src="https://www.svgrepo.com/show/452228/chip.svg" alt="Embedded Systems" className="interest-icon" />
                        Programming
                    </h2>
                    <p>
                        I love building things! My programming interests include <b>applications</b>, <b>game development</b>, and <b>embedded systems</b>. I enjoy solving problems, creating interactive experiences, and working with both software and hardware.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Interests;