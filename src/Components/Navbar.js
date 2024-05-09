import React from "react";
import { GiAstronautHelmet } from "react-icons/gi";
import  './ComponentStyling/Navbar.css'

function Navbar() {
    return(
        <>
            
            <ul className="NavbarContainer">
                <GiAstronautHelmet className="NavbarLogo" />
                <li className="NavbarButton">
                    <a href="/">Home</a>
                </li>
                <li className="NavbarButton">
                    <a href="/Projects">Projects</a>
                </li>
                <li className="NavbarButton"> 
                    <a href="/Resume">Resume</a>
                </li>
                <li className="NavbarButton">
                    <a href="/Interests">Interests</a>
                </li>
                <li className="NavbarButton">
                    <a href="/About">About</a>
                </li>
            </ul>
        </>
    );
}

export default Navbar;