import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
      <div>
        <nav id="Navbar" className="navbar navbar-expand-lg fw-bold fs-1 shadow fixed-top">
          <div className="container-fluid">
          <NavLink className="navbar-brand fw-folder fw-bold fs-1 mx-auto" to="/">
            <img className="logo-nav display-4" src="/assets/the-speech-vektor-red_1.png" alt="Logo" style={{ height: '8.5rem' }} Link to="/"/>
          </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
              <ul className="navbar-nav me-auto ml-5 mb-2 mb-lg-0 fs-1">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/"></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/nextgigs">Next Gigs</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/samples">Samples</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/techrider">Techrider</NavLink>
                </li>
                {/*<li className="nav-item">
                  <NavLink className="nav-link" to="/spotifyAuth">Spotify</NavLink>
                </li>]*/}
              </ul>
              
                <button className="btn btn-outline-primary ms-auto px-4 rounded-pill"  style={{visibility:'hidden'}}>
                  <i className="fa fa-sign-in me-2"></i> Login
                </button>
                <button className="btn btn-outline-primary ms-2 px-4 rounded-pill" style={{visibility:'hidden'}}>
                  <i className="fa fa-user-plus me-2"></i>Register
                </button>
                <div className='d-flex justify-content-between text-center pt-4 mt-4'>
                    <ul className='list-unstyled d-flex'>
                      <li className='ms-3'>
                        <a href="https://www.facebook.com/The-Speech-102596509156130" target="_blank" rel="noopener noreferrer" className="facebook social">
                          <i className='fa fa-facebook fa-2x'></i>
                        </a>
                      </li>
                      <li className='ms-3'>
                        <a href="https://www.instagram.com/_the_speech_/" target="_blank"	rel="noopener noreferrer" className="instagram social">
                          <i className='fa fa-instagram fa-2x'></i>
                        </a>
                      </li>
                      <li className='ms-3'>
                        <a href="https://www.tiktok.com/@the_speech_" target="_blank"	rel="noopener noreferrer" className="tiktok social">
                          <i className='fa fa-tiktok fa-2x'></i>
                        </a>
                      </li>
                      <li className='ms-3'>
                        <a href="https://www.youtube.com/channel/UCYb3_tZ1yfUAwfbubuU6Feg" target="_blank" rel="noopener noreferrer" className="youtube social">
                          <i className='fa fa-youtube fa-2x'></i>
                        </a>
                      </li>
                      <li className='ms-3'>
                        <a href="https://open.spotify.com/artist/6zOg33MHUlnxrNPsi51KRj?si=xvrHYJzmTgyWJWl7SsBlbg" target="_blank" rel="noopener noreferrer" className="spotify social">
                          <i className='fa fa-spotify fa-2x'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Navbar;