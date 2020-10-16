import React from 'react';
import {Link} from 'react-router-dom'

function Nav(){

    return(
        <div>
             <header className="main_menu home_menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" id="logo"> Emergency Ambulance  </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse main-menu-item justify-content-center"
                                    id="navbarSupportedContent">
                                    <ul className="navbar-nav align-items-center " id="navlistStyle">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/" >Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">Regigister your Ambulance</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/dashboard" >Dashboard</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about" >about</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link" >See a Doctors</a>
                                        </li> */}

                                        {/* <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Pages
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" >services</a>
                                                <a className="dropdown-item" >depertments</a>
                                                <a className="dropdown-item" >Elements</a>
                                            </div>
                                        </li> */}
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <a className="btn_2 d-none d-lg-block" href="#">HOT LINE- 09856</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Nav;