import React from "react";

const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div className="container my-p py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">Have Some <b>Question?</b></h1>
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
                            <li className='fs-5 ms-3 mt-4'>
                                <a href="mailto:info@the-speech.de">Email Us @ info@the-speech.de</a>
                            </li>
                        </ul>
                        <form action="" style={{visibility:'hidden'}}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Your Name
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Email address
                                </label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                    Your Message
                                </label>
                                <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="5">
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-primary mb-3">
                                Send Message <i className="fa fa-paper-plane ms-2"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;