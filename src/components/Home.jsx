import React from 'react';
import ReactPlayer from 'react-player';
import About from './About';
import Contact from './Contact';
//import Services from './Services';
//import Techrider from './Techrider';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5  text-center">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">The Speech</h1>
                            <p className="lead fs-4 mb-4 text-center text-white">Welcome to our Band Page!</p>
                            <div className="buttons d-flex mt-3 justify-content-center"style={{visibility:'hidden'}}>
                                <NavLink to="/contact" className="btn btn-light me-4 
                                rounded-pill px-4 py-2">Get Quote</NavLink>
                                <NavLink to="/services" className="btn btn-outline-light 
                                rounded-pill px-4 py-2">Our Services</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">                            
                        <ReactPlayer
                            className='react-player'
                            url= 'https://youtu.be/MH994Xe0avI'
                            controls = {true}
                            playing = {true}
                        />                         
                    </div>
                </div> 
            </section>
            <About />
            {/*<Services />*/}
            <Contact />
            {/*<Techrider />*/}
        </div>
    )
}

export default Home