import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer text-white">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                                <h4>The Speech</h4>
                                <ul className='list-unstyled text-center'>
                                    <li className='fs-5 ms-3 mt-4'>
                                        <a href="mailto:info@the-speech.de">Email Us @ info@the-speech.de</a>
                                    </li>
                                </ul>
                        </div>
                        <div className="row">    
                            <div className="col-2" style={{visibility:'hidden'}}>
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            Features
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            FAQs
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            About
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-4 offset-1" style={{visibility:'hidden'}}>
                                <form>
                                    <h5>Subscribe to our Newsletter</h5>
                                    <p>Monthly digest of whats new and exciting from us</p>
                                    <div className="d-flex w-100 gap-2">
                                        <label htmlFor="newsletter" className="visually-hidden">
                                            Email address
                                        </label>
                                        <input
                                            id="newsletter1"
                                            type="text"
                                            className="form-control"
                                            placeholder='Email address'
                                        />
                                        <button 
                                            className='btn btn-primary rounded-pill px-4'
                                            type="button"
                                        >
                                            Subscribe 
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between pt-4 mt-4 border-top'>
                            <p>@2023 The-Speech</p>
                            <ul className='list-unstyled d-flex'>
                                <li className='ms-3'>
                                    <a href="https://www.facebook.com/The-Speech-102596509156130" target="_blank"
				rel="noopener noreferrer" className="facebook social">
                                        <i className='fa fa-facebook fa-2x'></i>
                                    </a>
                                </li>
                                <li className='ms-3'>
                                    <a href="https://www.instagram.com/_the_speech_/" target="_blank"
				rel="noopener noreferrer" className="instagram social">
                                        <i className='fa fa-instagram fa-2x'></i>
                                    </a>
                                </li>
                                <li className='ms-3'>
                                    <a href="https://www.tiktok.com/@the_speech_" target="_blank"
				rel="noopener noreferrer" className="tiktok social">
                                        <i className='fa fa-tiktok fa-2x'></i>
                                    </a>
                                </li>
                                <li className='ms-3'>
                                    <a href="https://www.youtube.com/channel/UCYb3_tZ1yfUAwfbubuU6Feg" target="_blank"
				rel="noopener noreferrer" className="youtube social">
                                        <i className='fa fa-youtube fa-2x'></i>
                                    </a>
                                </li>
                                <li className='ms-3'>
                                    <a href="https://open.spotify.com/artist/6zOg33MHUlnxrNPsi51KRj?si=xvrHYJzmTgyWJWl7SsBlbg" target="_blank"
				rel="noopener noreferrer" className="spotify social">
                                        <i className='fa fa-spotify fa-2x'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </footer>
        </div>
    )
}

export default Footer;