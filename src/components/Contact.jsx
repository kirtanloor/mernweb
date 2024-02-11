import React from "react";

const Contact = () => {
    return (
        <div>
            <section className="Section5" id="contact">
                <div className="container my-p py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h1 className="lead fs-7 display-5 fw-bolder text-center mt-2 mb-4 text-white">Have Some <b>Question?</b></h1>
                            <h3 className="lead display-4 fw-bolder text-center mb-0 text-white">Contact Us!</h3>
                            <hr className="w-75 mx-auto" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center mb-2">
                        <img src="/assets/Contact.png" alt="Contact" className="rounded mx-auto d-block w-75  mt-2" />
                    </div>
        
                    <div className="col-md-6 mr-2" >
                        <ul className='list-unstyled text-center'>
                            <li className='fs-1 fw-bold ms-3 mt-4'>
                                <a href="mailto:info@the-speech.de">Email Us @ info@the-speech.de</a>
                            </li>
                        </ul>
                        <form action="https://formspree.io/f/myyaeabd" method="POST" >
                            <div className="fs-2 fw-bold mb-3">
                                <label htmlFor="name" className="form-label">
                                    Your Name
                                </label>
                                <input 
                                    type="text" 
                                    name="text"
                                    className="form-control fs-1 fw-bold ms-3 mt-4" 
                                    id="name" 
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="fs-2 fw-bold mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Email address
                                </label>
                                <input 
                                    type="email" 
                                    name="email"
                                    className="form-control fs-1 fw-bold ms-3 mt-4" 
                                    id="exampleFormControlInput1" 
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="fs-2 fw-bold mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                    Your Message
                                </label>
                                <textarea 
                                    name="message"
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="5">
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-primary display-4 mb-3">
                                Send Message <i className="fs-2 fw-bold fa fa-paper-plane ms-2"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;