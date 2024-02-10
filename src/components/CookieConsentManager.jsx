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
    alert('You declined to accept the disclaimer. You will not proceed further.');
    // You can also redirect the user to another page or take any other action
  };

  if (!accepted) {
    return (
      <div className="cookie-consent">
        <h2>Disclaimer</h2>
        <p>This website uses cookies to ensure you get the best experience.</p>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
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