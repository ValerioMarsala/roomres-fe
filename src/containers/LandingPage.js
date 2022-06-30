import React from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="left-col">
        <h3>Colonna sinistra</h3>
      </div>
      <div className="right-col">
        <h1>Landing Page</h1>
        <p>Effettua il login per poter usufruire del servizio</p>
      </div>
    </div>
  );
};

export default LandingPage;
