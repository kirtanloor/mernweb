import React, { useState ,  Component } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NextGigs from './components/NextGigs'
import About from './components/About';
import Samples from './components/Samples';
import Contact from './components/Contact';
import Techrider from './components/Techrider';
import Footer from './components/Footer';
import CookieConsentManager from './components/CookieConsentManager';
//import SpotifyAuth from './components/spotifyAuth'; 
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


function App() {
  const [accepted, setAccepted] = useState(false);

  // Check if the user has accepted the disclaimer on component mount
  useEffect(() => {
      const cookieConsent = localStorage.getItem("cookie_consent");
      if (cookieConsent === "true") {
          setAccepted(true);
      }
  }, []);

  const handleAccept = () => {
      // Set the accepted state to true when the user accepts the disclaimer
      setAccepted(true);
      // Save the acceptance in localStorage
      localStorage.setItem("cookie_consent", "true");
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
    <div className="root">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path ="/nextgigs" element={<NextGigs />} />
          <Route exact path ="/about" element={<About />} />
          <Route exact path="/samples" element={<Samples />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/techrider" element={<Techrider />} />
          <Route exact path="/cookieconsentmanager" element={<CookieConsentManager />} />
          {/*<Route exact path="/spotifyauth" element={<SpotifyAuth />} />*/}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
