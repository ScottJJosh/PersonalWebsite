import React from "react";
import './ComponentStyling/Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            &copy; {new Date().getFullYear()} Josh Scott &mdash; All rights reserved.
        </footer>
    );
}

export default Footer;