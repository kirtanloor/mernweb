import React, { useState } from 'react';

const CookieConsentManager = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    // Set the accepted state to true when the user accepts the disclaimer
    setAccepted(true);
    // You can also set a cookie here to remember the user's choice
  };

  const handleDecline = () => {
    // Handle the case when the user declines the disclaimer
  //  alert('You declined to accept the disclaimer. You will not proceed further.');
    // You can also redirect the user to another page or take any other action
  };

  if (!accepted) {
    return (
      <div>
        <section className="Section0" id="Coockie">
          <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 mt-5  text-center">
                    <h1 className="custom-text lead display-4 fw-bolder mt-6 mb-2 text-center">Disclaimer</h1>
                    <p className="custom-text lead fw-bolder fs-2 mb-2 text-center">This website uses cookies to ensure you get the best experience.</p>
                    <div className="buttons d-flex justify-content-center btn btn-light me-4 rounded-pill px-4 py-2 fs-2" onClick={handleAccept}>
                      Accept
                    </div>   
                    <div className="buttons d-flex justify-content-center btn btn-outline dark me-4 rounded-pill px-4 py-2 fs-2" onClick={handleAccept}>
                      Decline
                    </div>
                </div>
            </div>  
          </div>   
        </section>
      </div>    
    );
  }

  // Render the rest of your app once the disclaimer is accepted
  return (
    <div className="app">
      <h1>Welcome to the Website!</h1>
      {/* Add your main content here */}
    </div>
  );
};

export default CookieConsentManager;