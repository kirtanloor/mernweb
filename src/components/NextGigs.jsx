import React from "react";

const NextGigs = () => {
    
    return (
        <div>
            <section className="Section2" id="nextgigs">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="display-4 fw-bolder text-center mt-2 mb-1 text-white" >Our Next Gigs</h3>
                            <h1 className="display-6 text-center mb-1 text-white">Stay <b>tuned </b>for our next <b>Events </b></h1>
                            <hr className="w-75 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div  className="card p-3 sm-4" >
                                <div className="card-body text-center">
                                        <i className="fa fa-calendar fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-2 fw-bold">20.01.2024 20:30 Uhr</h5>
                                    <p></p>
                                    <p className="card-text lead fs-4">
                                        Kirchstraße 35, 59823 Arnsberg (Sauerland)
                                        <br></br>
                                    </p>
                                    <a href="https://www.facebook.com/profile.php?id=100057138983052">
                                        <img src="/assets/Sauerlaender.jpg" alt="About"
                                        className="rounded mx-auto d-block w-100 mt-1"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card p-3 sm-4" >
                                <div className="card-body text-center">
                                        <i className="fa fa-calendar fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-2 fw-bold">01.03.2024 19:00 Uhr</h5>
                                    <p className="card-text lead fs-4">
                                        Hauptstraße 76, 59846 Sundern (Sauerland)
                                        <br></br>
                                    </p>
                                    <a href="https://www.facebook.com/MetropolSundern/?locale=de_DE">
                                        <img src="/assets/Metro 2024.png" alt="About"
                                        className="rounded mx-auto d-block w-100 mt-1"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card p-3 sm-4" >
                                <div className="card-body text-center">
                                        <i className="fa fa-calendar fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-2 fw-bold">09.05.2024 14:00 Uhr
                                    </h5>
                                    <p className="card-text lead fs-4">
                                        Eventhof Markt 15 04539 Groitzsch (Leipzig)
                                        <br></br>
                                    </p>
                                    <img src="/assets/Groitzsch.png" alt="About"
                                        className="rounded mx-auto d-block w-100 mt-1"/>
                                </div>
                            </div>
                        </div>
                    <div className="row mt-5">

                    </div>   
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NextGigs;