// HOME JS
// ---------------------------------------------------------------------------

import React, { Component } from "react";
// import Resume from "../components/Resume";

class Home extends Component {

    render() {
        return (
            <main className="container home-padding-top">
                <div className="card border-0 shadow my-5">
                    <div className="card-body p-5">
                        <h1><i>A little bit about myself...</i></h1>
                        <div className="row">
                            <div className="col-xs-6 col-md-6">
                                <p className="lead">
                                    My name is Kenneth Petiote and I am a full-time IT Professional. 
                                    <br></br> 
                                    My knack for learning about technology has lead me to pursuit a certification in Full Stack Web Development. 
                                    As an aspiring Developer, I enrolled and completed an extensive Web Development Program at Rutgers's Coding BootCamp.
                                    <br></br>
                                </p>

                                <p className="lead">
                                    During the program I've acquired skills in HTML, CSS, JavaScript, MySQL, Node.js, React.js, and Third Party API's.
                                    Definitely eager and looking forward to branching into software developing as a new career path.
                                    I have the ability to adapt and be versatile in any environment, whether in a team or working independently.                                
                                </p>

                                <p className="lead">
                                    Aside from coding, I love photography, gaming, and working out.
                                    <br></br>
                                    I also own a side business as an event photographer.
                                </p>

                                <h4><b>Let's connect via the links below:</b></h4>

                                <a href="mailto:kenneth.petiote@gmail.com">
                                    <i class="fas fa-envelope-square fa-3x color-green padding-right"></i>
                                </a>   

                                <a href="https://github.com/KPetiote">
                                    <i className="fab fa-github-square fa-3x color-green padding-right"></i>
                                </a>  

                                <a href="https://www.linkedin.com/in/kenneth-petiote/">
                                    <i className="fab fa-linkedin fa-3x color-green"></i>
                                </a>
                            </div>
                            <div className="col-xs-7 col-md-5">
                                <img id="portrait" src="/images/ken-portrait.jpg"
                                    className="img-fluid img-thumbnail mx-auto" alt="Kenneth I Petiote Portrait">
                                </img>
                            </div>
                        </div>
                        <br></br>
                    </div>
                </div>
            </main>
        )
    }
}

export default Home
