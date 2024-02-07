import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div class="container-fluid p-0">
                <div class="row">
                    <div class="col-12">
                        <nav class="navbar navbar-expand-md navbar-dark " style={{backgroundColor:'#116969'}}>
                            <a class="navbar-brand ms-5" href="#">Logo</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link  text-white" href="/Home">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link  text-white" href="/InterviewQuestion">Interview Question</a>
                                    </li>
                                    <li class="nav-item me-5 pe-5">
                                        <a class="nav-link  text-white" href="/FreeApi">Free Api</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;