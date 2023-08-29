// src/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="link-container">
        <a className="styled-link admin-link" href="/admin">Admin</a>
        <a className="styled-link patient-link" href="/patient">Patient</a>
        <a className="styled-link doctor-link" href="/doctor">Doctor</a>
      </div>
      <h1>Patient Monitoring And Alerts System</h1>
    </div>
  );
};

export default HomePage;
