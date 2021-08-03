// PROJECT JS
// ---------------------------------------------------------------------------

import React from 'react';
import "./style.css";

function Projects() {
    return (
        <main className="container">
            <div className="card border-0 shadow my-5">
                <div className="card-body p-5">
                    <h1 className="font-weight-medium">Projects:</h1>
                    
                    <div className="row">
                        <div>
                            <h3 className="card-title card-image text-center">
                                <b>React Google Book Search</b>
                            </h3>
                            <h3 className="card-title card-image text-center color-green">
                                <a className="color-green" href="https://github.com/KPetiote/React-Google-Book-Search">
                                    Github Repository
                                </a>
                            </h3>
                        </div>
                        <div className="col-xs-12 col-sm-12">
                            <div className="text-white">
                                <a href="https://kenpet-react-google-booksearch.herokuapp.com/">
                                    <img
                                        src="/images/react-google-book-search.gif"
                                        className="img-fluid img-thumbnail mx-auto displayed" alt="react-google-book">
                                    </img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="row">
                        <div>
                            <h3 className="card-title card-image text-center">
                                <b>React Employee Directory</b>
                            </h3>
                            <h3 className="card-title card-image text-center">
                                <a className="color-green" href="https://github.com/KPetiote/React-Employee-Directory">
                                    Github Repository
                                </a>
                            </h3>
                        </div>
                        <div className="col-xs-12 col-sm-12">
                            <div className="text-white">
                                <a href=" https://kenpet-react-employeedirectory.herokuapp.com/">
                                    <img
                                        src="/images/react-employee-directory.gif"
                                        className="img-fluid img-thumbnail mx-auto displayed" alt="react-enployee-directory">
                                    </img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="row">
                        <div>
                            <h3 className="card-title card-image text-center">
                                <b>Progressive Budget</b>
                            </h3>
                            <h3 className="card-title card-image text-center">
                                <a className="color-green" href="https://github.com/KPetiote/Progressive-Budget">
                                    Github Repository
                                </a>
                            </h3>
                        </div>
                        <div className="col-xs-12 col-sm-12">
                            <div className="text-white">
                                <a href="https://kenpet-progressive-budget.herokuapp.com/">
                                    <img
                                        src="/images/progressive-budget.gif"
                                        className="img-fluid img-thumbnail mx-auto displayed" alt="progressive-budget">
                                    </img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="row">
                        <div>
                            <h3 className="card-title card-image text-center">
                                <b>Note Taker</b>
                            </h3>
                            <h3 className="card-title card-image text-center">
                                <a className="color-green" href="https://github.com/KPetiote/Note-Taker">
                                    Github Repository
                                </a>
                            </h3>
                        </div>
                        <div className="col-xs-12 col-sm-12">
                            <div className="text-white">
                                <a href="https://kenpet-note-taker.herokuapp.com/">
                                    <img
                                        src="/images/note-taker-website.gif"
                                        className="img-fluid img-thumbnail mx-auto displayed" alt="note-taker">
                                    </img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                </div>
            </div>    
        </main>
    )
}

export default Projects;