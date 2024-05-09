import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home from "../Routes/Home";
import About from "../Routes/About";
import Interests from "../Routes/Interests";
import Projects from "../Routes/Projects";
import Resume from "../Routes/Resume";

function RoutingComponent() {
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/Projects" element={<Projects />}/>
                    <Route path="/Resume" element={<Resume />}/>
                    <Route path="/Interests" element={<Interests />}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="*" element={<Navigate to="/" />}/>
                </Routes>
            </Router>
        </>
    );
}

export default RoutingComponent;