import React, { useState }from 'react';
import About from './About';
import Contact from './Contact';
import Samples from './Samples';
import NextGigs from './NextGigs';
//import Techrider from './Techrider';
//import SpotifyAuth from './spotifyAuth';

import { NavLink } from 'react-router-dom';

const Home = () => {  
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
      // Set the accepted state to true when the user accepts the disclaimer
      setAccepted(true);
      // You can also set a cookie here to remember the user's choice
    };
  
    const handleDecline = () => {
      // Handle the case when the user declines the disclaimer
      alert('You declined to accept the disclaimer. You will not proceed further.');
      // You can also redirect the user to another page or take any other action
    };
  
    if (!accepted) {
        return (
            <div>
                <section className="Section0" id="Coockie">
                    <div className="Coockie">
                        <h1 className="custom-text lead display-4 fw-bolder mt-6 mb-2 text-center">Disclaimer</h1>
                        <p className="custom-text lead fw-bolder fs-2 mb-2 text-center">This website uses cookies to ensure you get the best experience.</p>
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5  text-center">
                                <div className="buttons d-flex justify-content-center btn btn-dark me-4 rounded-pill px-4 py-2" onClick={handleAccept}>
                                    Accept
                                </div>   
                                <div className="buttons d-flex justify-content-center btn btn-outline-dark rounded-pill px-4 py-2" onClick={handleDecline}>
                                    Decline
                                </div>
                            </div>    
                        </div>  
                    </div>   
                </section>
            </div>    
      );
    }
    return (
        <div>
            <section className="Section1" id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5  text-center">
                            <h1 className="custom-text lead display-4 fw-bolder mt-6 mb-2 text-center">Welcome</h1>
                            <p className="custom-text lead fw-bolder fs-2 mb-2 text-center">to</p>
                            <div className="logo-container"></div>
                            <div className="buttons d-flex justify-content-center"style={{visibility:'hidden'}}>
                                <NavLink to="/contact" className="btn btn-light me-4 
                                rounded-pill px-4 py-2">Get Quote</NavLink>
                                <NavLink to="/services" className="btn btn-outline-light 
                                rounded-pill px-4 py-2">Our Services</NavLink>
                            </div>
                        </div>
                        {/*
                            <div id="vid_player_home" className="row justify-content-center mt-5 pt-5">                            
                                <ReactPlayer
                                    className='react-player'
                                    url= './assets/video01.mp4'
                                    controls = {true}
                                    playing = {true}
                                />                         
                            </div>
                        */}
                    </div>   
                </div> 
            </section>
            <NextGigs />
            <About />
            <Samples />
            <Contact />
            {/*<SpotifyAuth />*/}
            {/*<Techrider />*/}
        </div>
    )
}

export default Home