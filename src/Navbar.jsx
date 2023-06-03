import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar=()=>{
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div >
                        <nav className="navbar navbar-expand-lg " >
                            <div className="container-fluid fs-5 fw-bold ">
                                <Link className="navbar-brand active text-warning " to="/">News Station</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-10 mb-2 mb-lg-0 ">
                                        <li className="nav-item">
                                            <Link className="nav-link activ text-dark" aria-current="page" to="/home">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link activ text-dark" to="/News">News</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link activ text-dark" to="/currentLocation">Weather</Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Navbar;