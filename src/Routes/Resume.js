import React from "react";
import './PageStyling/ResumeStyles.css';
import Footer from "../Components/Footer";

function Resume() {
    return (
        <>
            <div className="resume-outer-container">
                <div className="resume-container">
                    <div className="resume-section">
                        <h2>Josh Scott</h2>
                        <p>
                            (817) 559-5248 &nbsp;|&nbsp; Irvine, CA &nbsp;|&nbsp; 
                            <a href="mailto:scott.j.joshua@gmail.com">scott.j.joshua@gmail.com</a> &nbsp;|&nbsp; 
                            <a href="https://www.linkedin.com/in/joshscott1532/" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/joshscott1532
                            </a>
                        </p>
                    </div>

                    <div className="resume-section">
                        <h2>Education</h2>
                        <p>
                            <strong>Texas A&amp;M University</strong>, College Station, Texas<br />
                            Bachelor of Science in Computer Science, December 2024<br />
                            College of Engineering &nbsp;|&nbsp; Program GPA: 3.52/4.0
                        </p>
                    </div>

                    <div className="resume-section">
                        <h2>Experience &amp; Projects</h2>
                        <ul>
                            <li>
                                <strong>Jabil | Software Engineering Intern</strong> <span className="resume-date">May 2024 - Sep 2024 | Austin, TX</span>
                                <ul>
                                    <li>Spearheaded development of Python CLI tool leveraging Redfish API for server management and orchestration.</li>
                                    <li>Gathered requirements and led end-to-end development, including API design and deployment pipelines.</li>
                                    <li>Achieved 90%+ code coverage with mock HTTP servers and unit testing; used multiprocessing for efficiency.</li>
                                    <li>Enhanced codebase to reduce server calls, optimizing JSON pathing and cutting process time by 60%.</li>
                                    <li>Led Scrum meetings to manage project lifecycle, deadlines, and requirements.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>ChessVision (Live Chess Tracking) | Computer Vision Lead</strong> <span className="resume-date">Jan 2024 - Apr 2024 | College Station, TX</span>
                                <ul>
                                    <li>Built real-time computer vision model using OpenCV for live chess games.</li>
                                    <li>Integrated iOS app with MongoDB cloud via .NET driver and RESTful architecture.</li>
                                    <li>Won 1st place in the CS department’s senior design presentation.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Restaurant Management Software | Full-Stack Developer</strong> <span className="resume-date">Aug 2023 - Dec 2023 | College Station, TX</span>
                                <ul>
                                    <li>Developed web-based restaurant management software with self-ordering kiosks and POS system.</li>
                                    <li>Used React and MaterialUI for responsive UI; designed REST API with Node.js/Express.js and PostgreSQL on AWS.</li>
                                    <li>Implemented OAuth API for secure user management and route guards.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Lelo’s Island Restaurant | Front Manager</strong> <span className="resume-date">Jul 2021 - Present | Port Aransas, TX</span>
                                <ul>
                                    <li>Facilitated team through 10+ hour shifts, optimizing roles and improving workflow for a less stressful environment.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="resume-section">
                        <h2>Technologies, Activities &amp; Interests</h2>
                        <p>
                            <strong>Front-End:</strong> React, JS, CSS, HTML, MaterialUI, Swift<br />
                            <strong>Back-End &amp; DB:</strong> Node.js, Express.js, PostgreSQL, MongoDB, .NET<br />
                            <strong>Languages &amp; Libraries:</strong> Java, C++, Python, Pytorch, Numpy, OpenCV, C#<br />
                            <strong>Deployment &amp; Other:</strong> Vercel, Bash, Git, AGILE, Powershell, OAuth, Jira, HTTP, Figma<br />
                            <strong>Relevant Courses:</strong> Machine Learning, Artificial Intelligence, Programming Studio, Wireless Networks<br />
                            <strong>Activities &amp; Interests:</strong> Japanese Culture and Language, Volleyball, Indoor Climbing, Reading Non-Fiction, Snowboarding
                        </p>
                    </div>

                    <div className="resume-section">
                        <h2>Leadership &amp; Involvement</h2>
                        <ul>
                            <li>
                                <strong>Ryan Consulting | Case Study Lead</strong> <span className="resume-date">Aug 2022 | College Station, TX</span>
                                <ul>
                                    <li>Implemented strategy to optimize tax advantages and maximize profits in oil well operations, projecting $30M+ revenue.</li>
                                    <li>Used Python to preprocess data, calculate optimal buy/sell dates, and leverage tax advantages.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Texas A&amp;M | Tutor</strong> <span className="resume-date">Aug 2022 – Dec 2022 | College Station, TX</span>
                                <ul>
                                    <li>Curated lesson plans and resources for students in Intermediate Accounting.</li>
                                    <li>Provided 1:1 tutoring and mentoring, helping MSF cohort excel in a challenging class.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <aside className="resume-sidebar">
                    <div className="download-box">
                        <h3>Want a PDF copy?</h3>
                        <a
                            href="/files/Joshua_Scott_Resume_2025.pdf"
                            download="Joshua_Scott_Resume_2025.pdf"
                            className="download-btn"
                        >
                            Download PDF
                        </a>
                    </div>
                </aside>
            </div>
            <Footer />
        </>
    );
}

export default Resume;