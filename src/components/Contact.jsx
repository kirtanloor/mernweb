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
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center mb-2">
                        <img src="/assets/contact.png" alt="Contact" className="w-75 ml-2" />
                    </div>
                    <div className="col-md-6 mr-2">
                        <div>
                            <p>
                                Available soon
                            </p>
                        </div>
                        <form action="">
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