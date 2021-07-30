// HEADER JS
// ---------------------------------------------------------------------------

import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/">
                    Kenneth I Petiote
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                                ? "nav-link active"
                                : "nav-link"
                            }
                            >
                            About Me
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link
                            to="/projects"
                            className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                            >
                            Projects
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link
                            to="/resume"
                            className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
                            >
                            Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;