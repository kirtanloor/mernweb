import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light shadow">
          <div className="container-fluid">
          <NavLink className="navbar-brand fw-folder fs-4 mx-auto" to="/">The Speech</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
              <ul className="navbar-nav me-auto ml-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                {/*
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">Services</NavLink>
                </li>
                */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/techrider">Techrider</NavLink>
                </li>
              </ul>
              
                <button className="btn btn-outline-primary ms-auto px-4 rounded-pill"  style={{visibility:'hidden'}}>
                  <i className="fa fa-sign-in me-2"></i> Login
                </button>
                <button className="btn btn-outline-primary ms-2 px-4 rounded-pill" style={{visibility:'hidden'}}>
                  <i className="fa fa-user-plus me-2"></i>Register
                </button>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Navbar;